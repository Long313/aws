"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_create_rds_1 from "../../../../images/screen_shot_create_rds_1.png";
import screen_shot_create_rds_2 from "../../../../images/screen_shot_create_rds_2.png";
import screen_shot_create_rds_3 from "../../../../images/screen_shot_create_rds_3.png";
import screen_shot_create_rds_4 from "../../../../images/screen_shot_create_rds_4.png";
import screen_shot_create_rds_5 from "../../../../images/screen_shot_create_rds_5.png";
import screen_shot_create_rds_6 from "../../../../images/screen_shot_create_rds_6.png";
import screen_shot_create_rds_7 from "../../../../images/screen_shot_create_rds_7.png";
import screen_shot_create_rds_8 from "../../../../images/screen_shot_create_rds_8.png";
import screen_shot_create_rds_9 from "../../../../images/screen_shot_create_rds_9.png";
import screen_shot_create_rds_10 from "../../../../images/screen_shot_create_rds_10.png";
import screen_shot_create_rds_11 from "../../../../images/screen_shot_create_rds_11.png";
import screen_shot_create_rds_12 from "../../../../images/screen_shot_create_rds_12.png";
import screen_shot_create_rds_13 from "../../../../images/screen_shot_create_rds_13.png";
import screen_shot_create_rds_14 from "../../../../images/screen_shot_create_rds_14.png";
import screen_shot_create_rds_15 from "../../../../images/screen_shot_create_rds_15.png";
import screen_shot_create_rds_16 from "../../../../images/screen_shot_create_rds_16.png";
import screen_shot_create_rds_17 from "../../../../images/screen_shot_create_rds_17.png";
import screen_shot_create_rds_18 from "../../../../images/screen_shot_create_rds_18.png";
import screen_shot_create_rds_19 from "../../../../images/screen_shot_create_rds_19.png";
import screen_shot_create_rds_20 from "../../../../images/screen_shot_create_rds_20.png";

import coppy_icon from "../../../../images/coppy_icon.png";
import zoom_in from "../../../../images/zoom_in_icon.png";
import close from "../../../../images/close.png";
import { useRef } from "react";
import Tip from "../../../../components/Tip/page";

