"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import nacl_example from "../../../../images/nacl_example.png";

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
          - <b>Network Access Control List (Network ACL)</b> cho phép hoặc từ
          chối lưu lượng truy cập (traffic) vào hoặc ra cụ thể ở cấp độ mạng con
          (subnet). Bạn có thể sư dụng network ACL mặc định cho VPC hoặc có thể
          tạo network ACL tùy chỉnh cho VPC bằng các quy tắc (rules) tương tự
          như các quy tắc cho Security Group của bạn để thêm một lớp bảo mật bổ
          sung vào VPC
        </p>
        <p>- Bạn k phải charge thêm phí khi sử dụng network ACL</p>
        <p>
          - Sơ đồ sau đây biểu thị một VPC có 2 mạng con (subnet). Mỗi subnet có
          một network ACL. Khi traffic truy cập vào VPC (ví dụ: từ VPC ngang
          hàng, kết nối VPC hoặc internet), bộ định tuyến sẽ gửi lưu lượng truy
          cập đến đích của nó. Network ACL A xác định lưu lượng truy cập nào
          được định hướng đến subnet 1 được phép vào subnet 1 và lưu lượng truy
          cập nào được định hướng đến vị trí bên ngoài subnet 1 được phép rời
          khỏi subnet 1. Tương tự như vậy, network ACL B xác định lưu lượng truy
          cập nào được phép vào và rời khỏi subnet 2
        </p>
        <div className="flex justify-center my-[20px]">
          <Image src={nacl_example} alt="nacl-example" />
        </div>
        <p className="font-bold text-[18px] mb-[10px]">
          Một số kiến thức cơ bản về Network ACL
        </p>
        <ul className="list-disc ml-[20px]">
          <li>
            VPC của bạn tự động đi kèm với Network ACL mặc định có thể sửa đổi.
            Theo mặc định, nó cho phép tất cả lưu lượng IPv4 đến và đi, nếu có
            thể là lưu lượng IPv6
          </li>
          <li>
            Bạn có thể tạo Network ACL tùy chỉnh và liên kết nó với 1 subnet để
            cho phép hoặc từ chối traffic đến và đi cụ thể ở cấp subnet
          </li>
          <li>
            Mỗi subnet trong VPC của bạn phải được liên kết với Network ACL. Nếu
            bạn không liên kết rõ ràng một subnet với Network ACL, subnet đó sẽ
            tự động được liên kết với Network ACL mặc định
          </li>
          <li>
            Bạn có thể liên kết Network ACL với nhiều subnet. Tuy nhiên một
            subnet chỉ có thể được liên kết với 1 Network ACL tại một thời điểm.
            Khi bạn liên kết Network ACL với 1 subnet, liên kết trước đó sẽ bị
            xóa
          </li>
          <li>
            Network ACL có các quy tăc đến (inbound rules) và quy tắc đi
            (outbound rules). Mỗi quy tắc có thể cho phép hoặc từ chối traffic.
            Mỗi rule có một số từ 1 đến 32766. Network ACL sẽ đánh giá các quy
            tắc theo số thứ tự từ nhỏ đến lớn, khi quyết định cho phép hay từ
            chối traffic. Nếu traffic khớp với một rule, rule đó sẽ được áp dụng
            và NACL sẽ không đánh giá bất kỳ quy tắc bổ sung nào. Lời khuyên là
            bạn nên bắt đầu bằng cách tạo ra các quy tắc theo từng bước (ví dụ:
            các bước tăng dần 10 hoặc 100) để bạn có thể chèn các quy tắc mới
            sau này nếu cần.
          </li>
          <li>
            NACL đánh giá các NACL rules khi traffic vào và ra khỏi subnet,
            không phải khi traffic được định tuyến trong subnet
          </li>
          <li>
            NACL là stateless, nghĩa là thông tin về traffic đã gửi hoặc đã nhận
            trước đó không được lưu. Ví dụ: nếu bạn tạo NACL rule để cho phép
            traffic cụ thể đến một subnet, thì phản hồi cho traffic đó sẽ không
            được tự động cho phép. Điều này trái ngược với cách hoạt động của
            Security Group. Security Group là statefull, nghĩa là thông tin về
            traffic đã gửi hoặc đã nhận trước đó sẽ được lưu. Ví dụ: nêu
            Security Group cho phép traffic đến đến một EC2 Instance, thì phản
            hồi sẽ tự động cho phép bất kể quy tắc nhóm bảo mật đi
          </li>
          <li>
            NACL không lọc lưu lượng đê và đi từ: Amazon Domain Name Service
            (DNS), Amazon Dynamic Host Configuration Protocol (DHCP), Amazon
            EC22 Instance metadata, Amazon EC2 task metadata endpoints, Lisence
            activation for Windows instances, Amazon Time Sync Service
          </li>
        </ul>
      </div>
      <a
        className="text-[#22a6df] italic inline-block my-[20px]"
        href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html"
        target="_blank"
      >
        Tìm hiểu thêm về Network Access Control List
      </a>
    </Layout>
  );
}

export default NACLs;
