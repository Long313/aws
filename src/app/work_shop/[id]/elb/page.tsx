"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import alb_1 from "../../../../images/alb_1.png";
import glb_1 from "../../../../images/glb_1.png";
import nlb_1 from "../../../../images/nlb_1.png";

interface PageProps {
  id: string;
}
function ELB({ params }: { params: PageProps }) {
  const [active, setActive] = useState("alb");
  return (
    <Layout id={params.id}>
      <div>
        <h1 className="my-[20px] text-[#22a6df] text-[24px] font-bold text-center">
          What is Elastic Load Balancing (ELB) ?
        </h1>
        <div>
          <p>
            - Cân bằng tải đàn hồi (ELB) tự động phân phối lưu lượng ứng dụng
            đến nhiều mục tiêu và thiết bị ảo trong một hoặc nhiều Availability
            Zones(AZs)
          </p>
          <p>
            - Elastic Load Balancing (ELB) bao gồm Application Load Balancer
            (ALB), Gateway Load Balancer (GLB) và Network Load Balancer (NLB)
          </p>
          <div className="border-[2px] border-[#d5dbdb] w-4/5 my-[20px]">
            <div className="mt-[-2px] flex justify-between bg-[#f7f4f4]">
              <span
                className={`${
                  active === "alb"
                    ? "text-[#033160] border-t-[2px] border-[#000]"
                    : "text-[#22a6df] border-t-[2px] border-[#d5dbdb]"
                } font-bold text-[20px] w-1/3 text-center cursor-pointer`}
                onClick={() => setActive("alb")}
              >
                Application Load Balancer
              </span>
              <span
                className={`${
                  active === "glb"
                    ? "text-[#033160] border-t-[2px] border-[#000]"
                    : "text-[#22a6df] border-t-[2px] border-[#d5dbdb]"
                } font-bold text-[20px] w-1/3 text-center cursor-pointer`}
                onClick={() => setActive("glb")}
              >
                Gateway Load Balancer
              </span>
              <span
                className={`${
                  active === "nlb"
                    ? "text-[#033160] border-t-[2px] border-[#000] w-1/3 text-center"
                    : "text-[#22a6df] border-t-[2px] border-[#d5dbdb]"
                } font-bold text-[20px] w-1/3 text-center cursor-pointer`}
                onClick={() => setActive("nlb")}
              >
                Network Load Balancer
              </span>
            </div>
            <div className="w-full flex justify-center">
              <div
                className={`${active === "alb" ? "block w-full" : "hidden"}`}
              >
                <Image src={alb_1} alt="alb" />
              </div>
              <div
                className={`${active === "glb" ? "block w-full" : "hidden"}`}
              >
                <Image src={glb_1} alt="glb" />
              </div>
              <div
                className={`${active === "nlb" ? "block w-full" : "hidden"}`}
              >
                <Image src={nlb_1} alt="nlb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ELB;
