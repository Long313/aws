"use client";

import Image from "next/image";
import logo from "../../images/logo.svg";
import seachIcon from "../../images/search_icon.png";
import clearIcon from "../../images/close.png";
import { ChangeEvent, useState } from "react";

function SideBar() {
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };
  return (
    <div className="bg-[#283e5b] h-full">
      <div className="flex items-center justify-center p-[20px] flex-col border border-b-[6px] border-[#435c7c]">
        <Image src={logo} alt="logo" width={100} />
        <div className="relative">
          <Image
            src={seachIcon}
            alt="search_icon"
            width={20}
            className="absolute top-[15px] left-[4px] filter invert"
          />
          <input
            value={searchText}
            onChange={(e) => handleSearchText(e)}
            placeholder="Search..."
            className="mt-[10px] outline-none rounded-[4px] p-[4px] pl-[30px] bg-[#322A38] text-white border-[1px] border-[#4d6584]"
          />
          <Image
            src={clearIcon}
            alt="search_icon"
            width={12}
            className="absolute top-[18px] right-[6px] cursor-pointer filter invert"
            onClick={() => setSearchText("")}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SideBar;
