"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_auto_scaling_group_1 from "../../../../images/screen_shot_auto_scaling_group_1.png";
import screen_shot_auto_scaling_group_2 from "../../../../images/screen_shot_auto_scaling_group_2.png";
import screen_shot_auto_scaling_group_3 from "../../../../images/screen_shot_auto_scaling_group_3.png";
import screen_shot_auto_scaling_group_4 from "../../../../images/screen_shot_auto_scaling_group_4.png";
import screen_shot_auto_scaling_group_5 from "../../../../images/screen_shot_auto_scaling_group_5.png";
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
function CreateAutoScalingGroup({ params }: { params: PageProps }) {
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
          <p>-Bây giờ chúng ta sẽ bắt đầu tạo <b>Launch Template</b></p>
          <ul className="list-disc ml-[20px]">
            <li>Trong giao diện của <b>EC2 Dashboard</b> click chọn <b>Launch Templates</b></li>
            <li>Sau đó click chọn <b>Create launch template</b></li>
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
        </div>
      </div>
      <div></div>
    </Layout>
  );
}

export default CreateAutoScalingGroup;