interface PageProps {
  id: string;
}
function CreateRelationalDatabaseService({ params }: { params: PageProps }) {
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
          Relational Database Service (RDS)
        </h1>
        <div>
          <p className="font-bold text-[18px] my-[10px] text-[#22a6df]">
            Các bước tạo RDS
          </p>
          <p>
            Bước đầu tiên, trong giao diện <b>AWS Management Console</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Nhập <b>RDS</b>{" "}
            </li>
            <li>
              Click chọn <b>RDS</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_1}
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
                    src={screen_shot_create_rds_1}
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
            - Trong giao diện <b>AWS RDS</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Click chọn <b>Databases</b>
            </li>
            <li>
              Click chọn <b>Create Database</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_2}
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
                    src={screen_shot_create_rds_2}
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
            - Trong giao diện <b>Create RDS</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Click chọn <b>Standard create</b>
            </li>
            <li>
              Ở mục <b>Engine options</b> click chọn <b>MySQL</b> (tuỳ vào ứng
              dụng của bạn để chọn loại CSDL cho phù hợp)
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_3}
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
                    src={screen_shot_create_rds_3}
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
              Ở mục <b>Engine version</b>, click chọn{" "}
              <b>MySQL 8.0.35 (tuỳ vào version mà bạn muốn)</b>
            </li>
            <li>
              Ở mục <b>Templates</b>, click chọn <b>Production</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_4}
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
                    src={screen_shot_create_rds_4}
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
            - Ở mục <b>Availability and durability</b>, mình chọn{" "}
            <b>Multi-AZ DB instance</b>.
          </p>
          <p className="font-bold">
            Câu hỏi đặt ra là: Lúc nào thì chọn <b>Multi-AZ DB Cluster</b> và
            lúc nào chọn <b>Multi-AZ DB instance</b>?
          </p>
          <p>- Đầu tiên bạn phải hiểu ý nghĩa của mỗi option này:</p>
          <ul className="list-disc ml-[20px]">
            <li>
              <b>Multi-AZ Instance</b>: Chỉ có một instance chính và một bản sao
              dự phòng trong một AZ khác. Chỉ hỗ trợ failover tự động cho một
              instance.
            </li>
            <li>
              <b>Multi-AZ Cluster</b>: Có thể có nhiều instance chính và phụ
              trên nhiều AZ. Hỗ trợ failover tự động trong cùng một cluster, với
              khả năng mở rộng và hiệu suất cao hơn.
            </li>
          </ul>
          <p>
            - Thứ hai, dựa vào kiến trúc mà bạn đưa ra để lựa chọn option tối ưu
            nhất.
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_5}
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
                    src={screen_shot_create_rds_5}
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
            - Trong mục <b>Setting</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Ở mục <b>DB cluster identifier</b>, đặt tên là{" "}
              <b>DB cluster identifier</b>
            </li>
            <li>
              Trong mục <b>Master username</b>, đặt tên là <b>admin</b>
            </li>
            <li>
              Ở mục <b>Credentials management</b>, chọn <b>Self managed</b>
            </li>
            <li>
              Đặt <b>Master password</b> cho DB
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_6}
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
                    src={screen_shot_create_rds_6}
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
            - Trong mục <b>Instance configuration</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>DB instance class</b> chọn{" "}
              <b>Burstable classes (includes t classes)</b> và{" "}
              <b>db.t3.micro</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_7}
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
                    src={screen_shot_create_rds_7}
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
            - Trong mục <b>Storage</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Storage type</b>, vì chỉ dừng lại ở mức làm lab, nên
              mình sẽ chỉ chọn cấu hình ở mức thấp, ở đây mình chọn{" "}
              <b>General Purpose SSD (gp2)</b>
            </li>
            <li>
              Ở mục <b>Allocated storage</b> mình chỉ để là <b>20 GiB</b>
            </li>
          </ul>

          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_8}
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
                    src={screen_shot_create_rds_8}
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
            - Trong mục <b>Connectivity</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Ở mục <b>Compute resource</b>, mình chọn{" "}
              <b>Don’t connect to an EC2 compute resource</b> (sau này có thể
              tuỳ chỉnh)
            </li>
            <li>
              Ở mục <b>Network type</b>, mình chọn <b>IPv4</b>
            </li>
            <li>
              Ở mục <b>Virtual private cloud (VPC)</b>, mình chọn{" "}
              <b>ASG VPC mình đã tạo trước đó.</b>
            </li>
            <li>
              Ở mục <b>DB subnet group</b>, mình chọn group subnet gồm 4 subnet
              mình đã tạo trước đó ( sau này mình đã tạo thêm 2 subnet cho AZ
              ap-southeast-1c, như vậy là 6 subnets )
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_9}
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
                    src={screen_shot_create_rds_9}
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
            - Tiếp theo, vẫn trong mục <b>Connectivity</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Ở mục <b>Public access</b>, mình chọn <b>Yes</b>
            </li>
            <li>
              Ở mục <b>VPC security group (firewall)</b>, mình chọn
              <b> Create new</b> để tạo mới Security Group
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_10}
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
                    src={screen_shot_create_rds_10}
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
            Sau khi tạo xong, bạn vào <b>Dashboard</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Click chọn <b>Edit inbound rules</b>
            </li>
            <li>
              Trong mục <b>Source</b>, chọn<b> Anywhere IPv4</b>
            </li>
            <li>
              Click <b>Save rules</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_12}
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
                    src={screen_shot_create_rds_12}
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
            - Ở mục <b>Certificate authority</b>, chọn <b>default</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_13}
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
                    src={screen_shot_create_rds_13}
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
            Ở mục <b>Database options</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Initial database name</b> nhập <b>mydb</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_14}
                alt="vpc"
                className="w-full"
              />
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
                    src={screen_shot_create_rds_14}
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
            - Nếu bạn thấy phần nào mình k nhắc đến ở đây, có nghĩa là mình sẽ để
            mặc định
          </p>
          <p>
            Xem lại cấu hình và price một lần nữa, click chọn{" "}
            <b>Create database</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_15}
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
                    src={screen_shot_create_rds_15}
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
            - Sau khi tạo thành công database, vào trang{" "}
            <a
              href="https://sqlectron.github.io/"
              target="_blank"
              className="text-[#22a6df]"
            >
              https://sqlectron.github.io/
            </a> để tải <b>sqlelectron</b> và kết nối tới database vừa mới tạo
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Click chọn <b>Download GUI</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_16}
                alt="vpc"
                className="w-full"
              />
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
                    src={screen_shot_create_rds_16}
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
              Click chọn <b>sqlectron-1.38.0-win.zip (nếu Window)</b> hoặc{" "}
              <b>sqlectron-1.38.0-mac.zip (MacOS)</b>
            </li>
            <li>Chờ tải xong và giải nén</li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_17}
                alt="vpc"
                className="w-full"
              />
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
                    src={screen_shot_create_rds_17}
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
          <p>- Sau khi tạo DB thành công, đi tới DB vừa tạo</p>
          <p>
            Ở mục <b>Connectivity & security</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Bạn có thể thấy địa chỉ <b>endpoint</b> chính là thông tin để kết
              nối với DB thông qua election
            </li>
            <li>
              Coppy địa chỉ <b>enpoint</b> đó
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_18}
                alt="vpc"
                className="w-full"
              />
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
                    src={screen_shot_create_rds_18}
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
            - Ở giao diện electron, click chọn <b>ADD</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_19}
                alt="vpc"
                className="w-full"
              />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(19);
                }}
              />
              <div
                className={`${
                  zoom === 19 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_create_rds_19}
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
          <p>Xem lại cấu hình DB và nhập vào các trường như sau</p>
          <ul className="list-disc ml-[20px]">
            <li>Trường <b>Name</b> bạn có thể đặt tên tuỳ ý</li>
            <li>Nhập đúng tất cả các trường, và mật khẩu đã tạo trong database</li>
            <li>Bấm <b>Test</b> để kiểm tra và click <b>Save</b></li>.
          </ul>
          <p>Như vậy bạn đã tạo DB và kết nối tới DB thành công</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_20}
                alt="vpc"
                className="w-full"
              />
              <Image
                src={zoom_in}
                alt="zoom_in"
                width={40}
                className="bg-[#dbd2d21a] absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setZoom(20);
                }}
              />
              <div
                className={`${
                  zoom === 20 ? "block" : "hidden"
                } fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0000004d] flex justify-center items-center`}
              >
                <div className="w-[80%] relative z-10">
                  <Image
                    src={screen_shot_create_rds_20}
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

export default CreateRelationalDatabaseService;
