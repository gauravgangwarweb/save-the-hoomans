"use client"
import React from "react";
import { useRouter } from "next/navigation";

interface ReportButtonProps {
//   id: string;
}

const ReportButton: React.FC<ReportButtonProps> = ({}) => {
    const router = useRouter();
  return (
    <button
      className="w-full bg-green-500 hover:bg-green-600 active:scale-105 text-white text-base font-medium rounded py-1 mt-1"
      onClick={() => router.push("/report-incident")}
    >
      Report An Incident
    </button>
  );
};

export default ReportButton;
