"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_vpc_1 from "../../../../images/screen_shot_vpc_1.png";
import screen_shot_vpc_2 from "../../../../images/screen_shot_vpc_2.png";
import screen_shot_vpc_3 from "../../../../images/screen_shot_vpc_3.png";
import screen_shot_vpc_4 from "../../../../images/screen_shot_vpc_4.png";
import screen_shot_vpc_5 from "../../../../images/screen_shot_vpc_5.png";
import screen_shot_vpc_6 from "../../../../images/screen_shot_vpc_6.png";
import screen_shot_vpc_7 from "../../../../images/screen_shot_vpc_7.png";
import coppy_icon from "../../../../images/coppy_icon.png";
import zoom_in from "../../../../images/zoom_in_icon.png";
import close from "../../../../images/close.png";
import { useRef } from "react";

interface PageProps {
  id: string;
}
function CreateVPC({ params }: { params: PageProps }) {
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
          Tạo VPC
        </h1>
        <p className="font-bold text-[18px] text-[#22a6df] my-[10px]">
          Các bước để tạo VPC
        </p>
        <p className="font-bold text-[18px] mt-[10px]">
          1. Truy cập giao diện AWS Management Console
        </p>
        <ul className="list-disc ml-[20px]">
          <li>1.1 Tìm kiếm VPC.</li>
          <li>1.2 Chọn VPC.</li>
        </ul>
        <div className="flex justify-center my-[20px]">
          <div className="relative w-[80%]">
            <Image src={screen_shot_vpc_1} alt="vpc" className="w-full" />
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
              <div className="w-[90%] relative z-10">
                <Image src={screen_shot_vpc_1} alt="vpc" className="w-full" />
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
        <p className="font-bold text-[18px] mt-[10px]">
          2. Trong giao diện VPC
        </p>
        <ul className="list-disc ml-[20px]">
          <li>
            2.1 Chọn mục <b>Your VPCs</b>.
          </li>
          <li>
            2.2 Click chọn <b>Create VPC</b>.
          </li>
        </ul>
        <div className="flex justify-center my-[20px]">
          <div className="relative w-[80%]">
            <Image src={screen_shot_vpc_2} alt="vpc" className="w-full" />
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
              <div className="w-[90%] relative z-10">
                <Image src={screen_shot_vpc_2} alt="vpc" className="w-full" />
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
        <p className="font-bold text-[18px] mt-[10px]">3. Tiến hành tạo VPC</p>
        <ul className="list-disc ml-[20px]">
          <li>
            3.1 Ở mục <b>Resources to create</b>, chọn <b>VPC only.</b>
          </li>
          <li>
            3.2 Ở mục <b>Name tag</b>, có thể đặt tên tuỳ ý, ở đây mình đặt tên
            là ASG.
          </li>
          <li>
            3.3 Ở mục <b>IPv4 CIDR block</b>, để mặc định là IPv4-CIDR manual
            input.
          </li>
          <li className="flex items-center">
            3.4 Ở mục <b>IPv4 CIDR </b> nhập địa chỉ IP của VPC, ở đây mình nhập
            là <span ref={textRef}>10.10.0.0/16</span>
            <Image
              onClick={handleCoppy}
              src={coppy_icon}
              alt="coppy-icon"
              width={10}
              className="ml-[10px] inline-block cursor-pointer"
            />
          </li>
          <li>
            3.5 Ở mục <b>IPv6 CIDR block</b> để mặc định là No IPv6 CIDR block.
          </li>
          <li>
            3.5 Ở mục <b>Tenancy</b> để mặc định là Default.
          </li>
        </ul>
        <div className="flex justify-center my-[20px]">
          <div className="relative w-[80%]">
            <Image src={screen_shot_vpc_3} alt="vpc" className="w-full" />
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
              <div className="w-[90%] relative z-10">
                <Image src={screen_shot_vpc_3} alt="vpc" className="w-full" />
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
        <div className="rounded-[4px] overflow-hidden max-w-[98%] my-[10px] mx-auto mb-[20px]">
          <div className="bg-[#dea86a] flex items-center justify-start p-[10px]">
            <span className="text-[16px] p-[4px] flex justify-center items-center text-[#dea86a] bg-white w-[20px] h-[20px] rounded-full border border-[white]">
              &#33;
            </span>
            <span className="text-white inline-block ml-[10px] font-bold text-[18px]">
              Warning
            </span>
          </div>
          <p className="bg-[#faf5e7] p-[10px]">
            Security groups hoạt động ở mức máy ảo, không phải ở mức subnet. Tuy
            nhiên, mỗi máy ảo trong một subnet có thể được gán với nhiều bộ
            Security group khác nhau.
          </p>
        </div>
        <p className="font-bold text-[18px] mt-[10px]">4. Chọn Create VPC</p>
        <div className="flex justify-center my-[20px]">
          <div className="relative w-[80%]">
            <Image src={screen_shot_vpc_4} alt="vpc" className="w-full" />
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
              <div className="w-[90%] relative z-10">
                <Image src={screen_shot_vpc_4} alt="vpc" className="w-full" />
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
        <p className="font-bold text-[18px] mt-[10px]">5. Hoàn thành tạo VPC</p>
        <div className="flex justify-center my-[20px]">
          <div className="relative w-[80%]">
            <Image src={screen_shot_vpc_5} alt="vpc" className="w-full" />
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
              <div className="w-[90%] relative z-10">
                <Image src={screen_shot_vpc_5} alt="vpc" className="w-full" />
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
        <p className="font-bold text-[18px] mt-[10px]">
          6. Kiểm tra VPC vừa tạo đã enable <b>DNS solution</b> và{" "}
          <b>DNS hostname</b> hay chưa
        </p>
        <ul className="list-disc ml-[20px] mb-[20px]">
          <li>
            Vào mục <b>Edit VPC Setting</b>.
            <div className="flex justify-center mb-[20px]">
              <div className="relative w-[80%]">
                <Image src={screen_shot_vpc_6} alt="vpc" className="w-full" />
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
                  <div className="w-[90%] relative z-10">
                    <Image
                      src={screen_shot_vpc_6}
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
          </li>
          <li>
            Ở mục <b>DNS Setting</b> tick chọn mục Enable DNS solution và DNS
            hostname và mục <b>Network Address Usage metrics settings</b> tick
            chọn Enable Network Address Usage metrics.
            <div className="flex justify-center mb-[20px]">
              <div className="relative w-[80%]">
                <Image src={screen_shot_vpc_7} alt="vpc" className="w-full" />
                <Image
                  src={zoom_in}
                  alt="zoom_in"
                  width={40}
                  className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                  onClick={() => {
                    setZoom(7);
                  }}
                />
                <div
                  className={`${
                    zoom === 7 ? "block" : "hidden"
                  } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
                >
                  <div className="w-[90%] relative z-10">
                    <Image
                      src={screen_shot_vpc_7}
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
          </li>
          <li>
            Bấm <b>Save</b> để lưu.
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default CreateVPC;
