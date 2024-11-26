"use client";
import { useRouter } from "next/navigation";
import React from "react";

const FindNearbyButton: React.FC = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/search")} className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500 text-lg font-semibold mt-4">
      Find Nearby NGOs
    </button>
  );
};

export default FindNearbyButton;
