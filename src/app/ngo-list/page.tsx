import React from "react";
import { ngos } from "../lib/placeholder-data";
import NgoCard from "../ui/NgoCard";
import api from "../utills/api";

const getData = async () => {
  const res = await fetch(`${api}/all`)
  if(!res.ok) {
   return <p>Ooops There was some error at out side</p>
  }

  return res.json()
}

const Page: React.FC = async () => {
  const data = await getData()
  const numberOfNGOs = data.length;
  return (
    <div className="bg-gray-100 flex flex-col items-center px-8">
      <h1 className="text-3xl font-bold mt-4">NGO List</h1>
      <p><span className="font-bold text-green-400">{numberOfNGOs} NGOs</span> are with us and many more are joining.</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {data.map((ngo: {name: string, address: string, services: string, email: string, ratings: number, _id: string }, index: number) => (
          <NgoCard
            key={index}
            name={ngo.name}
            address={ngo.address}
            services={ngo.services}
            contact={ngo.email}
            rating={ngo.ratings}
            id={ngo._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
