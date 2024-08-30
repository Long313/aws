"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_check_connect_1 from "../../../../images/screen_shot_check_connect_1.png";
import screen_shot_check_connect_2 from "../../../../images/screen_shot_check_connect_2.png";
import screen_shot_check_connect_3 from "../../../../images/screen_shot_check_connect_3.png";
import screen_shot_check_connect_4 from "../../../../images/screen_shot_check_connect_4.png";
import screen_shot_check_connect_5 from "../../../../images/screen_shot_check_connect_5.png";
import screen_shot_check_connect_6 from "../../../../images/screen_shot_check_connect_6.png";
import screen_shot_check_connect_7 from "../../../../images/screen_shot_check_connect_7.png";
import screen_shot_check_connect_8 from "../../../../images/screen_shot_check_connect_8.png";
import screen_shot_check_connect_9 from "../../../../images/screen_shot_check_connect_9.png";
import screen_shot_check_connect_10 from "../../../../images/screen_shot_check_connect_10.png";
import screen_shot_check_connect_11 from "../../../../images/screen_shot_check_connect_11.png";
import screen_shot_check_connect_12 from "../../../../images/screen_shot_check_connect_12.png";

import coppy_icon from "../../../../images/coppy_icon.png";
import zoom_in from "../../../../images/zoom_in_icon.png";
import close from "../../../../images/close.png";
import { useRef } from "react";
import Tip from "../../../../components/Tip/page";

