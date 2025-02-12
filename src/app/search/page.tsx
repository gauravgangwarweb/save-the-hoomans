"use client";

import React, { useEffect, useState } from "react";
import { cities, states } from "../lib/cities";
import { ngos } from "../lib/placeholder-data";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import NgoCard from "../ui/NgoCard";
import api from "../utills/api";

// Fix for Leaflet marker icons not showing
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Add these constants at the top of your file
const INDIA_CENTER: [number, number] = [20.5937, 78.9629];
const INDIA_BOUNDS: [[number, number], [number, number]] = [
  [8.4, 68.7], // Southwest coordinates
  [37.6, 97.25], // Northeast coordinates
];
const DEFAULT_ZOOM = 5;

function MapUpdater({ data }) {
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

const SearchPage: React.FC = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [assistancetype, setAssistanceType] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(`${api}/ngos?city=${encodeURIComponent(city)}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching NGO data:", error));
    }
  }, [city]);

  const groupedCities = cities.reduce(
    (result: { [key: string]: string[] }, item) => {
      if (!result[item.state]) {
        result[item.state] = [];
      }
      result[item.state].push(item.city);
      return result;
    },
    {}
  );

  useEffect(() => {
    return () => {
      const mapElement = document.getElementById("map");
      if (mapElement && (mapElement as any)._leaflet_id) {
        (mapElement as any)._leaflet_id = null; // Reset Leaflet ID
      }
    };
  }, []);
  console.log(data);
  return (
    <div className="bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-2xl font-bold self-start">Search for NGOs</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <select
          className="px-2 py-3 border rounded"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="" disabled>
            Select State
          </option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          className="px-2 py-3 border rounded"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="" disabled>
            Select City
          </option>
          {groupedCities[state]?.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select
          className="px-2 py-3 border rounded"
          value={assistancetype}
          onChange={(e) => setAssistanceType(e.target.value)}
        >
          <option value="" disabled>
            Select assistance type
          </option>
          <option value="medical">Medical</option>
          <option value="shelter">Shelter</option>
          <option value="rescue">Rescue</option>
        </select>
      </div>
      {/* <button className="bg-blue-500 text-white text-lg font-bold rounded-md hover:bg-blue-600 px-8 py-2 mt-4">
        Search
      </button> */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {data === null ? (
          <p className="col-span-3 text-center font-bold text-gray-500">Please select a state and city or click nearby to get NGOs</p>
        ) : data.message ? (
          <p className="col-span-3 text-center text-red-500">{data.message}</p>
        ) : (
          data.map(
            (
              ngo: {
                name: string;
                address: string;
                services: string;
                email: string;
                ratings: number;
              },
              index: number
            ) => (
              <NgoCard
                key={index}
                name={ngo.name}
                address={ngo.address}
                services={ngo.services}
                contact={ngo.email}
                rating={ngo.ratings}
              />
            )
          )
        )}
      </div>
      {/* Interactive Map */}
      <h2 className="self-start text-2xl font-bold mt-4">Nearby NGOs</h2>
      <MapContainer
        id="map"
        center={INDIA_CENTER}
        zoom={DEFAULT_ZOOM}
        bounds={INDIA_BOUNDS}
        className="h-64 w-full mt-4"
        style={{ height: "500px", width: "100%" }}
      >
        <MapUpdater data={data} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data?.map((ngo, index) => (
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
    </div>
  );
};

export default SearchPage;
