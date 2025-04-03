"use client";
import Navbar from "./navbar";
import Link from "next/link";
import { useState } from "react";

function Crew() {
  const [selectedId, setSelectedId] = useState(0);
  const data = [
    {
      id: 0,
      src: "/assets/crew/image-douglas-hurley.png",
      job: "COMMANDER",
      name: "DOUGLAS HURLEY",
      text: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.`,
    },
    {
      id: 1,
      src: "/assets/crew/image-mark-shuttleworth.png",
      job: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      text: `  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.`,
    },
    {
      id: 2,
      src: "/assets/crew/image-victor-glover.png",
      job: "PILOT",
      name: "VICTOR GLOVER",
      text: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer. `,
    },
    {
      id: 3,
      src: "/assets/crew/image-anousheh-ansari.png",
      job: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      text: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space.`,
    },
  ];
  const dotsData = [
    {
      id: 0,
      name: "Douglas Hurley",
    },
    {
      id: 1,
      name: "Mark Shuttleworth",
    },
    {
      id: 2,
      name: "Victor Glover",
    },
    {
      id: 3,
      name: "Anousheh Ansari",
    },
  ];
  return (
    <div className="h-full w-full lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] xs:bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center">
      <div>
        <Navbar />
      </div>
      <div className="lg:py-[48px] md:py-0 md:pt-[48px] md:pb-0 m-auto md:w-[80%] lg:w-[100%]">
        <div className="flex flex-col gap-6 text-start justify-center items-start lg:w-4/5 xs:w-full m-auto">
          <div className="xs:m-auto md:m-0">
            <p className="tracking-[4px] text-white lg:text-[28px] md:text-[20px] xs:text-[16px] font-barlowCondensed">
              <b className="tracking-[4.72px] text-gray-800 pr-6">02</b>MEET
              YOUR CREW
            </p>
          </div>
          <div className=" flex lg:max-w-full m-auto lg:h-[734px] lg:flex-row-reverse xs:flex-col-reverse lg:my-0 md:py-0 xs:py-0 lg:gap-[32px] md:gap-6 xs:gap-[32px] xs:items-center xs:justify-center xs:text-center lg:text-start lg:items-center">
            <div className="flex lg:w-1/2 xs:w-full lg:py-0 xs:py-8 lg:px-0 lg:pl-6 lg:h-[734px]">
              <img
                src={data.find((item) => item.id === selectedId)?.src}
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                }}
                className="xs:m-auto xs:w-[100%] xs:h-auto lg:mx-0 lg:max-h-[650px] md:max-w-[400px] lg:max-w-full xs:max-w-[270px]
 "
              />
            </div>
            <div className=" flex flex-col lg:w-1/2  xs:w-full text-white lg:px-0 md:px-0 xs:mt-16 lg:my-0 gap-[40px] xs:px-6 lg:justify-between lg:h-[734px] ">
              <div className="flex flex-col gap-10 lg:justify-center lg:my-auto lg:h-auto xs:px-12 lg:px-0">
                <p className="text-gray-500 lg:text-[32px] md:text-[24px] xs:text-[18px] ">
                  {data.find((item) => item.id === selectedId)?.job}
                </p>
                <h1 className="lg:text-[56px] md:text-[40px] xs:text-[24px]">
                  {data.find((item) => item.id === selectedId)?.name}
                </h1>
                <p className="lg:text-justify lg:text-[18px] md:text-[16px] xs:text-[15px] text-[#D0D6F9] font-barlow xs:text-center">
                  {data.find((item) => item.id === selectedId)?.text}
                </p>
              </div>
              <div className="flex gap-8 xs:justify-center lg:justify-start ">
                {dotsData.map(({ id, name }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedId(id)}
                    name={name}
                    className={`text-white md:text-[16px] xs:text-[14px] bg-white opacity-10 hover:opacity-50 lg:p-2 lg:px-2 lg:py-2 xs:p-1.5 xs:px-1.5 xs:py-1.5 cursor-pointer rounded-full ${
                      selectedId === id
                        ? " bg-white hover:bg-white opacity-100"
                        : ""
                    }`}
                  >
                    <span className="w-0.5 h-0.5"></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
