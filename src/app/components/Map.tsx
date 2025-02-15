import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  DEFAULT_ZOOM,
  DefaultIcon,
  INDIA_BOUNDS,
  INDIA_CENTER,
  MapUpdater,
} from "../utills/map";

L.Marker.prototype.options.icon = DefaultIcon;

interface NGO {
  name: string;
  services: string;
  contact: string;
  rating: number;
  location: [number, number];
}

interface MapContainerDivProps {
  data: NGO[] | string;
}

const MapContainerDiv: React.FC<MapContainerDivProps> = ({ data }) => {
  return (
    <div className="w-full">
      <MapContainer
        id="map"
        center={INDIA_CENTER}
        zoom={DEFAULT_ZOOM}
        bounds={INDIA_BOUNDS}
        className="h-64 w-full mt-4"
        style={{ height: "500px", width: "100%" }}
      >
        {Array.isArray(data) && <MapUpdater data={data} />}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          (data as NGO[]).map((ngo: NGO, index: number) => (
          <Marker key={index} position={ngo.location}>
            <Popup>
              <strong>{ngo.name}</strong>
              <br />
              {ngo.services}
              <br />
              Contact: {ngo.contact}
              <br />
              Rating: {ngo.rating} ⭐
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      ;
    </div>
  );
};

export default MapContainerDiv;