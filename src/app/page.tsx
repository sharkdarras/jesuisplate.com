"use client";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative h-96 grow-1 flex flex-col justify-center p-8 gap-4">
      <img id="chanteuse" src="/imgs/chanteuse.png" alt="Une chanteuse!" />

      <Link
        href="madelaine-en-vacances"
        className="px-6 py-3 bg-turquoise rounded-3xl text-xl flex items-center justify-center"
      >
        #MadelaineEnVacances
        <FaExternalLinkAlt className="ml-2 h-4" />
      </Link>
      <Link
        href="open-source"
        className="px-6 py-3 bg-turquoise rounded-3xl text-xl flex items-center justify-center"
      >
        Open-source
        <FaExternalLinkAlt className="ml-2 h-4" />
      </Link>
    </div>
  );
}
