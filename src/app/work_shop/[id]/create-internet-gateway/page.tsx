"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_internet_gateway_1 from "../../../../images/screen_shot_internet_gateway_1.png";
import screen_shot_internet_gateway_2 from "../../../../images/screen_shot_internet_gateway_2.png";
import screen_shot_internet_gateway_3 from "../../../../images/screen_shot_internet_gateway_3.png";
import screen_shot_internet_gateway_4 from "../../../../images/screen_shot_internet_gateway_4.png";
import screen_shot_internet_gateway_5 from "../../../../images/screen_shot_internet_gateway_5.png";
import screen_shot_internet_gateway_6 from "../../../../images/screen_shot_internet_gateway_6.png";
import screen_shot_internet_gateway_7 from "../../../../images/screen_shot_internet_gateway_7.png";
import screen_shot_subnet_8 from "../../../../images/screen_shot_subnet_8.png";
import screen_shot_subnet_9 from "../../../../images/screen_shot_subnet_9.png";
import screen_shot_subnet_10 from "../../../../images/screen_shot_subnet_10.png";
import screen_shot_subnet_11 from "../../../../images/screen_shot_subnet_11.png";
import coppy_icon from "../../../../images/coppy_icon.png";
import zoom_in from "../../../../images/zoom_in_icon.png";
import close from "../../../../images/close.png";
import { useRef } from "react";
import Tip from "../../../../components/Tip/page";

interface PageProps {
  id: string;
}
function CreateSubnet({ params }: { params: PageProps }) {
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
          Tạo Internet Gateway
        </h1>
        <div>
          <p className="font-bold text-[18px] my-[10px] text-[#22a6df]">
            Các bước tạo Internet Gateway
          </p>
          <p className="font-bold text-[18px]">
            1. Trong giao diện của VPC Dashboard
          </p>
          <p>
            - Chọn <b>Internet gateways</b>
          </p>
          <p>
            - Click chọn <b>Create internet gateway</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_internet_gateway_1}
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
                <div className="w-[90%] relative z-10">
                  <Image
                    src={screen_shot_internet_gateway_1}
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
          <p className="font-bold text-[18px]">
            1. Cấu hình cho Internet gateway
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục name tag <b>Nhập Internet Gateway</b>
            </li>
            <li>
              Chọn <b>Create internet gateway</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_internet_gateway_2}
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
                <div className="w-[90%] relative z-10">
                  <Image
                    src={screen_shot_internet_gateway_2}
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
          <p>3. Hoàn thành tạo Internet gateway</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_internet_gateway_3}
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
                <div className="w-[90%] relative z-10">
                  <Image
                    src={screen_shot_internet_gateway_3}
                    alt="screen_shot_internet_gateway_3"
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
            4. Thực hiện Attach VPC ngay sau khi tạo thành công Internet gateway
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_internet_gateway_4}
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
                <div className="w-[90%] relative z-10">
                  <Image
                    src={screen_shot_internet_gateway_4}
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
          <p> Hoặc Attach VPC theo các bước sau:</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Hoặc chọn <b>Actions</b>
            </li>
            <li>
              Chọn <b>Attach to VPC</b>
              <div className="flex justify-center my-[20px]">
                <div className="relative w-[80%]">
                  <Image
                    src={screen_shot_internet_gateway_5}
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
                      zoom === 5 ? "block" : "hidden"
                    } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
                  >
                    <div className="w-[90%] relative z-10">
                      <Image
                        src={screen_shot_internet_gateway_5}
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
            <li>Chọn ASG, VPC ID sẽ được tự động điền.</li>
            <li>
              Click vào Attach internet gateway
              <div className="flex justify-center my-[20px]">
                <div className="relative w-[80%]">
                  <Image
                    src={screen_shot_internet_gateway_6}
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
                    <div className="w-[90%] relative z-10">
                      <Image
                        src={screen_shot_internet_gateway_6}
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
          </ul>
          <p>
            5. Khi attach thành công state của Internet gateway sẽ chuyển thành
            Attached
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_internet_gateway_7}
                alt="vpc"
                className="w-full"
              />
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
                    src={screen_shot_internet_gateway_7}
                    alt="screen_shot_internet_gateway_7"
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

export default CreateSubnet;
