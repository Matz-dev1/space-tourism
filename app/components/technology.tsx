"use client";
import { useState, useEffect } from "react";
import Navbar from "./navbar";

function Technology() {
  const [selectedId, setSelectedId] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", updateWidth);

    updateWidth();

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  const data = [
    {
      id: 0,
      src: {
        0: "/assets/technology/image-launch-vehicle-portrait.jpg",
        1: "/assets/technology/image-launch-vehicle-landscape.jpg",
      },
      title: "LAUNCH VEHICLE",
      text: ` A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!`,
    },
    {
      id: 1,
      src: {
        0: "/assets/technology/image-spaceport-portrait.jpg",
        1: "/assets/technology/image-spaceport-landscape.jpg",
      },
      title: "SPACEPORT",
      text: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.`,
    },
    {
      id: 2,
      src: {
        0: "/assets/technology/image-space-capsule-portrait.jpg",
        1: "/assets/technology/image-space-capsule-landscape.jpg",
      },
      title: "SPACE CAPSULE",
      text: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained. `,
    },
  ];
  const buttonsData = [
    {
      id: 0,
      number: "1",
      name: "Launch Vehicle",
    },
    {
      id: 1,
      number: "2",
      name: "Spaceport",
    },
    {
      id: 2,
      number: "3",
      name: "Space Capsule",
    },
  ];
  return (
    <div className="h-full w-full lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] xs:bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover bg-center">
      <div>
        <Navbar />
      </div>
      <div className=" py-[48px] lg:ml-auto xs:m-auto md:w-[100%] lg:w-[100%]">
        <div className="flex flex-col gap-6 text-start justify-center items-start lg:w-[90%] xs:w-full ml-auto">
          <div className="xs:m-auto md:m-auto md:w-[80%] lg:w-[100%]">
            <p className="tracking-[4px] text-white lg:text-[28px] md:text-[20px] xs:text-[16px] font-barlowCondensed">
              <b className="tracking-[4.72px] text-gray-800 pr-6">03</b>SPACE
              LAUNCH 101
            </p>
          </div>
          <div className=" flex lg:max-w-full m-auto lg:mr-0 lg:h-[734px] lg:flex-row-reverse xs:flex-col lg:my-0 md:py-0 xs:py-0 lg:gap-0 md:gap-6 xs:gap-[32px] xs:items-center xs:justify-center xs:text-center lg:text-start lg:items-center">
            <div className="flex lg:w-1/2 xs:w-full lg:py-0 xs:py-8 lg:px-0 lg:pl-6 lg:h-[734px] lg:items-center xs:pt-[64px] lg:pt-0 object-fill">
              <img
                src={
                  screenWidth > 1024
                    ? data.find((item) => item.id === selectedId)?.src[0]
                    : data.find((item) => item.id === selectedId)?.src[1]
                }
                className=" xs:w-full xs:h-auto lg:max-w-[600px] lg:m-auto lg:mr-0
 "
              />
            </div>
            <div className=" flex flex-col lg:flex-row lg:w-1/2  xs:w-full md:w-4/5 xs:m-auto lg:m-0 text-white lg:px-0 md:px-0 xs:mt-0 lg:gap-[64px] xs:gap-[40px] lg:my-auto xs:px-6 lg:justify-between lg:h-[734px] ">
              <div className="flex gap-6 xs:justify-center lg:justify-center lg:flex-col">
                {buttonsData.map(({ id, number, name }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedId(id)}
                    name={name}
                    className={`lg:text-[32px] md:text-[24px] xs:text-[14px]  hover:opacity-50 lg:w-[80px] border-gray-500 border-2 lg:h-[80px] md:w-[56px] md:h-[56px] xs:w-[40px] xs:h-[40px] cursor-pointer rounded-full ${
                      selectedId === id
                        ? "text-black bg-white hover:opacity-100"
                        : "text-white"
                    }`}
                  >
                    {number}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-[24px] lg:justify-center lg:my-auto lg:h-auto xs:px-0 md:px-12 lg:px-0">
                <div className="flex flex-col gap-[16px]">
                  <p className="text-gray-500 lg:text-[32px] md:text-[24px] xs:text-[18px] ">
                    THE TERMINOLOGY...
                  </p>
                  <h1 className="lg:text-[56px] md:text-[40px] xs:text-[24px]">
                    {data.find((item) => item.id === selectedId)?.title}
                  </h1>
                </div>
                <p className="lg:text-justify lg:text-[18px] md:text-[16px] xs:text-[15px] text-[#D0D6F9] font-barlow xs:text-center">
                  {data.find((item) => item.id === selectedId)?.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
