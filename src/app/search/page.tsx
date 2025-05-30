"use client";

import React, { useEffect, useState } from "react";
import { cities, states } from "../lib/cities";
import NgoCard from "../ui/NgoCard";
import api from "../utills/api";
import Loader from "../components/Loader";
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(
  () => import('../components/Map'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <Loader />
      </div>
    )
  }
);

// First, add types for better type safety
type NGO = {
  _id: string;
  name: string;
  address: string;
  services: string;
  email: string;
  ratings: number;
};

type ApiResponse = NGO[] | { message: string };

const SearchPage: React.FC = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [assistancetype, setAssistanceType] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (city) {
      setLoading(true);
      setError(null);
      fetch(`${api}/ngos?city=${encodeURIComponent(city)}`)
        .then(async (response) => {
          const result = await response.json();
          if (!response.ok) {
            setError(result.message);
            setData([]);
          } else {
            setData(result);
            setError(null);
          }
        })
        .catch((error) => {
          console.error("Error fetching NGO data:", error);
          setError("Failed to fetch NGO data");
          setData([]);
        })
        .finally(() => {
          setLoading(false);
        });
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
        (mapElement as any)._leaflet_id = null;
      }
    };
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="col-span-3 flex justify-center">
          <Loader />
        </div>
      );
    }

    if (!state || !city) {
      return (
        <p className="col-span-3 text-center font-bold text-gray-500">
          Please select a state and city or click nearby to get NGOs
        </p>
      );
    }

    if (error) {
      return (
        <p className="col-span-3 text-center text-red-500">
          {error}
        </p>
      );
    }

    if (Array.isArray(data) && data.length > 0) {
      return data.map((ngo: NGO, index: number) => (
        <NgoCard
          id={ngo._id}
          key={index}
          name={ngo.name}
          address={ngo.address}
          services={ngo.services}
          contact={ngo.email}
          rating={ngo.ratings}
        />
      ));
    }

    return (
      <p className="col-span-3 text-center text-red-500">
        No NGOs found in the selected city
      </p>
    );
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center px-8 pt-28 pb-8">
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
        {renderContent()}
      </div>
      {/*  Map */}
      <h2 className="self-start text-2xl font-bold mt-4">Nearby NGOs</h2>
      <MapWithNoSSR data={Array.isArray(data) ? data : []} />
    </div>
  );
};

export default SearchPage;
