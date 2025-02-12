import React from "react";
import ReportButton from "./ReportButton";
import { GoStar, GoStarFill } from "react-icons/go";

interface NGOCardProps {
  name: string;
  address: string;
  services: string;
  contact: string;
  rating: number;
  id: string;
}

const NgoCard: React.FC<NGOCardProps> = ({
  name,
  address,
  services,
  contact,
  rating,
  id
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < rating ? (
          <GoStarFill key={i} className="text-yellow-400" />
        ) : (
          <GoStar key={i} className="text-gray-300" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="bg-white p-5 rounded shadow flex flex-col justify-between">
      <h3 className="font-bold text-xl">{name}</h3>
      <div className="mt-2">
        <p className="text-gray-600">{address}</p>
        <p className="text-gray-600">Services Offered: {services}</p>
        <p className="text-gray-600">Contact: {contact}</p>
        <div className="flex items-center gap-1">
          <p className="text-gray-600">Rating: </p>
          {renderStars()}
        </div>
      </div>
      <ReportButton id={id} />
    </div>
  );
};

export default NgoCard;
