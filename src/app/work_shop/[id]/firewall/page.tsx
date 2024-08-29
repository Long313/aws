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
import Link from "next/link";

interface PageProps {
  id: string;
}
function Firewall({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div className="">
        <div className="items-center">
          <h1 className="text-[#22a6df] font-bold text-[24px] my-[20px] text-center">
            What is Firewall in AWS?
          </h1>
          <p>
            Trong phần này, chúng ta sẽ tìm hiểu các tính năng bảo mật cơ bản
            trong Amazon VPC như tính năng tường lửa Security Group và Network
            Access Control List (NACLs).
          </p>
          <p>
            Một Security Group hoạt động như một tường lửa ảo cho EC2 Instance,
            giúp kiểm soát lưu lượng truy cập. Một Instance trong VPC có thể
            được gán tối đa 5 Security Group do Security Group chỉ hoạt động ở
            tầng Instance mà không hoạt động ở tầng Subnet
          </p>
          <div className="rounded-[4px] overflow-hidden max-w-[98%] my-[10px] mx-auto mb-[20px]">
            <div className="bg-[#6AB0DE] flex items-center justify-start p-[10px]">
              <span className="text-[16px] p-[4px] flex justify-center items-center text-[#6AB0DE] bg-white w-[20px] h-[20px] rounded-full border border-[white]">
                &#33;
              </span>
              <span className="text-white inline-block ml-[10px] font-bold text-[18px]">
                Lưu ý
              </span>
            </div>
            <p className="bg-[#E7F2FA] p-[10px]">
              Security groups hoạt động ở mức máy ảo, không phải ở mức subnet.
              Tuy nhiên, mỗi máy ảo trong một subnet có thể được gán với nhiều
              bộ Security group khác nhau.
            </p>
          </div>
          <p>
            Danh sách kiểm soát truy cập mạng (NACLs) là lớp bảo mật tùy chọn
            cho VPC, nó hoạt động như một tường lửa để kiểm soát lưu lượng ra và
            vào cho một hoặc nhiều subnet. Chúng ta có thể thiết lập network ACL
            với các rule tương tự như Security Group, nhằm bổ sung thêm một lớp
            bảo mật nữa cho VPC.
          </p>
          <div className="mr-auto my-[20px]">
            <a
              className="text-[#22a6df] italic"
              href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html"
              target="_blank"
            >
              Tìm hiểu thêm về AWS Network Firewall
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Firewall;
