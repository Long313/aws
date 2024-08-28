"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import screen_shot_vpc_1 from '../../../../images/screen_shot_vpc_1.png';

interface PageProps {
  id: string;
}
function Prepare({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div>
        <h1 className="my-[20px] text-[#22a6df] text-[24px] font-bold text-center">
          Các bước chuẩn bị
        </h1>
      </div>
    </Layout>
  );
}

export default Prepare;
