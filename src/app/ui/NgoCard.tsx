import React from "react";
import ReportButton from "./ReportButton";

interface NGOCardProps {
  name: string;
  address: string;
  services: string;
  contact: string;
  rating: number;
}

const NgoCard: React.FC<NGOCardProps> = ({
  name,
  address,
  services,
  contact,
  rating,
}) => {
  return (
    <div className="bg-white p-5 rounded shadow">
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-gray-600">{address}</p>
      <p className="text-gray-600">Services Offered: {services}</p>
      <p className="text-gray-600">Contact: {contact}</p>
      <p className="text-gray-600">Rating: {rating} ⭐</p>
      <ReportButton />
    </div>
  );
};

export default NgoCard;
