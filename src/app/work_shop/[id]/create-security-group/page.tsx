"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_security_group_1 from "../../../../images/screen_shot_security_group_1.png";
import screen_shot_security_group_2 from "../../../../images/screen_shot_security_group_2.png";
import screen_shot_security_group_3 from "../../../../images/screen_shot_security_group_3.png";
import screen_shot_security_group_4 from "../../../../images/screen_shot_security_group_4.png";
import screen_shot_security_group_5 from "../../../../images/screen_shot_security_group_5.png";
import screen_shot_security_group_6 from "../../../../images/screen_shot_security_group_6.png";
import screen_shot_security_group_7 from "../../../../images/screen_shot_security_group_7.png";
import screen_shot_security_group_8 from "../../../../images/screen_shot_security_group_8.png";
import screen_shot_security_group_9 from "../../../../images/screen_shot_security_group_9.png";
import screen_shot_security_group_10 from "../../../../images/screen_shot_security_group_10.png";
import screen_shot_security_group_11 from "../../../../images/screen_shot_security_group_11.png";

import coppy_icon from "../../../../images/coppy_icon.png";
import zoom_in from "../../../../images/zoom_in_icon.png";
import close from "../../../../images/close.png";
import { useRef } from "react";
import Tip from "../../../../components/Tip/page";

interface PageProps {
  id: string;
}
function CreateSecurityGroup({ params }: { params: PageProps }) {
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
          Tạo Security Group
        </h1>
        <div>
          <p className="font-bold text-[18px] my-[10px] text-[#22a6df]">
            Các bước tạo Security Group cho máy chủ nằm trong Public subnet
          </p>
          <p className="text-[18px]">1. Trong giao diện của VPC Dashboard</p>
          <p>
            - Trong mục Security groups, chọn <b>Security groups</b>
          </p>
          <p>
            - Click chọn <b>Create security group</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_security_group_1}
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
                    src={screen_shot_security_group_1}
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
          <p className="text-[18px]">2. Thực hiện cấu hình Security Group</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_security_group_2}
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
                    src={screen_shot_security_group_2}
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
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Security group name</b>, nhập {`"Public subnet - SG"`}
            </li>
            <li>
              Trong mục <b>Description</b>, nhập {`"Allow SSH and Ping for servers
              in public subnet"`}
            </li>
            <li>
              Chọn <b>ASG</b>VPC
            </li>
          </ul>
          <p className="text-[18px] my-[10px]">
            3. Thực hiện cấu hình Inbound rules
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Inbound rules</b>, click <b>Add rule</b>
            </li>
            <li>
              Chọn <b>Type: SSH</b>và<b> Source: My IP</b>. <b>My IP</b> đại
              diện cho 1 địa chỉ IPv4 bạn đang sử dụng (sẽ thay đổi khi bạn đổi
              mạng)
            </li>
            <li>
              Click chọn <b>Add rule</b> để thêm 1 rule mới
            </li>
            <li>
              Chọn <b>Type: All ICMP - IPv4</b>và<b> Source: Anywhere</b>. Cho
              phép ping từ bất kỳ địa chỉ IP nào
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_security_group_3}
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
                    src={screen_shot_security_group_3}
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
            4. Kiểm tra Outbound rule và chọn Create security group
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_security_group_4}
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
                    src={screen_shot_security_group_4}
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
            5. Hoàn thành tạo Security group cho máy chủ nằm trong Public subnet
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_security_group_5}
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
                <div className="w-[90%] relative z-10">
                  <Image
                    src={screen_shot_security_group_5}
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
          <p className="font-bold text-[#22a6df]">
            Tạo Security Group cho máy chủ nằm trong Private subnet
          </p>
          <p className="text-[18px]">6. Trong giao diện VPC Dashboard</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Chọn <b>Security Groups</b>
            </li>
            <li>
              Chọn <b>Create security group</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_security_group_1}
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
                    src={screen_shot_security_group_1}
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
          <p className="text-[18px]">7. Thực hiện cấu hình Security Group</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Security group name</b> diền{" "}
              <b>Private subnet - SG</b>
            </li>
            <li>
              Trong mục <b>Description</b> nhập{" "}
              <b>Allow SSH and Ping for servers in private subnet</b>
            </li>
            <li>
              Trong mục <b>VPC</b>, chọn<b> ASG </b>VPC đã tạo trước đó
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_security_group_6}
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
                    src={screen_shot_security_group_6}
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
          <p className="text-[18px]">8. Thực hiện cấu hình Inbound rules</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Inbound rule</b> chọn
              <b> Add rule</b> và để nguyên <b>Source: Custom</b>. Chọn vào
              search box và chọn <b>Public subnet SG</b>. Lựa chọn này cho phép
              tất cả những máy chủ được gán Public subnet SG được SSH vào các
              máy chủ được gán <b>Private subnet SG</b>
            </li>
            <li>
              Chọn <b>Type: SSH</b> nhập{" "}
              <b>Allow SSH and Ping for servers in private subnet</b>
            </li>
            <li>
              Trong mục <b>VPC</b>, chọn<b> ASG </b>VPC đã tạo trước đó
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_security_group_7}
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
                    src={screen_shot_security_group_7}
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
          <p className="text-[18px]">9. Chọn Add rule để thêm 1 rule mới</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Chọn <b>Type: All ICMP - IPv4</b> và <b>Source: Anywhere</b>. Cho
              phép ping từ bất kỳ địa chỉ IP nào.
            </li>
            <li>
              Click chọn <b>Create Security Group</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_security_group_8}
                alt="vpc"
                className="w-full"
              />
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
                <div className="w-[90%] relative z-10">
                  <Image
                    src={screen_shot_security_group_8}
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
            10. Hy vọng bạn kiên nhẫn xem đến đây, và như vậy chúng ta đã tạo
            được 2 Security Group cho các máy chủ nằm trong public subnet và
            private subnet
          </p>

          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_security_group_9}
                alt="vpc"
                className="w-full"
              />
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
                <div className="w-[90%] relative z-10">
                  <Image
                    src={screen_shot_security_group_9}
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

export default CreateSecurityGroup;
