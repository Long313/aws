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
function IntroduceNestJs({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div className="mb-[10px]">
        <div className="items-center">
          <h1 className="text-[#22a6df] font-bold text-[24px] my-[20px] text-center">
            What is NestJS ?
          </h1>
          <div className="">
            <p>
              -{" "}
              <a
                className="text-[#22a6df]"
                href="https://nestjs.com/"
                target="_blank"
              >
                NestJS
              </a>{" "}
              là một framework{" "}
              <a
                className="text-[#22a6df]"
                href="https://nodejs.org/en"
                target="_blank"
              >
                <Image
                  src={nodejs}
                  alt="nodejs-logo"
                  width={60}
                  className="inline-block mt-[-8px]"
                />
              </a>{" "}
              &nbsp;mạnh mẽ và phổ biến, được xây dựng dựa trên&nbsp;
              <a
                className="text-[#22a6df]"
                href="https://www.typescriptlang.org/"
                target="_blank"
              >
                TypeScript
              </a>{" "}
              <Image
                src={typescript}
                alt="typescript-logo"
                width={20}
                className="inline-block mt-[-8px]"
              />
              &nbsp;và lấy cảm hứng từ các kiến trúc module của{" "}
              <a
                className="text-[#22a6df]"
                href="https://angular.dev/"
                target="_blank"
              >
                Angular
              </a>
              &nbsp;
              <Image
                src={angular}
                alt="angular-logo"
                width={18}
                className="inline-block mt-[-8px]"
              />
              &nbsp; Mục tiêu của NestJS là giúp xây dựng các ứng dụng web
              server-side dễ dàng hơn với các tính năng hiện đại như Dependency
              Injection (DI), các middleware, và một hệ thống routing mạnh mẽ.
            </p>
            <div className="flex justify-center items-center w-[20%] mx-auto my-[20px]">
              <Image src={nestjs_logo} alt="nestjs-logo" className="w-full" />
            </div>
            <p>- Một số đặc điểm nổi bật của NestJS:</p>
            <ul className="list-disc ml-[20px]">
              <li>
                <b>TypeScript:</b> NestJS được viết hoàn toàn bằng TypeScript,
                nhưng bạn cũng có thể sử dụng JavaScript nếu muốn.
              </li>
              <li>
                <b>Modularity:</b> NestJS cho phép chia nhỏ ứng dụng thành các
                module, giúp dễ quản lý, bảo trì và mở rộng.
              </li>
              <li>
                <b>Middleware và Guards:</b> Cung cấp các công cụ để kiểm soát
                quyền truy cập và xử lý logic giữa các request.
              </li>
              <li>
                <b>Hỗ trợ WebSocket và Microservices:</b> NestJS hỗ trợ xây dựng
                các ứng dụng với WebSocket và microservices.
              </li>
              <li>
                <b>Hỗ trợ MVC:</b> NestJS tuân thủ mô hình MVC
                (Model-View-Controller), giúp dễ dàng tổ chức và phát triển dự
                án.
              </li>
            </ul>
            <p>
              - NestJS thường được sử dụng để xây dựng các ứng dụng web hoặc
              API, đặc biệt là khi cần phát triển các dự án có kiến trúc phức
              tạp hoặc sử dụng TypeScript.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IntroduceNestJs;
