"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";

interface PageProps {
  id: string;
}
function RDS({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div>
        <h1 className="my-[20px] text-[#22a6df] text-[24px] font-bold text-center">
          What is Relational Databse Service (RDS) ?
        </h1>
        <div>
          
        </div>
      </div>
      <a className="text-[#22a6df] italic" href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html" target="_blank">Tìm hiểu thêm về RDS</a>
    </Layout>
  );
}

export default RDS;
