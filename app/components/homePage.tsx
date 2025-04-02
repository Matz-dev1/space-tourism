import Link from "next/link";
import Navbar from "./navbar";

function HomePage() {
  return (
    <div className="h-full w-full lg:bg-[url('/assets/home/background-home-desktop.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] xs:bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-center">
      <div>
        <Navbar />
      </div>
      <div className="flex lg:flex-row xs:flex-col lg:justify-start xs:text-center lg:text-start xs:align-middle md:justify-center md:text-center lg:w-[80%] lg:max-w-[1024px] md:max-w-[768px]  md:w-[80%] m-auto xs:gap-20 md:gap-2 lg:mt-80 md:mt-60 xs:min-w-[320px] pb-20 xs:mt-20">
        <div className="flex flex-col lg:w-[500px] md:w-[100%] xs:w-[100%] xs:mb-20 md:mb-20 md:px-32 xs:px-8 lg:pl-0 lg:pr-0 text-white">
          <p className="md:text-[28px] xs:text-[16px] md:tracking-[4px] xs:tracking-[15%]">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="md:text-[144px] xs:text-[80px]">SPACE</h1>
          <p className="md:text-[18px] md:text-justify xs:text-center xs:text-[15px] leading-[180%] ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex w-[50%] lg:justify-end xs:justify-center xs:m-auto">
          <Link href={"/Destination"}>
            <button className="bg-white hover:bg-gray-100 text-black font-bold md:w-[272px] md:h-[272px] xs:w-[144px] xs:h-[144px] rounded-full md:text-[32px] xs:text-[18px] cursor-pointer">
              EXPLORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
