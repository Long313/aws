"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

import Header from "@/components/Header/page";
import work_shop from "../images/work_shop.drawio.png";
import cloud from "../images/cloud.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Home() {
    const router = useRouter();
  return (
    <div>
      <Header />
      <div className="mt-[55px] w-full text-center">
        <h1 className="text-[30px] text-[#22a6df]">
        <span className="inline-block">Welcome to First Cl</span>
        <Image src={cloud} alt="cloud" width={30} className="inline-block"/>
        <span className="inline-block">ud Journey!</span>
        </h1>
        <div className="w-full flex justify-center">
          <div className="p-4 cursor-pointer flex items-center justify-center flex-col w-[600px] border-[2px] rounded-[5px] h-[450px] transform scale-95 hover:scale-100 transition-transform duration-300 shadow-2xl" onClick={() => router.push("/work_shop/1/introduce")}>
            <h2 className="mt-[10px] font-bold opacity-80">Workshop 1 - High Availability Architecture</h2>
            <Image
              src={work_shop}
              alt="work_shop_1"
              className="w-[90%] h-[90%] cursor-pointer p-[10px]"/>
              <p className='ml-auto mr-[10px] mb-[10px] text-[#22a6df] opacity-50 hover:opacity-100 font-medium'>View more &#8594;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
