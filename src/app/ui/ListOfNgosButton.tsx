"use client";
import Link from "next/link";
import { motion } from "motion/react"
import React from "react";

const ListOfNgosButton: React.FC = () => {
  return (
    <Link className="mt-4" href="/ngo-list" passHref>
      <motion.span
        className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 text-lg font-semibold"
        initial= {{ opacity: 0, }}
        animate= {{ opacity: 1, }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        List of NGOs
      </motion.span>
    </Link>
  );
};

export default ListOfNgosButton;
