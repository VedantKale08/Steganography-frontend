"use client"
import Tab from "@/components/Tab";
import DecodeTextFromImage from "@/components/Text-Image/DecodeTextFromImage";
import EncodeTextToImage from "@/components/Text-Image/EncodeTextToImage";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState(0);
  return (
    <div className="px-[300px] py-4 flex flex-col gap-4 h-fit">
      <div className="flex gap-4">
        <Tab id={0} tab={tab} onClick={() => setTab(0)}>
          Encode text into image
        </Tab>
        <Tab id={1} tab={tab} onClick={() => setTab(1)}>
          Decode text from image
        </Tab>
      </div>

      {tab === 0 && <EncodeTextToImage />}
      {tab === 1 && <DecodeTextFromImage />}
    </div>
  );
}
