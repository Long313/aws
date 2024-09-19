"use client";
import Layout from "@/components/Layout/page";
import work_shop from "../../../../images/work_shop.drawio.png";
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
function IntroduceDeployNestJs({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div className="">
        <div className="items-center">
          <h1 className="text-[#22a6df] font-bold text-[24px] my-[20px] text-center">
            Deploy NestJS Project By EC2 Instance
          </h1>
          <div className="">
            <p>- Ở blog đầu tiên, mình đã giới thiệu một kiến trúc AWS, với một số service hết sức quen thuộc và cơ bản của AWS. Thì ở blog lần này, mình sẽ giới thiệu và thực hiện triển khai một dự án Backend viết bằng NestJS.</p>
            <p>- Và source code mình muốn triển khai trên AWS, cũng chính là source code Backend của trang blog này. Mọi người hãy theo chân mình để có thể hiểu rõ hơn về cách deploy một dự án Backend bằng máy chủ EC2 của AWS nhé.</p>
            <div className="flex justify-center items-center w-[60%] mx-auto">
                <Image src={deploy_nestjs_1} alt="deploy_nestjs_1" className="w-full"/>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IntroduceDeployNestJs;
