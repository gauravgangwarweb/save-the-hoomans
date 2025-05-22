"use client";
import { useRouter } from "next/navigation";
import React from "react";

const FindNearbyButton: React.FC = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/search")} className="bg-[#00796B] text-white px-4 py-2 rounded-lg hover:bg-[#009688] text-lg font-semibold mt-4">
      Find Nearby NGOs
    </button>
  );
};

export default FindNearbyButton;
