"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_auto_scaling_group_1 from "../../../../images/screen_shot_auto_scaling_group_1.png";
import screen_shot_auto_scaling_group_2 from "../../../../images/screen_shot_auto_scaling_group_2.png";
import screen_shot_auto_scaling_group_3 from "../../../../images/screen_shot_auto_scaling_group_3.png";
import screen_shot_auto_scaling_group_4 from "../../../../images/screen_shot_auto_scaling_group_4.png";
import screen_shot_auto_scaling_group_5 from "../../../../images/screen_shot_auto_scaling_group_5.png";
import screen_shot_auto_scaling_group_6 from "../../../../images/screen_shot_auto_scaling_group_6.png";
import screen_shot_auto_scaling_group_7 from "../../../../images/screen_shot_auto_scaling_group_7.png";
import screen_shot_auto_scaling_group_8 from "../../../../images/screen_shot_auto_scaling_group_8.png";
import screen_shot_auto_scaling_group_9 from "../../../../images/screen_shot_auto_scaling_group_9.png";
import screen_shot_auto_scaling_group_10 from "../../../../images/screen_shot_auto_scaling_group_10.png";
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
function CreateAutoScalingGroup({ params }: { params: PageProps }) {
  const textRef = useRef<HTMLParagraphElement>(null);
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
          Tạo Auto Scaling Group cho EC2 Instance
        </h1>
        <div>
          <p className="text-[#22a6df]">Các bước tạo một Auto Scaling Group.</p>
          <p>
            - Đầu tiên muốn tạo một Auto Scaling Group, các bạn phải tạo một{" "}
            <b>Launch Template</b> hoặc <b>Launch Configuration</b>. Nhưng trong
            bài viết này, mình sẽ hướng dẫn các bạn làm sao để tạo một{" "}
            <b>Launch Template</b> bởi vì:
          </p>
          <ul className="list-disc">
            <li>
              <b>Launch Template</b>: Hỗ trợ nhiều phiên bản EC2, cấu hình chi
              tiết hơn, và có thể cập nhật từng phần.
            </li>
            <li>
              <b>Launch Configurations</b>: Làm việc với một phiên bản EC2 và
              không thể thay đổi sau khi đã tạo.
            </li>
          </ul>
          <p>
            -Bây giờ chúng ta sẽ bắt đầu tạo <b>Launch Template</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong giao diện của <b>EC2 Dashboard</b> click chọn{" "}
              <b>Launch Templates</b>
            </li>
            <li>
              Sau đó click chọn <b>Create launch template</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_auto_scaling_group_1}
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
                    src={screen_shot_auto_scaling_group_1}
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
            - Step 1: Trong giao diện <b>Choose launch template</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Auto Scaling group nam</b>, nhập <b>Public-ASG</b>
            </li>
            <li>
              Ở mục <b>Launch template</b>, mình sẽ tạo mới một{" "}
              <b>launch template</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_auto_scaling_group_2}
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
                    src={screen_shot_auto_scaling_group_2}
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
            - Trong giao diện <b>Create </b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Launch template name</b>, nhập <b>Public-Template</b>
            </li>
            <li>
              Ở mục <b>Template version description</b>, mình sẽ nhập{" "}
              <b>Public-Template for ASG</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_auto_scaling_group_3}
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
                    src={screen_shot_auto_scaling_group_3}
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
            - Tiếp theo, ở mục <b>Application and OS Images</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Amazon Machine Image (AMI)</b> chọn{" "}
              <b>Amazon Linux 2023 AMI</b>
            </li>
            <li>Tất cả còn lại hãy để mặc định</li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_auto_scaling_group_4}
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
                    src={screen_shot_auto_scaling_group_4}
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
          <p>- Trong phần Instance type và Keypair</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Instance type</b>, chọn <b>t2.micro</b>
            </li>
            <li>
              Ở phần <b>Key pair</b>, chọn <b>awslab-keypair</b>
            </li>
          </ul>
          <p>- Còn trong mục Network settings</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong phần <b>Subnet</b>, chọn{" "}
              <b>Dont include in launch template</b>
            </li>
            <li>
              Trong mục <b>Firewall</b>, chọn{" "}
              <b>Select existing security group</b>
            </li>
            <li>
              Trong phần <b>Security Group</b>, chọn <b>Public subnet - SG</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_auto_scaling_group_5}
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
                    src={screen_shot_auto_scaling_group_5}
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
          <p>- Trong mục Advanced Detail</p>
          <p>
            Hãy coppy và dán đoạn lệnh này vào mục <b>User data</b>
          </p>
          <div className="bg-[#1c222a] p-[12px] relative mb-[20px] rounded-[4px] overflow-hidden">
            <div
              className="text-[#abb2bf] bg-[#282c34] py-[4px] px-[8px]"
              ref={textRef}
            >
              <p className="text-[#096842]">#!/bin/bash</p>
              <p className="text-[#096842]">
                # Use this for your user data (script from top to bottom)
              </p>
              <p className="text-[#096842]">
                # install httpd (Linux 2 version)
              </p>
              <p className="text-[#d19a66]">yum update -y</p>
              <p className="text-[#d19a66]">yum install -y httpd</p>
              <p className="text-[#d19a66]">systemctl start httpd</p>
              <p className="text-[#d19a66]">systemctl enable httpd</p>
              <p className="text-[#d19a66]">
                echo &quot;&lt;h1&gt;Hello World from $(hostname
                -f)&lt;/h1&gt;&quot;&gt;/var/www/html/index.html
              </p>
              <Image
                src={coppy_icon}
                alt="coppy-icon"
                width={20}
                className="invert filter absolute top-[2px] right-[2px] cursor-pointer"
                onClick={handleCoppy}
              />
            </div>
          </div>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_auto_scaling_group_6}
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
                    src={screen_shot_auto_scaling_group_6}
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
            - Quay trở lại giao diện tạo <b>ASG</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Ở mục Launch template, load lại để thấy{" "}
              <b>Public template mà ta vừa tạo</b>
            </li>
            <li>
              Click chọn <b>Next</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_auto_scaling_group_7}
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
                    src={screen_shot_auto_scaling_group_7}
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
            - Step 2: Ở giao diện <b>Choose instance launch options</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>VPC</b> chọn <b>ASG VPC</b>
            </li>
            <li>
              Trong mục <b>Availability Zones and subnets</b> chọn{" "}
              <b>Public subnet 1 và 2</b>
            </li>
            <li>
              Click chọn <b>Next</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_auto_scaling_group_8}
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
                    src={screen_shot_auto_scaling_group_8}
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
            - Step 3: Ở bước <b>Config advanced options</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Load balancing</b>, chọn{" "}
              <b>Attach to an existing load balancer</b>
            </li>
            <li>
              Ở mục <b>Attach to an existing load balancer</b>, click chọn{" "}
              <b>Choose from your load balancer target groups</b> và chọn{" "}
              <b>TG-ALB</b> mà chúng ta đã tạo ở bước trước
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_auto_scaling_group_9}
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
                    src={screen_shot_auto_scaling_group_9}
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
              Trong mục <b>Health checks</b>
            </li>
            <li>
              Tick chọn <b>Turn on Elastic Load Balancing health checks</b>
            </li>
            <li>
              Ở phần <b>Health check grace period</b> để mặc định là <b>300s</b>
              .
            </li>
            <li>
              Click <b>Next</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_auto_scaling_group_10}
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
                    src={screen_shot_auto_scaling_group_10}
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
          <p>- Step 4: Configure group size and scaling</p>
          <p>
            - Ở mục <b>Group size. Phần này mình sẽ cài đặt thủ công số lượng Instance mà mình mong muốn khi tải tăng, giảm hoặc trong điều kiện bình thường. Và phần sau mình sẽ giới thiệu kỹ hơn về <a href="" target="_blank">Scaling Policies</a></b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Ở mục <b>Desired capacity type</b>. Số lượng instance mà bạn muốn
              Auto Scaling Group duy trì trong điều kiện bình thường. Khi bạn
              thay đổi số này, Auto Scaling Group sẽ tự động thêm hoặc giảm số
              lượng instance để đạt tới số lượng này. Mình để là <b>1</b>
            </li>
          </ul>
          <p>
            - Ở mục <b>Scaling</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Ở mục <b>Min desired capacity</b>. Đây là số lượng instance tối thiểu mà Auto Scaling Group sẽ luôn duy trì. Nếu tải trên ứng dụng giảm, nhóm sẽ không giảm số lượng instance xuống dưới số này. Mình để là <b>1</b>
            </li>
            <li>
              Ở mục <b>Max desired capacity</b>. Đây là số lượng instance tối đa mà Auto Scaling Group có thể mở rộng tới. Khi nhu cầu tăng lên, nhóm sẽ không thêm instance vượt quá số này. Mình để là <b>2</b>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </Layout>
  );
}

export default CreateAutoScalingGroup;
