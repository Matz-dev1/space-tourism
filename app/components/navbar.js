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
      text: "Home",
      link: "/",
    },
    {
      id: 1,
      text: "Destination",
      link: "/Destination",
    },
    {
      id: 2,
      text: "Crew",
      link: "/Crew",
    },
    {
      id: 3,
      text: "Technology",
      link: "/Technology",
    },
  ];
  return (
    <div className="w-full flex flex-row justify-between pt-[35px]">
      <div className="pl-12 flex shrink-0">
        <Link href="/">
          <img src="/assets/shared/logo.svg" alt="Logo" className="w-16 h-16" />
        </Link>
      </div>
      <div className="md:flex items-center justify-center md:max-w-[65%] md:min-w-[55%] lg:max-w-[55%] lg:w-[55%]  bg-white/10 backdrop-blur-lg text-white xs:hidden">
        <nav className="">
          {navData.map(({ id, text, link }) => (
            <Link
              key={id}
              href={link}
              className={`lg:mx-[31px] md:mx-[22px] ${
                pathname.startsWith(link)
                  ? "border-b-3 pb-5 border-white"
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

        <nav className="flex flex-col items-center mt-20 space-y-6 text-xl">
          {navData.map(({ id, text, link }) => (
            <Link
              key={id}
              href={link}
              className={`px-4 py-2 w-full text-center text-white hover:text-gray-300 ${
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
