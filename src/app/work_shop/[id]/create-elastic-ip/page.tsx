"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_ec2_1 from "../../../../images/screen_shot_ec2_1.png";
import screen_shot_ec2_2 from "../../../../images/screen_shot_ec2_2.png";
import screen_shot_ec2_3 from "../../../../images/screen_shot_ec2_3.png";
import screen_shot_ec2_4 from "../../../../images/screen_shot_ec2_4.png";
import screen_shot_ec2_5 from "../../../../images/screen_shot_ec2_5.png";
import screen_shot_ec2_6 from "../../../../images/screen_shot_ec2_6.png";
import screen_shot_ec2_7 from "../../../../images/screen_shot_ec2_7.png";
import screen_shot_ec2_8 from "../../../../images/screen_shot_ec2_8.png";
import screen_shot_ec2_9 from "../../../../images/screen_shot_ec2_9.png";
import screen_shot_ec2_10 from "../../../../images/screen_shot_ec2_10.png";
import screen_shot_ec2_11 from "../../../../images/screen_shot_ec2_11.png";
import screen_shot_ec2_12 from "../../../../images/screen_shot_ec2_12.png";
import screen_shot_ec2_13 from "../../../../images/screen_shot_ec2_13.png";
import screen_shot_ec2_14 from "../../../../images/screen_shot_ec2_14.png";
import screen_shot_ec2_15 from "../../../../images/screen_shot_ec2_15.png";
import screen_shot_ec2_16 from "../../../../images/screen_shot_ec2_15.png";
import screen_shot_ec2_17 from "../../../../images/screen_shot_ec2_15.png";
import screen_shot_ec2_18 from "../../../../images/screen_shot_ec2_15.png";

import coppy_icon from "../../../../images/coppy_icon.png";
import zoom_in from "../../../../images/zoom_in_icon.png";
import close from "../../../../images/close.png";
import { useRef } from "react";
import Tip from "../../../../components/Tip/page";

