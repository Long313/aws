"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_nat_gateway_1 from "../../../../images/screen_shot_nat_gateway_1.png";
import screen_shot_nat_gateway_2 from "../../../../images/screen_shot_nat_gateway_2.png";
import screen_shot_nat_gateway_3 from "../../../../images/screen_shot_nat_gateway_3.png";
import screen_shot_nat_gateway_4 from "../../../../images/screen_shot_nat_gateway_4.png";
import screen_shot_nat_gateway_5 from "../../../../images/screen_shot_nat_gateway_5.png";
import screen_shot_nat_gateway_6 from "../../../../images/screen_shot_nat_gateway_6.png";
import screen_shot_ec2_7 from "../../../../images/screen_shot_ec2_7.png";
import screen_shot_ec2_8 from "../../../../images/screen_shot_ec2_8.png";
import screen_shot_ec2_9 from "../../../../images/screen_shot_ec2_9.png";
import screen_shot_ec2_10 from "../../../../images/screen_shot_ec2_10.png";
import screen_shot_ec2_11 from "../../../../images/screen_shot_ec2_11.png";
import screen_shot_ec2_12 from "../../../../images/screen_shot_ec2_12.png";

import coppy_icon from "../../../../images/coppy_icon.png";
import zoom_in from "../../../../images/zoom_in_icon.png";
import close from "../../../../images/close.png";
import { useRef } from "react";
import Tip from "../../../../components/Tip/page";

interface PageProps {
  id: string;
}
function CreateNatGateway({ params }: { params: PageProps }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [zoom, setZoom] = useState(0);
  const handleCoppy = () => {
    if (textRef.current) {
      const textToCopy = textRef.current.innerText;

      const tempTextarea = document.createElement("textarea");
      tempTextarea.value = textToCopy;

      document.body.appendChild(tempTextarea);
      tempTextarea.select();

      document.execCommand("copy");

      document.body.removeChild(tempTextarea);
    } else {
      console.error("textRef.current is null");
    }
  };
  return (
    <Layout id={params.id}>
      <div>
        <h1 className="my-[20px] text-[#22a6df] text-[24px] font-bold text-center">
          Tạo NAT Gateway
        </h1>
        <div>
          <p className="font-bold text-[18px] my-[10px] text-[#22a6df]">
            Tạo một địa chỉ Elastic IP
          </p>
          <p className="text-[18px]">
            1. Truy cập <b>EC2 Dashboard</b>
          </p>
          <p>
            - Chọn <b>Elastic IPs</b>
          </p>
          <p>
            - Click chọn <b>Allocate Elastic IP address</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_nat_gateway_1}
                alt="vpc"
                className="w-full"
              />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(1);
                }}
              />
              <div
                className={`${
                  zoom === 1 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_nat_gateway_1}
                    alt="vpc"
                    className="w-full"
                  />
                  <Image
                    src={close}
                    alt="close"
                    width={40}
                    className="absolute top-0 right-0 cursor-pointer bg-[#dbd2d21a] p-1"
                    onClick={() => setZoom(0)}
                  />
                </div>
              </div>
            </div>
          </div>
          <p>2. Trong giao diện Allocate Elastic IP address</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Public IPv4 address pool</b>, chọn Amazon's pool of
              IPv4 addresses
            </li>
            <li>
              Click chọn <b>Allocate</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_nat_gateway_2}
                alt="vpc"
                className="w-full"
              />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(2);
                }}
              />
              <div
                className={`${
                  zoom === 2 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_nat_gateway_2}
                    alt="vpc"
                    className="w-full"
                  />
                  <Image
                    src={close}
                    alt="close"
                    width={40}
                    className="absolute top-0 right-0 cursor-pointer bg-[#dbd2d21a] p-1"
                    onClick={() => setZoom(0)}
                  />
                </div>
              </div>
            </div>
          </div>
          <p>
            3. Như vậy chúng ta đã tạo thành công 1 địa chi Public IP Address
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_nat_gateway_3}
                alt="vpc"
                className="w-full"
              />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(3);
                }}
              />
              <div
                className={`${
                  zoom === 3 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_nat_gateway_3}
                    alt="vpc"
                    className="w-full"
                  />
                  <Image
                    src={close}
                    alt="close"
                    width={40}
                    className="absolute top-0 right-0 cursor-pointer bg-[#dbd2d21a] p-1"
                    onClick={() => setZoom(0)}
                  />
                </div>
              </div>
            </div>
          </div>
          <p>4. Truy cập vào VPC Dashboard</p>
          <p>
            - Click chọn <b>NAT gateways</b>
          </p>
          <p>
            - Click vào <b>Create NAT gateway</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_nat_gateway_4}
                alt="vpc"
                className="w-full"
              />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(4);
                }}
              />
              <div
                className={`${
                  zoom === 4 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_nat_gateway_4}
                    alt="vpc"
                    className="w-full"
                  />
                  <Image
                    src={close}
                    alt="close"
                    width={40}
                    className="absolute top-0 right-0 cursor-pointer bg-[#dbd2d21a] p-1"
                    onClick={() => setZoom(0)}
                  />
                </div>
              </div>
            </div>
          </div>
          <p>5. Trong giao diện Create NAT gateway</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Name</b>, nhập <b>NAT gateway</b>
            </li>
            <li>
              Trong mục <b>Subnet</b>, nhập <b>Chọn Public subnet 2</b>
            </li>
            <li>
              Trong mục <b>Connectivity type</b>, chọn <b>Public</b>
            </li>
            <li>
              Trong mục <b>Elastic IP allocation ID</b>, chọn <b>Elastic IP</b>{" "}
              vừa tạo
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_nat_gateway_5}
                alt="vpc"
                className="w-full"
              />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(5);
                }}
              />
              <div
                className={`${
                  zoom === 5 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_nat_gateway_5}
                    alt="vpc"
                    className="w-full"
                  />
                  <Image
                    src={close}
                    alt="close"
                    width={40}
                    className="absolute top-0 right-0 cursor-pointer bg-[#dbd2d21a] p-1"
                    onClick={() => setZoom(0)}
                  />
                </div>
              </div>
            </div>
          </div>
          <p>6. Thành công tạo NAT gateway</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_nat_gateway_6}
                alt="vpc"
                className="w-full"
              />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(6);
                }}
              />
              <div
                className={`${
                  zoom === 6 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_nat_gateway_6}
                    alt="vpc"
                    className="w-full"
                  />
                  <Image
                    src={close}
                    alt="close"
                    width={40}
                    className="absolute top-0 right-0 cursor-pointer bg-[#dbd2d21a] p-1"
                    onClick={() => setZoom(0)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateNatGateway;
