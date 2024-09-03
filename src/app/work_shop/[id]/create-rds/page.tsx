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
          <p>Mình sẽ để mặc định</p>
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
          <p>
            Trong mục <b>Storage type</b>, vì mình ưu tiên độ trễ thấp nên sẽ
            chọn <b>Provisioned IOPS SSD (io2)</b>
          </p>
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
              <b>Connect to an EC2 compute resource</b>
            </li>
            <li>
              Ở mục <b>EC2 instance</b>, mình chọn <b>EC2 Private 1</b>, để đúng
              với kiến trúc ban đầu mình đã vẽ
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
          <p>Tất cả những mục còn lại để mặc định, ngoại trừ 2 mục:</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Ở mục <b>VPC security group</b>, mình chọn <b>Create new</b>
            </li>
            <li>
              Ở mục <b>New VPC security group name</b>, nhập{" "}
              <b>database-mysql-sg</b>
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
            - Ở các mục khác mình để mặc định, và click <b>Create database</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_create_rds_11}
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
                    src={screen_shot_create_rds_11}
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
            - Sau đó bạn vào trang{" "}
            <a
              href="https://sqlectron.github.io/"
              target="_blank"
              className="text-[#22a6df]"
            >
              https://sqlectron.github.io/
            </a>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Click chọn <b>Download GUI</b>
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
          <ul className="list-disc ml-[20px]">
            <li>
              Click chọn <b>sqlectron-1.38.0.dmg</b>
            </li>
            <li>Chờ tải xong và giải nén</li>
          </ul>
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
          <p>- Sau khi tạo DB thành công, đi tới DB vừa tạo</p>
          <p>Ở mục <b>Connectivity & security</b></p>
          <ul className="list-disc ml-[20px]">
            <li>Bạn có thể thấy địa chỉ <b>endpoint</b> chính là thông tin để kết nối với DB thông qua election</li>
            <li>Coppy địa chỉ <b>enpoint</b> đó</li>    
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
          <p>- Ở giao diện electron, click chọn <b>ADD</b></p>
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
        </div>
      </div>
    </Layout>
  );
}

export default CreateRelationalDatabaseService;
