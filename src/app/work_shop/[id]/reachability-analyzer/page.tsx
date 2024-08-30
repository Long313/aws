"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_reachability_analyzer_1 from "../../../../images/screen_shot_reachability_analyzer_1.png";
import screen_shot_reachability_analyzer_2 from "../../../../images/screen_shot_reachability_analyzer_2.png";
import screen_shot_reachability_analyzer_3 from "../../../../images/screen_shot_reachability_analyzer_3.png";
import screen_shot_reachability_analyzer_4 from "../../../../images/screen_shot_reachability_analyzer_4.png";
import screen_shot_reachability_analyzer_5 from "../../../../images/screen_shot_reachability_analyzer_5.png";
import screen_shot_reachability_analyzer_6 from "../../../../images/screen_shot_reachability_analyzer_6.png";
import screen_shot_check_connect_7 from "../../../../images/screen_shot_check_connect_7.png";
import screen_shot_check_connect_8 from "../../../../images/screen_shot_check_connect_8.png";
import screen_shot_check_connect_9 from "../../../../images/screen_shot_check_connect_9.png";
import screen_shot_check_connect_10 from "../../../../images/screen_shot_check_connect_10.png";
import screen_shot_check_connect_11 from "../../../../images/screen_shot_check_connect_11.png";
import screen_shot_check_connect_12 from "../../../../images/screen_shot_check_connect_12.png";
import screen_shot_check_connect_13 from "../../../../images/screen_shot_check_connect_13.png";
import screen_shot_check_connect_14 from "../../../../images/screen_shot_check_connect_14.png";

import coppy_icon from "../../../../images/coppy_icon.png";
import zoom_in from "../../../../images/zoom_in_icon.png";
import close from "../../../../images/close.png";
import { useRef } from "react";
import Tip from "../../../../components/Tip/page";

interface PageProps {
  id: string;
}
function ReachabilityAnalyzer({ params }: { params: PageProps }) {
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
          Vì sao phải sử dụng Reachability Analyzers?
        </h1>
        <div>
          <p>
            - Một số lợi ích khi sử dụng <b>Reachability Analyzer</b>
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              <b>Kiểm tra tính bảo mật:</b> Bạn có thể sử dụng công cụ này để
              kiểm tra xem một tài nguyên (như EC2 instance) có bị lộ ra ngoài
              hoặc có thể bị truy cập không mong muốn từ internet hoặc các nguồn
              khác trong VPC.
            </li>
            <li>
              <b>Xác minh cấu hình mạng:</b> Khi bạn thiết lập các chính sách
              bảo mật và cấu hình mạng, Reachability Analyzer giúp xác minh rằng
              cấu hình của bạn hoạt động đúng cách và các tài nguyên chỉ có thể
              truy cập được theo cách bạn dự định.
            </li>
            <li>
              <b>Xử lý sự cố mạng:</b> Khi bạn thiết lập các chính sách bảo mật
              và cấu hình mạng, Reachability Analyzer giúp xác minh rằng cấu
              hình của bạn hoạt động đúng cách và các tài nguyên chỉ có thể truy
              cập được theo cách bạn dự định.Nếu bạn gặp vấn đề với kết nối mạng
              giữa các tài nguyên, Reachability Analyzer có thể giúp xác định
              các vấn đề liên quan đến cấu hình mạng như các quy tắc tường lửa
              bị sai hoặc cấu hình định tuyến không chính xác.
            </li>
            <li>
              <b>Tối ưu hóa kiến trúc mạng:</b> Công cụ này cũng có thể giúp bạn
              tối ưu hóa kiến trúc mạng của mình bằng cách xác định các kết nối
              không cần thiết hoặc không mong muốn, từ đó giảm thiểu nguy cơ bảo
              mật và cải thiện hiệu suất mạng.
            </li>
          </ul>
          <p>1. Sử dụng <b>Reachability Analyzer</b></p>
          <ul className="list-disc ml-[20px]">
            <li>Trong giao diện AWS Management Console, nhập <b>VPC Reachability Analyzer</b></li>
            <li>Click chọn <b>VPC Reachability Analyzer</b></li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_reachability_analyzer_1}
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
                    src={screen_shot_reachability_analyzer_1}
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
          <p>2. Trong giao diện Create Reachability Analyzer</p>
          <ul className="list-disc ml-[20px]">
            <li>Ở mục <b>Name tag</b> nhập <b>EC2 private with EC2 Public</b></li>
            <li>Ở mục <b>Source type</b> chọn <b>Instances</b></li>
            <li>Ở mục <b>Source</b> chọn <b>EC2 Public</b></li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_reachability_analyzer_2}
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
                    src={screen_shot_reachability_analyzer_2}
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
            <li>Ở mục <b>Destination type</b> chọn <b>Instances</b></li>
            <li>Ở mục <b>Destinatio</b> chọn <b>EC2 Private</b></li>
            <li>Các thông số còn lại để mặc định</li>
            <li>Click chọn <b>Create Reachability Analyzer</b></li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_reachability_analyzer_3}
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
                    src={screen_shot_reachability_analyzer_3}
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
          <p>3. Đợi khoảng 5 phút Reachability status sẽ chuyển sang Reachable</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_reachability_analyzer_4}
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
                    src={screen_shot_reachability_analyzer_4}
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
          <p>4. Sau đó xem Path Detail</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_reachability_analyzer_5}
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
                    src={screen_shot_reachability_analyzer_5}
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
          <p>4. Tiếp theo, xem reverse path details.</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_reachability_analyzer_6}
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
                    src={screen_shot_reachability_analyzer_6}
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

export default ReachabilityAnalyzer;
