"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", updateWidth);

    updateWidth();

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  const pathname = usePathname();
  const navData = [
    {
      id: 0,
      text: "HOME",
      link: "/",
    },
    {
      id: 1,
      text: "DESTINATION",
      link: "/Destination",
    },
    {
      id: 2,
      text: "CREW",
      link: "/Crew",
    },
    {
      id: 3,
      text: "TECHNOLOGY",
      link: "/Technology",
    },
  ];
  return (
    <div className="w-full flex flex-row justify-between pt-[35px]">
      <div className="pl-12 flex shrink-0 py-2">
        <Link href="/">
          <img src="/assets/shared/logo.svg" alt="Logo" className="w-16 h-16" />
        </Link>
      </div>
      <div className="md:flex items-center justify-center md:w-[700px] md:max-w-4/5 lg:max-w-[52%] lg:w-[52%] lg:min-w-[700px]  bg-white/5 backdrop-blur-lg text-white xs:hidden">
        <nav className="">
          {navData.map(({ id, text, link }) => (
            <Link
              key={id}
              href={link}
              className={`lg:mx-[31px] lg:px-0 md:mx-[22px] md:px-2 ${
                pathname === link
                  ? "border-b-3 pb-7 border-white"
                  : "opacity-100"
              }`}
            >
              <span>
                <b
                  className={`pr-1 ${
                    screenWidth >= 1024 ? "inline" : "hidden"
                  }`}
                >
                  0{id}
                </b>{" "}
                {text}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white mr-6"
        >
          {isMenuOpen ? (
            <img src={"/assets/shared/icon-close.svg"} alt="closing icon" />
          ) : (
            <img src={"/assets/shared/icon-hamburger.svg"} alt="closing icon" />
          )}
        </button>
      </div>
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-screen bg-[#0B0D17] text-white transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-10 right-5 text-white"
        >
          <img src={"/assets/shared/icon-close.svg"} alt="closing icon" />
        </button>

        <nav className="flex flex-col justify-between  mt-20 space-y-6 text-xl">
          {navData.map(({ id, text, link }) => (
            <Link
              key={id}
              href={link}
              className={`px-4 py-2 pl-[30%] w-full text-start justify-between text-white hover:text-gray-300 ${
                pathname.startsWith(link)
                  ? "border-r-3  border-white"
                  : "opacity-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <b className="pr-1 ">0{id}</b> {text}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
