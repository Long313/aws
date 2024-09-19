"use client";
import Layout from "@/components/Layout/page";
import nestjs_logo from "../../../../images/nestjs.svg";
import typescript from "../../../../images/typescript.svg";
import nodejs from "../../../../images/nodejs.svg";
import angular from "../../../../images/angular.svg";
import Image from "next/image";
import az from "./../../../../images/az.png";
import vpc from "./../../../../images/vpc.png";
import public_subnet from "./../../../../images/public_subnet.png";
import private_subnet from "./../../../../images/private_subnet.png";
import ec2 from "./../../../../images/ec2.png";
import NAT_gateway from "./../../../../images/NAT_gateway.png";
import rds from "./../../../../images/rds.png";
import auto_scaling_group from "./../../../../images/auto_scaling_group.png";
import ELB from "./../../../../images/ELB.png";
import ALB from "./../../../../images/ALB.png";
import deploy_nestjs_1 from "./../../../../images/deploy_nestjs_1.png";
import Link from "next/link";

interface PageProps {
  id: string;
}
function IntroduceMindsetDeploy({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div className="mb-[10px]">
        <div className="items-center">
          <h1 className="text-[#22a6df] font-bold text-[24px] my-[20px] text-center">
            Tư duy để triển khai (deploy) một dự án.
          </h1>
          <div className="">
            <p>- Các bước để triển khai một dự án</p>
            <ul className="list-disc ml-[20px]">
              <li>Bước 1: Build</li>
              <li>Bước 2: Run</li>
              <li>Bước 3: Deploy</li>
            </ul>
            <p>-Trong một source code của một dự án, chứa một số file như:</p>
            <ul className="list-disc ml-[20px]">
              <li>- Các file chức năng</li>
              <li>- Các file cấu hình (DevOps hay người triển khai cần quan tâm)</li>
              <li>- Các file khác</li>
            </ul>
            <p>- Để triển khai dự án thì cần đặt ra câu hỏi:</p>
            <ul className="list-disc ml-[20px]">
              <li>Dự án đó cần những công cụ gì ?</li>
              <li>File cấu hình là file nào và nó nằm ở đâu ?</li>
              <li>Làm sao để build source code của dự án ?</li>
              <li>Dự án đó cần những công cụ gì ?</li>
              <li>Run source code như thế nào ?</li>
            </ul>
            <p>Và trong blog này, mình sẽ cùng các bạn trả lời những câu hỏi trên.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IntroduceMindsetDeploy;