interface PageProps {
  id: string;
}
function CreateElasticIP({ params }: { params: PageProps }) {
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
          Tạo máy chủ EC2 Instance
        </h1>
        <div>
          <p className="font-bold text-[18px] my-[10px] text-[#22a6df]">
            Tạo máy chủ EC2 nằm trong Public subnet
          </p>
          <p className="text-[18px]">
            1. Truy cập <b>AWS Management Console</b>
          </p>
          <p>
            - Tìm <b>EC2 </b>
          </p>
          <p>
            - Click chọn <b>EC2</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_1} alt="vpc" className="w-full" />
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
                  <Image src={screen_shot_ec2_1} alt="vpc" className="w-full" />
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
          <p className="text-[18px]">2. Trong giao diện EC2 Dashboard</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Chọn <b>Instances</b>
            </li>
            <li>
              Chọn <b>Launch instance</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_2} alt="vpc" className="w-full" />
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
                  <Image src={screen_shot_ec2_2} alt="vpc" className="w-full" />
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
          <p className="text-[18px]">
            3. Trong giao diện Launch an in instance
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Name and tags</b> nhập tên <b>EC2 Public 1</b>
            </li>
            <li>
              Trong mục <b>Application and OS Images (AMI)</b> chọn Amazon Linux
            </li>
            <li>
              Chọn <b>Amazon Linux 2023 AMI</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_3} alt="vpc" className="w-full" />
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
                  <Image src={screen_shot_ec2_3} alt="vpc" className="w-full" />
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
          <p className="text-[18px]">
            4. Thực hiện chọn Instance type và chọn Create new key pair
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_4} alt="vpc" className="w-full" />
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
                  <Image src={screen_shot_ec2_4} alt="vpc" className="w-full" />
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
          <p className="text-[18px]">5. Trong giao diện Create new key pair</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Key pair name</b> nhập awslab-keypair (tên có thể đặt
              theo tùy ý)
            </li>
            <li>
              Trong mục <b>Key pair type</b>, chọn RSA
            </li>
            <li>
              Trong mục <b>Private key file format</b> chọn <b>.pem</b>
            </li>
            <li>
              Click chọn <b>Create key pair</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_5} alt="vpc" className="w-full" />
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
                  <Image src={screen_shot_ec2_5} alt="vpc" className="w-full" />
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
          <p className="text-[18px]">
            6. Thực hiện cấu hình Network cho EC2 trong mục{" "}
            <b>Network settings</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>VPC</b> chọn ASG
            </li>
            <li>
              Trong mục <b>Subnet</b>, chọn Public subnet 1
            </li>
            <li>
              Trong mục <b>Auto-assign public IP</b> chọn <b>Enable</b>
            </li>
            <li>
              Trong mục <b>Firewall</b> chọn{" "}
              <b>Select existing security group</b>
            </li>
            <li>
              Trong mục <b>Common security groups</b> chọn{" "}
              <b>Public subnet - SG</b>
            </li>
            <li>
              Click chọn <b>Lauch instance</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_6} alt="vpc" className="w-full" />
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
                  <Image src={screen_shot_ec2_6} alt="vpc" className="w-full" />
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
          <p className="text-[18px]">7. Hoàn thành tạo instance</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_7} alt="vpc" className="w-full" />
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
                <div className="w-[80%] relative z-10">
                  <Image src={screen_shot_ec2_7} alt="vpc" className="w-full" />
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
          <p className="text-[18px]">
            8. Đợi khoảng 5 phút, ở cột <b>Status check</b> của Instance vừa tạo
            sẽ chuyển sang 2/2 checks passed
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_8} alt="vpc" className="w-full" />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(8);
                }}
              />
              <div
                className={`${
                  zoom === 8 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image src={screen_shot_ec2_8} alt="vpc" className="w-full" />
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
          <p className="font-bold text-[18px] my-[10px] text-[#22a6df]">
            Tạo máy chủ EC2 nằm trong Private subnet
          </p>
          <p>10. Trong giao diện EC2 Dashboard</p>
          <ul>
            <li>
              Chọn <b>Instances</b>
            </li>
            <li>
              Chọn <b>Launch Instances</b> cửa sổ Launch an instance sẽ xuất
              hiện
            </li>
          </ul>
          <p>11. Trong giao diện Launch an instance</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục Name and tags, nhập <b>EC2 Private 2</b>
            </li>
            <li>
              Trong mục AMI chọn <b> Amazon Linux</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_9} alt="vpc" className="w-full" />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(9);
                }}
              />
              <div
                className={`${
                  zoom === 9 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image src={screen_shot_ec2_9} alt="vpc" className="w-full" />
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
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Instance type</b>, chọn <b>t2.micro</b>
            </li>
            <li>
              Trong mục <b>Key pair</b> nhập <b>awslab-keypair</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_10} alt="vpc" className="w-full" />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(10);
                }}
              />
              <div
                className={`${
                  zoom === 10 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_ec2_10}
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
          <p>11. Cấu hình cho EC2 Instance ở mục Network settings</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>VPC</b>, chọn <b> ASG</b>
            </li>
            <li>
              Trong mục <b>Subnet</b> nhập <b>Private subnet 2</b>
            </li>
            <li>
              Trong mục <b>Auto-assign public IP</b> nhập <b>Disable</b>
            </li>
            <li>
              Trong mục <b>Firewall</b> nhập{" "}
              <b>Select existing security group</b>
            </li>
            <li>
              Trong mục <b>Common security groups</b> nhập{" "}
              <b>Chọn Private subnet - SG</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_11} alt="vpc" className="w-full" />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(11);
                }}
              />
              <div
                className={`${
                  zoom === 11 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_ec2_11}
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
          <p>12. Hoàn thành tạo Instance thứ 2</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_12} alt="vpc" className="w-full" />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(12);
                }}
              />
              <div
                className={`${
                  zoom === 12 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_ec2_12}
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
          <p>13. Tương tự chúng ta có thể tạo thêm 2 EC2 Instace là EC2 Public 2 và EC2 Private 1</p>
          <p>Dưới đây là cấu hình cho 2 EC2 đó </p>
          <p>- Cấu hình cho <b>EC2 Public 2</b></p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_13} alt="vpc" className="w-full" />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(13);
                }}
              />
              <div
                className={`${
                  zoom === 13 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_ec2_13}
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
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_14} alt="vpc" className="w-full" />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(14);
                }}
              />
              <div
                className={`${
                  zoom === 14 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_ec2_14}
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
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_15} alt="vpc" className="w-full" />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(15);
                }}
              />
              <div
                className={`${
                  zoom === 15 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_ec2_15}
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
          <p>- Cấu hình cho <b>EC2 Private 1</b></p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_16} alt="vpc" className="w-full" />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(16);
                }}
              />
              <div
                className={`${
                  zoom === 16 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_ec2_16}
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
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_17} alt="vpc" className="w-full" />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(17);
                }}
              />
              <div
                className={`${
                  zoom === 17 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_ec2_17}
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
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_ec2_18} alt="vpc" className="w-full" />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(18);
                }}
              />
              <div
                className={`${
                  zoom === 18 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_ec2_18}
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

export default CreateElasticIP;