interface PageProps {
  id: string;
}
function CheckConnect({ params }: { params: PageProps }) {
  const textRef = useRef<HTMLElement>(null);
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
          Kiểm tra kết nối
        </h1>
        <Tip
          nameType="Lưu ý"
          content="Có nhiều cách kết nối EC2, các bạn có thể tham khảo kết nối EC2 bằng PuTTY. Trong bài lab, chúng ta sử dụng MobaXterm để kết nối EC2"
          colorFirst="#6AB0DE"
          colorSecond="#E7F2FA"
        />
        <div>
          <p>
            1. Thực hiện tải{" "}
            <a
              href="https://mobaxterm.mobatek.net/download.html"
              target="_blank"
              className="text-[#22a6df]"
            >
              MobaXtem
            </a>{" "}
            tại đây
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_check_connect_1}
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
                    src={screen_shot_check_connect_1}
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
          <p>2. Truy cập vào EC2 Dashbard</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Click chọn vào mục <b>Instances</b>
            </li>
            <li>
              Tick chọn vào <b>EC2 Public</b>
            </li>
            <li>
              Click vào mục<b>Details</b>
            </li>
            <li>
              Xem <b>Public IPv4 address</b>
            </li>
          </ul>
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
          <p>3. Sau khi tải MobaXterm, tiến hành giải nén và mở</p>
          <p>- Chọn Session, xuất hiện hộp thoại Session settings</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_check_connect_3}
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
                    src={screen_shot_check_connect_3}
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
          <p>4. Trong giao diện Session settings</p>
          <p>- Chọn SSH</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_check_connect_4}
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
                    src={screen_shot_check_connect_4}
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
          <p>5. Hộp thoại Session settings xuất hiện</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Ở mục <b>remote host</b>, nhập <b>Public IPv4 address</b>
            </li>
            <li>
              Ở mục <b>Specify username</b>, nhập ec2-user
            </li>
            <li>
              Tick chọn mục <b>User private key</b>, chọn đường dẫn của{" "}
              <b>aws-keypair.pem</b> đã tạo và tải về máy lúc tạo EC2.
            </li>
          </ul>
          <p>
            6. Nếu xuất hiện như thế này, thì chúc mừng bạn đã kết nối thành
            công
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_check_connect_6}
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
                    src={screen_shot_check_connect_6}
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
            7. Kiểm tra kết nối tới internet của EC2 Public, ta thực hiện bằng
            cách
          </p>
          <p>
            - Gõ lệnh <b>ping amazon.com -c5</b>
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_check_connect_7}
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
                    src={screen_shot_check_connect_7}
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
            8. Thực hiện ping đến EC2 private để kiểm tra kết nối, ta thực hiện
            bằng cách
          </p>
          <p>
            - Gõ lệnh <b>ping {`&lt;`}IP Private EC2 Private{`&gt;`} -c5</b>. Câu lệnh
            này sẽ kiểm tra kết nối từ máy chủ EC2 Public sang máy chủ EC2
            Private
          </p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_check_connect_8}
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
                    src={screen_shot_check_connect_8}
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
            9. EC2 Private sẽ không có public IP address vì chúng ta không gán
            cho máy chủ này public IP. Để có thể ssh vào EC2 Private, chúng ta
            sẽ thực hiện kết nối SSH từ EC2 Public thông qua địa chỉ private ID
            address của EC2 Private
          </p>
          <p>
            - Download công cụ <b>pscp</b> vào cùng thư mục chứa file{" "}
            <b>aws-keypair.ppk</b> để thực hiện coppy file aws-keypair.pem từ
            máy của chúng ta vào EC2 Public
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Bạn có thể tải <b>RSA and DSA key generation utility</b> là dạng{" "}
              <b>puttgen.exe</b>{" "}
              <a
                href="https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe"
                target="_blank"
              >
                tại đây
              </a>
            </li>
            <li>
              Bạn có thể tải{" "}
              <b>SCP client, i.e command-line secure file copy</b> là dạng{" "}
              <b> pscp.exe</b>{" "}
              <a
                href="https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe"
                target="_blank"
              >
                tại đây
              </a>
            </li>
          </ul>
          <p>10. Chúng ta sử dụng puttyge.exe để generation key</p>
          <ul className="list-disc ml-[20px]">
            <li>
              Click chọn <b>Load</b> để load key từ file <b>aws-keypair.pem</b>
            </li>
            <li>
              Click chọn <b>OK</b>
            </li>
            <li>
              Click chọn <b>Save private key</b>
            </li>
            <li>
              Sau đó nhấn <b>OK</b>
            </li>
          </ul>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_check_connect_9}
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
                    src={screen_shot_check_connect_9}
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
          <p>10. Vậy là chúng ta đã hoàn thành generation key</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_check_connect_10}
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
                    src={screen_shot_check_connect_10}
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
            11. Khởi chạy <b>CLI</b> ở thư mục vừa dowload pscp. Chạy lệnh dưới
            đây để upload file{" "}
            <b>awslab-keypair.pem lên thư mục /home/ec2-user/</b> của máy chủ
            EC2 Public
          </p>
          <p>- Lưu ý cần phải thay địa chỉ IP address của EC2 Public</p>
          <div className="bg-[#1c222a] p-[12px] relative">
            <p
              className="text-[#abb2bf] bg-[#282c34] py-[4px] px-[8px] rounded-[4px] font-bold"
              ref={textRef}
            >
              pscp -i aws-keypair.ppk aws-keypair.pem ec2-user@{"&lt;"}
              <span className="text-red-500 font-bold">
                EC2 PUBLIC public IP address
              </span>
              {"&gt;"}:/home/ec2-user/
            </p>
            <Image
              src={coppy_icon}
              alt="coppy-icon"
              width={20}
              className="invert filter absolute top-[2px] right-[2px] cursor-pointer"
              onClick={handleCoppy}
            />
          </div>
          <p>- Sau khi chạy lệnh xong sẽ xuất hiện</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_check_connect_11}
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
                    src={screen_shot_check_connect_11}
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
            12. Quay trở lại giao diện kết nối EC2. Để đảm bảo bạn coppy file{" "}
            <b>awslab-keypair.pem</b> lên máy chủ EC2 Public ta thực hiện lệnh
          </p>
          <div className="bg-[#1c222a] p-[12px] relative">
            <p
              className="text-[#abb2bf] bg-[#282c34] py-[4px] px-[8px] rounded-[4px] font-bold"
              ref={textRef}
            >
              ls
            </p>
            <Image
              src={coppy_icon}
              alt="coppy-icon"
              width={20}
              className="invert filter absolute top-[2px] right-[2px] cursor-pointer"
              onClick={handleCoppy}
            />
          </div>
          <p>- Nếu coppy thành công sẽ xuất hiện</p>
          <div className="flex justify-center my-[20px]">
            <div className="relative w-[80%]">
              <Image
                src={screen_shot_check_connect_12}
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
                    src={screen_shot_check_connect_12}
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
            13. Cập nhật quyền cho file <b>awslab-keypair.pem</b> bằng cách chạy
            lệnh <b>chmod 400 aws-keypair.pem</b>. AWS yêu cầu file keypair cần
            được hạn chế quyền truy cập trước khi được sử dụng để kết nối tới
            máy chủ EC2
          </p>
          <div className="bg-[#1c222a] p-[12px] relative mb-[20px]">
            <p
              className="text-[#abb2bf] bg-[#282c34] py-[4px] px-[8px] rounded-[4px] font-bold"
              ref={textRef}
            >
              <span className="text-[#d19a66]">chmod</span>{" "}
              <span className="text-[#98c379]">400 awslab-keypair.pem</span>
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
      </div>
    </Layout>
  );
}

export default CheckConnect;
