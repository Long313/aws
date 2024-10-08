"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_check_connect_2 from "../../../../images/screen_shot_check_connect_2.png";
import screen_shot_elastic_ip_1 from "../../../../images/screen_shot_elastic_ip_1.png";
import screen_shot_elastic_ip_2 from "../../../../images/screen_shot_elastic_ip_2.png";
import screen_shot_elastic_ip_3 from "../../../../images/screen_shot_elastic_ip_3.png";
import screen_shot_elastic_ip_4 from "../../../../images/screen_shot_elastic_ip_4.png";
import screen_shot_elastic_ip_5 from "../../../../images/screen_shot_elastic_ip_5.png";
import screen_shot_elastic_ip_6 from "../../../../images/screen_shot_elastic_ip_6.png";
import screen_shot_elastic_ip_7 from "../../../../images/screen_shot_elastic_ip_7.png";
import screen_shot_elastic_ip_8 from "../../../../images/screen_shot_elastic_ip_8.png";
import screen_shot_elastic_ip_9 from "../../../../images/screen_shot_elastic_ip_9.png";
import screen_shot_elastic_ip_10 from "../../../../images/screen_shot_elastic_ip_10.png";
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
          Tại sao lại phải tạo Elastic IP?
        </h1>
        <div>
          <p>
            - Bạn hãy chú ý vào địa chỉ IP của EC2 Public 1 đầu tiên mà mình đã
            tạo. Sau đó mình đã thử Stop và Start lại EC2 Instance này. Hãy xem
            kết quả nhé.
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_check_connect_2}
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
                    src={screen_shot_check_connect_2}
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
          <p>- Ôi thật bất ngờ! Địa chỉ IP của nó đã thay đổi.</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_elastic_ip_1}
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
                    src={screen_shot_elastic_ip_1}
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
            - Và tất nhiên chúng ta không thể SSH vào EC2 có địa chỉ IP là{" "}
            <b>13.229.207.200</b>. Bời vì nó đã thay đổi địa chỉ IP thành{" "}
            <b>18.141.174.207.</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_elastic_ip_2}
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
                    src={screen_shot_elastic_ip_2}
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
            - Đó cũng chính là lý do tại sao chúng ta phải dùng{" "}
            <b>Elastic IP (IP tĩnh)</b> cho EC2 Instance
          </p>
          <p>- Lợi ích của việc sử dụng Elastic IP</p>
          <ul className="list-disc ml-[20px]">
            <li>
              <b>IP tĩnh</b>: Elastic IP giúp bạn duy trì một địa chỉ IP cố định
              ngay cả khi bạn bật/tắt EC2 Instance
            </li>
            <li>
              <b>Tính linh hoạt</b>: Bạn có thể di chuyển Elastic IP từ một
              instance này sang một instance khác một cách dễ dàng
            </li>
            <li>
              <b>Quản lý chi phí</b>: AWS chỉ tính phí Elastic IP nếu nó không
              được gán cho bất kỳ Instance nào
            </li>
          </ul>
          <p className="text-[#22a6df]">
            Bây giờ chúng ta sẽ tiến hành tạo các Elastic IP cho các Instance{" "}
          </p>
          <p>
            - Đầu tiên trong giao diện <b>AWS Management Console</b>, nhập và
            chọn <b>EC2</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_elastic_ip_3}
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
                    src={screen_shot_elastic_ip_3}
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
            - Tiếp theo, trong giao diện <b>EC2 Dashboard</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Click chọn
              <b> Elastic IPs</b>
            </li>
            <li>
              Click chọn
              <b> Allocate Elastic IP address</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_elastic_ip_4}
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
                    src={screen_shot_elastic_ip_4}
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
            - Trong giao diện <b>Allocate Elastic IP address</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Chọn Region mà bạn muốn tạo <b>Elastic IP</b>. Ở đây mình chọn
              <b>ap-souheast-1</b>
            </li>
            <li>
              Click chọn
              <b> Allocate</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_elastic_ip_5}
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
                    src={screen_shot_elastic_ip_5}
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
          <p>- Như vậy chúng ta đã tạo thành công Elastic IP</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_elastic_ip_6}
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
                    src={screen_shot_elastic_ip_6}
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
            - Các bạn hãy tự tạo thêm số lượng Elastic IP tương ứng với số EC2
            Instance chúng ta đã tạo trước đó nhé.
          </p>
          <p className="text-[#22a6df] font-bold mt-[10px]">
            Sau khi tạo xong, chúng ta tiến hành gắn Elastic IP cho EC2 Instance
          </p>
          <p>
            - Đầu tiên, muốn gắn được <b>Elastic IP</b> vào EC2 Instance, thì
            EC2 Instance mà chúng ta muốn gắn phải được{" "}
            <span className="text-[#1d8102]">Running</span>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_elastic_ip_7}
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
                    src={screen_shot_elastic_ip_7}
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
            Tiếp theo, trong giao diện <b> EC2 Dashboard</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Chọn <b>Elastic IP</b>
            </li>
            <li>
              Tick chọn <b>Elastic IP</b>mà bạn muốn gắn cho <b>EC2 Instance</b>{" "}
              tương ứng
            </li>
            <li>
              Click chọn <b>Actions</b>
            </li>
            <li>
              Click chọn <b>Associate Elastic IP address</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_elastic_ip_8}
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
                    src={screen_shot_elastic_ip_8}
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
            Trong giao diện <b> Associate Elastic IP address</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Trong mục <b>Resource type</b>, chọn <b>Instance</b>
            </li>
            <li>
              Trong mục <b>Instance</b> chọn Instance mà bạn muốn gắn{" "}
              <b>Elastic IP</b> tương ứng
            </li>
            <li>
              Trong mục <b>IP Address</b>, chọn{" "}
              <b>địa chỉ IP mà bạn muốn gắn</b>
            </li>
            <li>
              Nếu tick chọn{" "}
              <b>Allow this Elastic IP address to be reassociated</b>{" "}
              (Optional), thì bạn có thể chuyển EIP từ một instance này sang một
              instance khác mà không cần phải tháo gỡ (disassociate) trước từ
              instance ban đầu.{" "}
            </li>
            <li>
              Click chọn <b>Associate</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_elastic_ip_9}
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
                    src={screen_shot_elastic_ip_9}
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
            - Quay trở lại EC2 Public 1, chúng ta đã thấy nó đã được gắn Elastic
            IP
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_elastic_ip_10}
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
                    src={screen_shot_elastic_ip_10}
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
      <div></div>
    </Layout>
  );
}

export default CreateElasticIP;
