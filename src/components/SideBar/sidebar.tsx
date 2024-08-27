"use client";

import Image from "next/image";
import logo from "../../images/logo.svg";
import seachIcon from "../../images/search_icon.png";
import clearIcon from "../../images/close.png";
import home from "../../images/home.png";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useBearStore from "@/app/store/store";
interface ID {
  id?: string | number;
}

function SideBar({ id }: { id: ID }) {
  const [searchText, setSearchText] = useState("");
  const menuId = JSON.parse(localStorage.getItem("menuId") || "null");
  const subMenuId = JSON.parse(localStorage.getItem("subMenuId") || "null");
  const openMenu = JSON.parse(localStorage.getItem("openMenu") || "null");
  const [open, setOpen] = useState(false);
  const [numberOpen, seNumberOpen] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const handleToggleMenu = (value: any) => {
    console.log("value", value);
    localStorage.setItem("menuId", JSON.stringify(value));
    localStorage.setItem("openMenu", JSON.stringify(!open));
    setOpen(!open);
    seNumberOpen(value);
  };

  const handleSelect = (id: string) => {
    setSelectedId(id);
    localStorage.setItem("subMenuId", JSON.stringify(id));
  };
  return (
    <div className="bg-[#283e5b] h-full fixed z-10 top-0 left-0 bottom-0">
      <div className="flex items-center justify-center p-[20px] flex-col border border-b-[6px] border-[#435c7c]">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} className="cursor-pointer" />
        </Link>
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
          {searchText && (
            <Image
              src={clearIcon}
              alt="search_icon"
              width={12}
              className="absolute top-[18px] right-[6px] cursor-pointer filter invert"
              onClick={() => setSearchText("")}
            />
          )}
        </div>
      </div>
      <div className="p-[10px]">
        <div className="text-white">
          <Link href={`/`}>
            <div className="group parent flex items-center space-between w-full mb-[10px] cursor-pointer height-[20px] p-[4px] hover:bg-white hover:text-black">
              <Image
                src={home}
                alt="home-icon"
                width={20}
                className="filter invert inline-block group-hover:filter-none"
              />
              <span className="inline-block ml-[10px] text-[18px] leading-[18px]">
                Home
              </span>
            </div>
          </Link>
          <div
            onClick={() => {
              handleToggleMenu(1);
              handleSelect("introduce");
            }}
            className={`${
              selectedId === "introduce" || subMenuId === "introduce"
                ? "bg-white text-black"
                : "black"
            } flex justify-between items-center`}
          >
            <span className="text-[18px] p-[4px]">
              <Link href={`/work_shop/${id}/introduce`}>1. Giới thiệu</Link>
            </span>
            <span>&#9660;</span>
          </div>
          <div
            className={
              (open && numberOpen === 1) ||
              (menuId === 1 && open) ||
              (openMenu && menuId === 1)
                ? "block pl-[10px]"
                : "hidden"
            }
          >
            <ul>
              <li
                onClick={() => handleSelect("ec2-and-auto-scaling-group")}
                className={
                  selectedId === "ec2-and-auto-scaling-group" ||
                  subMenuId === "ec2-and-auto-scaling-group"
                    ? "bg-white text-black"
                    : "black"
                }
              >
                <Link href={`/work_shop/${id}/ec2-and-auto-scaling-group`}>
                  1.0 EC2 và Auto Scaling Group
                </Link>
              </li>
              <li
                onClick={() => handleSelect("vpc")}
                className={
                  selectedId === "vpc" || subMenuId === "vpc"
                    ? "bg-white text-black"
                    : "black"
                }
              >
                <Link href={`/work_shop/${id}/vpc`}>1.1 VPC</Link>
              </li>
              <li
                onClick={() => handleSelect("subnets")}
                className={
                  selectedId === "subnets" || subMenuId === "subnets"
                    ? "bg-white text-black"
                    : "black"
                }
              >
                <Link href={`/work_shop/${id}/subnets`}>1.2 Subnets</Link>
              </li>
              <li
                onClick={() => handleSelect("route-table")}
                className={
                  selectedId === "route-table" || subMenuId === "route-table"
                    ? "bg-white text-black"
                    : "black"
                }
              >
                <Link href={`/work_shop/${id}/route-table`}>
                  1.3 Route Table
                </Link>
              </li>
              <li
                onClick={() => handleSelect("internet-gateway")}
                className={
                  selectedId === "internet-gateway" ||
                  subMenuId === "internet-gateway"
                    ? "bg-white text-black"
                    : "black"
                }
              >
                <Link href={`/work_shop/${id}/internet-gateway`}>
                  1.4 Internet Gateway
                </Link>
              </li>
              <li
                onClick={() => handleSelect("nat-gateway")}
                className={
                  selectedId === "nat-gateway" || subMenuId === "nat-gateway"
                    ? "bg-white text-black"
                    : "black"
                }
              >
                <Link href={`/work_shop/${id}/nat-gateway`}>
                  1.5 NAT Gateway
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
