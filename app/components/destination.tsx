"use client";
import Navbar from "./navbar";
import Link from "next/link";
import { useState } from "react";

function Destination() {
  const [selectedId, setSelectedId] = useState(0);
  const data = [
    {
      id: 0,
      src: "/assets/destination/image-europa.png",
      title: "EUROPA",
      text: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.`,
      stat: {
        0: "628 MIL. KM",
        1: "3 YEARS",
      },
    },
    {
      id: 1,
      src: "/assets/destination/image-mars.png",
      title: "MARS",
      text: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!`,
      stat: {
        0: "225 MIL. KM",
        1: "9 MONTHS",
      },
    },
    {
      id: 2,
      src: "/assets/destination/image-moon.png",
      title: "MOON",
      text: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.`,
      stat: {
        0: "384,400 KM",
        1: "3 DAYS",
      },
    },
    {
      id: 3,
      src: "/assets/destination/image-titan.png",
      title: "TITAN",
      text: `  The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.`,
      stat: {
        0: "1.6 BIL. KM",
        1: "7 YEARS",
      },
    },
  ];
  const planetsData = [
    {
      id: 0,
      name: "EUROPA",
    },
    {
      id: 1,
      name: "MARS",
    },
    {
      id: 2,
      name: "MOON",
    },
    {
      id: 3,
      name: "TITAN",
    },
  ];
  return (
    <div className="h-full w-full lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] xs:bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-center">
      <div>
        <Navbar />
      </div>
      <div className="py-[48px] m-auto md:w-[80%] lg:w-[100%]">
        <div className="flex flex-col gap-6 text-start justify-center items-start w-4/5 m-auto">
          <div className="xs:m-auto md:m-0">
            <p className="tracking-[4px] text-white lg:text-[28px] md:text-[20px] xs:text-[16px] font-barlowCondensed">
              <b className="tracking-[4.72px] opacity-25 pr-6">01</b>PICK YOUR
              DESTINATION
            </p>
          </div>
          <div className="flex lg:max-w-full lg:flex-row xs:flex-col lg:py-20 md:py-10 xs:py-0 lg:gap-[32px] md:gap-6 xs:gap-[32px] xs:items-center xs:justify-center xs:text-center lg:justify-start lg:text-start lg:items-start">
            <div className="lg:w-1/2 xs:w-full lg:py-0 xs:py-8 lg:px-6">
              <img
                src={data.find((item) => item.id === selectedId)?.src}
                className="xs:m-auto md:w-[300px] md:h-[300px] lg:w-[100%] lg:h-auto xs:w-[150px] xs:h-[150px] lg:mx-4 lg:max-w-[480px]"
              />
            </div>
            <div className="flex flex-col lg:w-1/2  xs:w-full text-white lg:px-6 md:px-[40px] md:mt-5 lg:mt-0 gap-10 xs:px-6">
              <div className="flex gap-8 xs:justify-center lg:justify-start">
                {planetsData.map(({ id, name }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedId(id)}
                    className={`text-white md:text-[16px] xs:text-[14px] hover:border-b-3 hover:border-gray-500 cursor-pointer tracking-[2px] font-barlowCondensed ${
                      selectedId === id
                        ? "border-b-3 border-white hover:border-white"
                        : ""
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-10">
                <h1 className="lg:text-8xl md:text-[80px] xs:text-[56px]">
                  {data.find((item) => item.id === selectedId)?.title}
                </h1>
                <p className="lg:text-justify lg:text-[18px] md:text-[16px] xs:text-[15px] text-[#D0D6F9] font-barlow xs:text-center">
                  {data.find((item) => item.id === selectedId)?.text}
                </p>
                <div className="border-t-2 border-white opacity-25"></div>
                <div className="flex md:flex-row xs:flex-col justify-center gap-6">
                  <div className="md:w-1/2 xs:w-full">
                    <p className="text-[14px] font-barlowCondensed text-[#D0D6F9] tracking-[2px]">
                      AVG. DISTANCE
                    </p>
                    <p className="text-[28px] pt-2">
                      {data.find((item) => item.id === selectedId)?.stat[0]}
                    </p>
                  </div>
                  <div className="md:w-1/2 xs:w-full">
                    <p className="text-[14px] font-barlowCondensed text-[#D0D6F9] tracking-[2px]">
                      EST. TRAVEL TIME
                    </p>
                    <p className="text-[28px] pt-2">
                      {data.find((item) => item.id === selectedId)?.stat[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
