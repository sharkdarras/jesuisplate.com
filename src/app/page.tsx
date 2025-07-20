"use client";
import { useState } from "react";
import OpenSourceBlock from "./open-source-block";

export default function Home() {
  const [isOpenSourceBlockOpen, setIsOpenSourceBlockOpen] = useState(true);

  return (
    <>
      {isOpenSourceBlockOpen && (
        <OpenSourceBlock onClose={() => setIsOpenSourceBlockOpen(false)} />
      )}
      <img id="chanteuse" src="/imgs/chanteuse.png" alt="Une chanteuse!" />
    </>
  );
}
