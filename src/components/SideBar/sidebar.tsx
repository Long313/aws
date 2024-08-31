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
    <div className="bg-[#283e5b] h-full fixed z-10 top-0 left-0 bottom-0 max-w-[300px]">
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
      <div className="py-[10px]">
        <div className="text-white">
          <Link href={`/`}>
            <div className="group parent flex items-end space-between w-full mb-[10px] cursor-pointer height-[20px] p-[4px] hover:bg-white hover:text-black">
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
            <Link
              href={`/work_shop/${id}/introduce`}
              className="flex justify-between text-[18px] p-[4px] w-full"
            >
              <span className="min-w-[30px] inline-block">
                <span className="min-w-[24px] inline-block">1.</span> Giới thiệu
              </span>
              <span className="inline-block mr-[4px]">&#9660;</span>
            </Link>
          </div>
          <div
            className={
              (open && numberOpen === 1) ||
              (menuId === 1 && open) ||
              (openMenu && menuId === 1)
                ? "block"
                : "hidden"
            }
          >
            <ul>
              <li
                onClick={() => handleSelect("ec2-and-auto-scaling-group")}
                className={`${
                  selectedId === "ec2-and-auto-scaling-group" ||
                  subMenuId === "ec2-and-auto-scaling-group"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/ec2-and-auto-scaling-group`}>
                  <span className="min-w-[24px] inline-block">1.1</span> EC2 và
                  Auto Scaling Group
                </Link>
              </li>
              <li
                onClick={() => handleSelect("vpc")}
                className={`${
                  selectedId === "vpc" || subMenuId === "vpc"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/vpc`}>
                  <span className="min-w-[24px] inline-block">1.2</span> Virtual
                  Private Cloud (VPC)
                </Link>
              </li>
              <li
                onClick={() => handleSelect("subnets")}
                className={`${
                  selectedId === "subnets" || subMenuId === "subnets"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/subnets`}>
                  <span className="min-w-[24px] inline-block">1.3</span> Subnets
                </Link>
              </li>
              <li
                onClick={() => handleSelect("route-table")}
                className={`${
                  selectedId === "route-table" || subMenuId === "route-table"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/route-table`}>
                  <span className="min-w-[24px] inline-block">1.4</span> Route
                  Table
                </Link>
              </li>
              <li
                onClick={() => handleSelect("elb")}
                className={`${
                  selectedId === "elb" || subMenuId === "elb"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/elb`}>
                  <span className="min-w-[24px] inline-block">1.5</span> Elastic
                  Load Balancing (ELB)
                </Link>
              </li>
              <li
                onClick={() => handleSelect("nat-gateway")}
                className={`${
                  selectedId === "nat-gateway" || subMenuId === "nat-gateway"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/nat-gateway`}>
                  <span className="min-w-[24px] inline-block">1.6</span> NAT
                  Gateway
                </Link>
              </li>
              <li
                onClick={() => handleSelect("rds")}
                className={`${
                  selectedId === "rds" || subMenuId === "rds"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/rds`}>
                  <span className="min-w-[24px] inline-block">1.7</span>{" "}
                  Relational Database Service (RDS)
                </Link>
              </li>
            </ul>
          </div>
          <div
            onClick={() => {
              handleToggleMenu(2);
              handleSelect("firewall");
            }}
            className={`${
              selectedId === "firewall" || subMenuId === "firewall"
                ? "bg-white text-black"
                : "black"
            } flex justify-between items-center`}
          >
            <Link
              href={`/work_shop/${id}/firewall`}
              className="flex justify-between text-[18px] p-[4px] w-full"
            >
              <span className="min-w-[30px] inline-block">
                <span className="min-w-[24px] inline-block">2.</span> Tường lửa
                trong VPC
              </span>
              <span className="inline-block mr-[4px]">&#9660;</span>
            </Link>
          </div>
          <div
            className={
              (open && numberOpen === 2) ||
              (menuId === 2 && open) ||
              (openMenu && menuId === 2)
                ? "block"
                : "hidden"
            }
          >
            <ul>
              <li
                onClick={() => handleSelect("security-group")}
                className={`${
                  selectedId === "security-group" ||
                  subMenuId === "security-group"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/security-group`}>
                  <span className="min-w-[30px] inline-block">2.1</span>
                  Security Group
                </Link>
              </li>
              <li
                onClick={() => handleSelect("NACLs")}
                className={`${
                  selectedId === "NACLs" || subMenuId === "NACLs"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/nacls`}>
                  <span className="min-w-[24px] inline-block">2.2</span> Network
                  Access Control List (NACLs)
                </Link>
              </li>
              {/* <li
                onClick={() => handleSelect("vpc-resource-map")}
                className={`${
                  selectedId === "vpc-resource-map" ||
                  subMenuId === "vpc-resource-map"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/vpc-resource-map`}>
                  <span className="min-w-[24px] inline-block">2.3</span> VPC
                  Resource Map
                </Link>
              </li> */}
            </ul>
          </div>
          <div
            onClick={() => {
              handleToggleMenu(3);
              handleSelect("prepare");
            }}
            className={`${
              selectedId === "prepare" || subMenuId === "prepare"
                ? "bg-white text-black"
                : "black"
            } flex justify-between items-center`}
          >
            <Link
              href={`/work_shop/${id}/prepare`}
              className="flex justify-between text-[18px] p-[4px] w-full"
            >
              <span className="min-w-[30px] inline-block">
                <span className="min-w-[30px] inline-block">3.</span>Các bước
                chuẩn bị
              </span>
              <span className="inline-block mr-[4px]">&#9660;</span>
            </Link>
          </div>
          <div
            className={
              (open && numberOpen === 3) ||
              (menuId === 3 && open) ||
              (openMenu && menuId === 3)
                ? "block"
                : "hidden"
            }
          >
            <ul>
              <li
                onClick={() => handleSelect("create-vpc")}
                className={`${
                  selectedId === "create-vpc" || subMenuId === "create-vpc"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/create-vpc`}>
                  <span className="min-w-[30px] inline-block">3.1</span>
                  Tạo VPC
                </Link>
              </li>
              <li
                onClick={() => handleSelect("create-subnet")}
                className={`${
                  selectedId === "create-subnet" ||
                  subMenuId === "create-subnet"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/create-subnet`}>
                  <span className="min-w-[24px] inline-block">3.2</span> Tạo
                  subnet
                </Link>
              </li>
              <li
                onClick={() => handleSelect("create-internet-gateway")}
                className={`${
                  selectedId === "create-internet-gateway" ||
                  subMenuId === "create-internet-gateway"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/create-internet-gateway`}>
                  <span className="min-w-[24px] inline-block">3.3</span> Tạo
                  Internet Gateway
                </Link>
              </li>
              <li
                onClick={() => handleSelect("create-route-table")}
                className={`${
                  selectedId === "create-route-table" ||
                  subMenuId === "create-route-table"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/create-route-table`}>
                  <span className="min-w-[24px] inline-block">3.4</span> Tạo
                  Route table
                </Link>
              </li>
              <li
                onClick={() => handleSelect("create-security-group")}
                className={`${
                  selectedId === "create-security-group" ||
                  subMenuId === "create-security-group"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/create-security-group`}>
                  <span className="min-w-[24px] inline-block">3.5</span> Tạo
                  Security Group
                </Link>
              </li>
            </ul>
          </div>
          <div
            onClick={() => {
              handleToggleMenu(4);
              handleSelect("create-ec2");
            }}
            className={`${
              selectedId === "create-ec2" || subMenuId === "create-ec2"
                ? "bg-white text-black"
                : "black"
            } flex justify-between items-center`}
          >
            <Link
              href={`/work_shop/${id}/create-ec2`}
              className="flex justify-between text-[18px] p-[4px] w-full"
            >
              <span className="min-w-[30px] inline-block">
                <span className="min-w-[30px] inline-block">4.</span>Tạo máy chủ
                EC2
              </span>
              <span className="inline-block mr-[4px]">&#9660;</span>
            </Link>
          </div>
          <div
            className={
              (open && numberOpen === 4) ||
              (menuId === 4 && open) ||
              (openMenu && menuId === 4)
                ? "block"
                : "hidden"
            }
          >
            <ul>
              <li
                onClick={() => handleSelect("create-ec2-instance")}
                className={`${
                  selectedId === "create-ec2-instance" ||
                  subMenuId === "create-ec2-instance"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/create-ec2-instance`}>
                  <span className="min-w-[30px] inline-block">4.1</span>
                  Tạo máy chủ EC2
                </Link>
              </li>
              <li
                onClick={() => handleSelect("check-connect")}
                className={`${
                  selectedId === "check-connect" ||
                  subMenuId === "check-connect"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/check-connect`}>
                  <span className="min-w-[30px] inline-block">4.2</span>Kiểm tra
                  kết nối
                </Link>
              </li>
              <li
                onClick={() => handleSelect("create-nat-gateway")}
                className={`${
                  selectedId === "create-nat-gateway" ||
                  subMenuId === "create-nat-gateway"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/create-nat-gateway`}>
                  <span className="min-w-[20px] inline-block">4.3</span> Tạo NAT
                  Gateway
                </Link>
              </li>
              <li
                onClick={() => handleSelect("reachability-analyzer")}
                className={`${
                  selectedId === "reachability-analyzer" ||
                  subMenuId === "reachability-analyzer"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/reachability-analyzer`}>
                  <span className="min-w-[30px] inline-block">4.4</span>Sử dụng
                  Reachability Analyzer
                </Link>
              </li>
              <li
                onClick={() => handleSelect("create-ec2-connect-endpoint")}
                className={`${
                  selectedId === "create-ec2-connect-endpoint" ||
                  subMenuId === "create-ec2-connect-endpoint"
                    ? "bg-white text-black"
                    : "black"
                } px-[5px]`}
              >
                <Link href={`/work_shop/${id}/create-elastic-ip`}>
                  <span className="min-w-[20px] inline-block">4.5</span> Tạo Elasic IP
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
