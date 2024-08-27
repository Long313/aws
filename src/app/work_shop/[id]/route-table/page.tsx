"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import route_table_1 from "../../../../images/route_table_1.drawio.png";

interface PageProps {
  id: string;
}
function Subnets({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div>
        <div className="items-center">
          <h1 className="text-[#22a6df] font-bold text-[24px] my-[20px] text-center">
            What is Route Table ?
          </h1>
          <div>
            <p>
              - Route Table hay còn gọi là bảng định tuyến, cung cấp hướng dẫn
              định tuyến và được gán vào các Subnets. Ví dụ khi bạn tạo VPC với
              lớp mạng 10.10.0.0/16, cùng 2 subnet 10.10.1.0/24, 10.10.2.0/24
              thì mỗi subnets mặc định sẽ được gán một default route table
            </p>
            <p className="my-[10px]">
              - Bên trong route table sẽ có route entry destination:10.10.0.0/16
              target:local. Route entry này thể hiện các tài nguyên tạo ra trong
              cùng 1 VPC có thể kết nối với nhau.
            </p>
          </div>
          <div className="flex justify-center mt-[20px]">
            <Image src={route_table_1} alt="route table" />
          </div>
          <a
            href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html"
            target="_blank"
            className="inline-block my-[40px] italic text-[#22a6df]"
          >
            Tìm hiểu thêm về Route Table
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Subnets;
