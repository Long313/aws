"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_subnet_1 from "../../../../images/screen_shot_subnet_1.png";
import screen_shot_subnet_2 from "../../../../images/screen_shot_subnet_2.png";
import screen_shot_subnet_3 from "../../../../images/screen_shot_subnet_3.png";
import screen_shot_subnet_4 from "../../../../images/screen_shot_subnet_4.png";
import screen_shot_subnet_5 from "../../../../images/screen_shot_subnet_5.png";
import screen_shot_subnet_6 from "../../../../images/screen_shot_subnet_6.png";
import screen_shot_subnet_7 from "../../../../images/screen_shot_subnet_7.png";
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
          Tạo Subnet
        </h1>
        <div>
          <p className="font-bold text-[18px] my-[10px] text-[#22a6df]">
            Các bước tạo subnet
          </p>
          <p className="text-[18px]">
            1. Trong giao diện của VPC Dashboard
          </p>
          <p>
            - Chọn <b>Subnets</b>
          </p>
          <p>
            - Click chọn <b>Create subnet</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_subnet_1} alt="vpc" className="w-full" />
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
                    src={screen_shot_subnet_1}
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
          <p className="text-[18px]">
            2. Trong giao diện <b>Create subnet</b>
          </p>
          <p>
            - Chọn <b>ASG VPC</b> mà chúng ta vừa mới tạo.
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_subnet_2} alt="vpc" className="w-full" />
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
                    src={screen_shot_subnet_2}
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
          <p className="text-[18px]">
            3. Ở mục <b>Subnet settings</b> thực hiện setting
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Bước 1: Ở mục <b>Subnet name</b> nhập Public Subnet 1.
            </li>
            <li>
              Bước 2: Ở mục <b>Availability Zone</b> chọn AZ <b>ap-southeast-1a</b>.
            </li>
            <li>
              Bước 3: Ở mục IPv4 CIDR block, nhập <b>10.10.1.0/24</b> theo kiến trúc
              đã mô tả
            </li>
            <li>
              Bước 4: Click vào <b>Create subnet</b>.
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_subnet_3} alt="vpc" className="w-full" />
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
                    src={screen_shot_subnet_3}
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
          <p className="text-[18px]">4. Hoàn thành tạo subnet</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_subnet_4} alt="vpc" className="w-full" />
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
                    src={screen_shot_subnet_4}
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
          <p className="text-[18px]">
            5. Thực hiện các bước tương tự trên để tạo thêm các subnet
          </p>
          <p>
            - Tạo <b>Public subnet 2</b> với CIDR là <b>10.10.2.0/24</b> nằm
            trong <b>Availability Zone ap-southeast-1b</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_subnet_5} alt="vpc" className="w-full" />
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
                  <Image
                    src={screen_shot_subnet_5}
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
            - Tạo Private subnet 1 với CIDR là <b>10.10.3.0/24</b> nằm trong
            <b> Availability Zone ap-southeast-1a</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_subnet_6} alt="vpc" className="w-full" />
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
                    src={screen_shot_subnet_6}
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
            - Tạo <b>Private subnet 2</b> với CIDR là <b>10.10.4.0/24</b> nằm
            trong
            <b> Availability Zone ap-southeast-1b</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image src={screen_shot_subnet_7} alt="vpc" className="w-full" />
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
                    src={screen_shot_subnet_7}
                    alt="vpc"
                    className="w-full"
                    priority
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
          <Tip
            nameType="Tip"
            content="Bạn có thể thấy có 2 cột là Availability Zone và Availability Zone ID. Để tránh việc tài nguyên EC2 được sử dụng không đồng đều, (chúng ta thường có xu hướng dùng AZ a để chạy primary và AZ b để stand by chẳng hạn) nên AWS sẽ gán ngẫu nhiên Availability Zone vào Availability Zone ID. Chúng ta có thể hiểu rằng Availability Zone là 1 dạng alias , còn Availability Zone ID mới chính là yếu tố định danh. Ví dụ ở hình trên Availability Zone ap-southeast-1a được gán Availability Zone ID là apse1-az2. Ở một AWS account khác , Availability Zone ap-southeast-1a có thể có Availability Zone ID là apse1-az1."
            colorFirst="#5cb85ccc"
            colorSecond="#E6F9E6"
          />
          <div className="flex justify-center my-[10px]">
            <Image
              src={screen_shot_subnet_8}
              alt="subnet"
              className="w-[90%] inline-block"
            />
          </div>
          <p>Cho phép tự động câp phát public IP address cho 2 public subnet</p>
          <Tip
            nameType="Tips"
            content="Một điểm đáng chú ý nữa là các subnet về cơ bản đều giống nhau, thông qua cấu hình route table và cấp phát public IP address mà chúng ta mới phân chia ra Public và Private Subnet."
            colorFirst="#5cb85ccc"
            colorSecond="#E6F9E6"
          />
          <p className="text-[18px]">6. Trong giao diện VPC</p>
          <ul>
            <li>
              Chọn <b>Subnets</b>
            </li>
            <li>
              Chọn <b>Public subnet 1</b>
            </li>
            <li>
              Chọn <b>Actions</b>
            </li>
            <li>
              Click chọn <b>Edit subnet settings</b>
            </li>
          </ul>
          <div className="flex justify-center my-[10px]">
            <Image
              src={screen_shot_subnet_9}
              alt="subnet"
              className="w-[90%] inline-block"
            />
          </div>
          <p className="text-[18px]">
            7. Trong mục <b>Auto-assign IP settings</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Chọn <b>Enable auto-assign public IPv4 address</b>
            </li>
            <li>
              Chọn <b>Save</b>
            </li>
          </ul>
          <div className="flex justify-center my-[10px]">
            <Image
              src={screen_shot_subnet_10}
              alt="subnet"
              className="w-[90%] inline-block"
            />
          </div>
          <p className="text-[18px]">
            8. Sau đó thực hiện tương tự với <b>Public subnet 2</b>
          </p>
          <div className="flex justify-center my-[10px]">
            <Image
              src={screen_shot_subnet_11}
              alt="subnet"
              className="w-[90%] inline-block"
            />
          </div>
          <p>
            Sau khi thay đổi thì mục <b>Auto-assign public Ipv4 address</b> đã
            chuyển thành <b>Yes</b>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default CreateSubnet;
