"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_create_alb_1 from "../../../../images/screen_shot_create_alb_1.png";
import screen_shot_create_alb_2 from "../../../../images/screen_shot_create_alb_2.png";
import screen_shot_create_alb_3 from "../../../../images/screen_shot_create_alb_3.png";
import screen_shot_create_alb_4 from "../../../../images/screen_shot_create_alb_4.png";
import screen_shot_create_alb_5 from "../../../../images/screen_shot_create_alb_5.png";
import screen_shot_create_alb_6 from "../../../../images/screen_shot_create_alb_6.png";
import screen_shot_create_alb_7 from "../../../../images/screen_shot_create_alb_7.png";
import screen_shot_create_alb_8 from "../../../../images/screen_shot_create_alb_8.png";
import screen_shot_create_alb_9 from "../../../../images/screen_shot_create_alb_9.png";
import screen_shot_create_alb_10 from "../../../../images/screen_shot_create_alb_10.png";
import screen_shot_create_alb_11 from "../../../../images/screen_shot_create_alb_11.png";
import screen_shot_create_alb_12 from "../../../../images/screen_shot_create_alb_12.png";
import screen_shot_create_alb_13 from "../../../../images/screen_shot_create_alb_13.png";
import screen_shot_create_alb_14 from "../../../../images/screen_shot_create_alb_14.png";
import screen_shot_create_alb_15 from "../../../../images/screen_shot_create_alb_15.png";
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
function CreateApplicationLoadBalancer({ params }: { params: PageProps }) {
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
          Tạo Application Load Balancer
        </h1>
        <div>
          <p className="text-[#22a6df]">
            Các bước tạo một Application Load Balancer
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              - Đầu tiên, giao diện của <b>EC2 Dashboard</b>, Click chọn{" "}
              <b>Load Balancers</b>
            </li>
            <li>
              - Tiếp theo, click chọn <b>Create load balancer</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_1}
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
                    src={screen_shot_create_alb_1}
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
            - Trong giao diện <b>Compare and select load balancer type</b> chúng
            ta có thể thấy 3 loại <b>Load Balancer</b> tuỳ theo mục đích sử
            dụng. Trong kiến trúc mà mình giới thiệu chúng ta sẽ sử dụng{" "}
            <b>Application Load Balancer (ALB)</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_2}
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
                    src={screen_shot_create_alb_2}
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
            - Trong giao diện <b>Create Application Load Balancer</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Load balancer name</b>, nhập tên cho ALB, ở đây mình
              nhập <b>Public-1-ALB</b>
            </li>
            <li>Các mục khác có thể để mặc định</li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_3}
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
                    src={screen_shot_create_alb_3}
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
            - Đến phần <b>Network Mapping</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>VPC</b>, chúng ta chọn <b>ASG VPC</b> mà mình đã tạo
              trước đó
            </li>
            <li>
              Tick chọn vào 2 AZ là <b>ap-southeast-1a (apse1-az1)</b> và{" "}
              <b>ap-southeast-1a (apse1-az1)</b>ap-southeast-1b (apse1-az2) chứa
              2 Public Subnet 1 và 2.
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_3}
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
                    src={screen_shot_create_alb_3}
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
            {" "}
            Ở phần <b>Security Group</b>, mình sẽ tạo mới 1 SG cho ALB này
          </p>
          <p>
            -Click chọn <b>Create a new security group</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_4}
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
                    src={screen_shot_create_alb_4}
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
            -Ở phần giao diện của <b>Create Security Group</b>
          </p>
          <ul className="list-disc ml-[20p]">
            <li>
              Trong mục <b> Security group name</b>, nhập{" "}
              <b>SG-Load-Balancer</b>
            </li>
            <li>
              Ở mục VPC <b> Description</b>, nhập <b>Allow HTTP into ALB</b>
            </li>
            <li>
              Trong mục <b> VPC</b> chọn <b>ASG VPC</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_5}
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
                    src={screen_shot_create_alb_5}
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
            - Trong mục <b>Inbound rules</b>
          </p>
          <ul className="list-disc ml-[20p]">
            <li>
              Click chọn <b> Add rule</b>
            </li>
            <li>
              Ở mục <b> Type</b>, chọn <b>HTTP</b>
            </li>
            <li>
              Trong mục <b> Source</b> để <b>0.0.0.0/0</b> đại diện cho Internet
            </li>
          </ul>
          <p>
            - Trong mục <b>Outbound rule</b> để mặc định
          </p>
          <p>
            - Click chọn <b>Create security group</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_6}
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
                    src={screen_shot_create_alb_6}
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
            - Sau khi tạo thành công <b>ở mục Security Group</b> sẽ có SG mà
            chúng ta vừa mới tạo
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_7}
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
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_create_alb_7}
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
            - Trong mục<b>Listener and routing</b> click chọn{" "}
            <b>Create target group</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_8}
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
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_create_alb_8}
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
            - Trong giao diện <b>Specify group details</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Choose a target type</b> chọn <b>Instances</b>
            </li>
            <li>
              Ở mục Target group name, nhập<b>TG-ALB</b>
            </li>
            <li>
              Mục <b>Prococol:port</b> để mặc định là <b>HTTP:80</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_9}
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
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_create_alb_9}
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
            - Tất cả các mục còn lại hãy để mặc định, click chọn <b>Next</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_10}
                alt="vpc"
                className="w-full"
              />
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
                    src={screen_shot_create_alb_10}
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
            - Phần tiếp theo, trong giao diện <b>Register targets</b>
          </p>
          <Tip
            nameType="Lưu ý"
            content="- Phải đảm bảo những Instances mà chúng ta muốn có trong Target group ở trạng thái Running"
            colorFirst="#6AB0DE"
            colorSecond="#E7F2FA"
          />
          <ul className="list-disc ml-[20px]">
            <li>
              - Trong mục <b>Avalability Instaces</b>, tick chọn những Instances
              muốn thêm vào <b>Target group</b>
            </li>
            <li>
              - Click chọn <b>Include as pending below</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_11}
                alt="vpc"
                className="w-full"
              />
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
                    src={screen_shot_create_alb_11}
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
            <li>Sau đó, ở mục <b>Review target</b>sẽ xuất hiện những Instance mà mình đã chọn</li>
            <li>Click chọn <b>Create target group</b></li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_12}
                alt="vpc"
                className="w-full"
              />
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
                    src={screen_shot_create_alb_12}
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
          <p>- Quay trở lại mục <b>Listener and routing</b> đã xuất hiện <b>Target group vừa mới tạo</b>. Click chọn <b>TG-ALB</b></p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_13}
                alt="vpc"
                className="w-full"
              />
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
                    src={screen_shot_create_alb_13}
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
          <p>- Tất cả các mục còn lại để mặc đinh. Click chọn <b>Create Load Balancer</b></p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_14}
                alt="vpc"
                className="w-full"
              />
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
                  zoom === 14 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_create_alb_14}
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
          <p>- Khi xuất hiện giao diện này, thì bạn đã tạo thành công ALB</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_alb_15}
                alt="vpc"
                className="w-full"
              />
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
                    src={screen_shot_create_alb_15}
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

export default CreateApplicationLoadBalancer;
