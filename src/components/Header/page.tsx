"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../images/logo.svg";
import seachIcon from "../../images/search_icon.png";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import DayNightToggler from "../DayNightToggler/page";

function Header() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };
  return (
    <div className="z-10 fixed px-[20px] top-0 right-0 left-0 h-[50px] bg-[#283e5b] text-white flex justify-between items-center">
      <div className="w-1/3">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={60}
            className="inline-block cursor-pointer"
          />
        </Link>
      </div>
      <div className="h-full flex justify-center items-center w-1/3 relative">
        <Image
          src={seachIcon}
          alt="search_icon"
          width={20}
          className="absolute top-[15px] left-[15px] filter invert"
        />
        <input
          value={searchText}
          onChange={(e) => handleSearchText(e)}
          placeholder="Search..."
          className="outline-none rounded-[4px] p-[4px] pl-[40px] bg-[#322A38] text-white border-[1px] border-[#4d6584] min-w-[400px] w-full"
        />
      </div>
      <div className="flex justify-end items-center h-full w-1/3">
        <span
          className="inline-block ml-[10px] cursor-pointer"
          onClick={() => router.push("")}
        >
          Home
        </span>
        <span className="inline-block ml-[10px]">Contact</span>
        <span className="inline-block ml-[10px]">Signin</span>
        <div className="">
          <DayNightToggler/>
        </div>
      </div>
    </div>
  );
}

export default Header;
