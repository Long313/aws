"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";

interface PageProps {
  id: string;
}
function NACLs({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div>
        <h1 className="my-[20px] text-[#22a6df] text-[24px] font-bold text-center">
          Kiểm soát lưu lượng truy cập với Network Access Control List (NACL)
        </h1>
        <p>
          Network access control list (Network ACL) cho phép hoặc từ chối lưu
          lượng truy cập (traffic) vào hoặc ra cụ thể ở cấp độ mạng con
          (subnet). Bạn có thể sư dụng network ACL mặc định cho VPC hoặc có thể
          tạo network ACL tùy chỉnh cho VPC bằng các quy tắc (rules) tương tự
          như các quy tắc cho Security Group của bạn để thêm một lớp bảo mật bổ
          sung vào VPC
        </p>
        <p>Bạn k phải charge thêm phí khi sử dụng network ACL</p>
        <p>
          Sơ đồ sau đây biểu thị một VPC có 2 mạng con (subnet). Mỗi subnet có
          một network ACL. Khi traffic truy cập vào VPC (ví dụ: từ VPC ngang
          hàng, kết nối VPC hoặc internet), bộ định tuyến sẽ gửi lưu lượng truy
          cập đến đích của nó. Network ACL A xác định lưu lượng truy cập nào
          được định hướng đến subnet 1 được phép vào subnet 1 và lưu lượng truy
          cập nào được định hướng đến vị trí bên ngoài subnet 1 được phép rời
          khỏi subnet 1. Tương tự như vậy, network ACL B xác định lưu lượng truy
          cập nào được phép vào và rời khỏi subnet 2
        </p>
      </div>
      <a
        className="text-[#22a6df] italic"
        href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
        target="_blank"
      >
        Tìm hiểu thêm về Network Access Control List
      </a>
    </Layout>
  );
}

export default NACLs;
