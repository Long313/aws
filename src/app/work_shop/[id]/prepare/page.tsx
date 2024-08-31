"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import work_shop from '../../../../images/work_shop.drawio.png';
import zoom_in from "../../../../images/zoom_in_icon.png";
import close from "../../../../images/close.png";

interface PageProps {
  id: string;
}
function Prepare({ params }: { params: PageProps }) {
  const [zoom, setZoom] = useState(0);

  return (
    <Layout id={params.id}>
      <div>
        <h1 className="my-[20px] text-[#22a6df] text-[24px] font-bold text-center">
          Các bước chuẩn bị
        </h1>
        <p>Trong bài thực hành này, chúng ta sẽ chuẩn bị một số tài nguyên để xây dựng một mô hình theo sơ đồ bên dưới</p>
        <div className="flex justify-center my-[20px]">
            <div className="relative w-[50%]">
              <Image src={work_shop} alt="vpc" className="w-full" />
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
                <div className="w-[50%] h-[80%] bottom-[50px] relative z-10">
                  <Image
                    src={work_shop}
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
    </Layout>
  );
}

export default Prepare;
