import L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const INDIA_CENTER: [number, number] = [20.5937, 78.9629];
export const INDIA_BOUNDS: [[number, number], [number, number]] = [
    [8.4, 68.7],
    [37.6, 97.25],
];
export const DEFAULT_ZOOM = 5;

export const DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export function MapUpdater({ data }: { data: { location: [number, number] }[] }) {
    const map = useMap();

    useEffect(() => {
        if (data && data.length > 0) {
            // Get bounds of all markers
            const bounds = data.reduce((bounds, ngo) => {
                const latLng = ngo.location;
                return bounds.extend(latLng);
            }, new L.LatLngBounds(data[0].location, data[0].location));

            // Fit map to these bounds with padding
            map.fitBounds(bounds, { padding: [50, 50] });
        } else {
            // If no data, show all of India
            map.fitBounds(INDIA_BOUNDS);
        }
    }, [data, map]);

    return null;
}
