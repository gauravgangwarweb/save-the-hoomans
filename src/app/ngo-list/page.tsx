import React from "react";
import { ngos } from "../lib/placeholder-data";
import NgoCard from "../ui/NgoCard";

const Page: React.FC = () => {
  const numberOfNGOs = 1000;
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center px-8">
      <h1 className="text-3xl font-bold mt-4">NGO List</h1>
      <p>{numberOfNGOs} NGOs are with us and many more are joining.</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {ngos.map((ngo, index) => (
          <NgoCard
            key={index}
            name={ngo.name}
            address={ngo.address}
            services={ngo.services}
            contact={ngo.contact}
            rating={ngo.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
