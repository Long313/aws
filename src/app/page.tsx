"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

import Header from "@/components/Header/page";
import work_shop from "../images/work_shop.drawio.png";
import eye_icon from "../images/eye_icon.png";
import cloud from "../images/cloud.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Home() {
  const router = useRouter();
  const [startAdventure, setStartAdventure] = useState(false);
  useEffect(() => {
    // Kích hoạt thông điệp "Let’s begin the adventure" sau 2 giây
    const timer = setTimeout(() => {
      setStartAdventure(true);
    }, 2000);

    return () => clearTimeout(timer); // Dọn dẹp bộ đếm giờ
  }, []);
  return (
    <div>
      <Header />
      <div className="mt-[70px] w-full text-center">
        <h1 className="text-[30px] text-[#22a6df]">
          <span className="inline-block">Welcome to First Cl</span>
          <Image src={cloud} alt="cloud" width={30} className="inline-block" />
          <span className="inline-block">ud Journey!</span>
        </h1>
        {/* <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-4xl font-bold opacity-0 animate-fadeIn">
            Welcome to GitHub!
          </h1>
          {startAdventure && (
            <h2 className="text-2xl font-semibold mt-5 opacity-0 animate-fadeInScale">
              Let’s begin the adventure!
            </h2>
          )}
        </div> */}
        <div className="w-full flex justify-center mt-[10px]">
          <div
            className="p-4 cursor-pointer flex items-center justify-center flex-col w-[528px] h-[495px] lg:w-[792px] lg:h-[742px] border-[2px] rounded-[5px]transform scale-95 hover:scale-100 transition-transform duration-300 shadow-2xl"
            onClick={() => router.push("/work_shop/1/introduce")}
          >
            <h2 className="mt-[10px] font-bold opacity-80">
              Workshop 1 - High Availability Architecture
            </h2>
            <Image
              src={work_shop}
              alt="work_shop_1"
              className="w-[90%] h-[90%] cursor-pointer p-[10px]"
            />
            <div className="flex justify-between items-center w-full px-[46px] mt-[20px]">
              <div>
                <span className="text-[#22a6df]">Author:</span>
                <span className="ml-[6px] italic font-bold">Long Tran</span>
              </div>
              <div className="flex">
                <Image
                  src={eye_icon}
                  alt="eye-icon"
                  width={20}
                  className="mr-[2px]"
                />
                <span className="">: 3</span>
                <span className="ml-[4px]">views</span>
              </div>
              <p className="text-[#22a6df] opacity-50 hover:opacity-100 font-medium">
                View more &#8594;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
