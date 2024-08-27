"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import NAT_gateway_1 from "../../../../images/NAT_gateway_1.drawio.png";

interface PageProps {
  id: string;
}
function NateGateway({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div>
        <div className="items-center">
          <h1 className="text-[#22a6df] font-bold text-[24px] my-[20px] text-center">
            What is NAT Gateway ?
          </h1>
          <div>
            <p>
              - Mặc định, mọi EC2 chạy bên trong Private subnet thì sẽ không có
              khả năng giao tiếp với Internet thông qua IGW. Từ dó vấn đề phát
              sinh khi EC2 đó cần truy cập ra ngoài internet để áp dụng các bản
              cập nhật bảo mật, tải xuống các bản vá hoặc cập nhật phần mềm ứng
              dụng.
            </p>
            <p className="my-[10px]">
              - Nắm bắt được nhu cầu đó, AWS cung cấp 2 phương thức cho phép các
              EC2 bên trong Private subnet có quyền được truy cập Internet, đó
              là NAT Instance và NAT Gateway. Với các trường hợp thông thường,
              thì ta nên sử dụng NAT Gateway thay cho NAT Instance. NAT Gateway
              đảm bảo tính sẵn sàng và băng thông cao hơn, đồng thời đòi hỏi ít
              nỗ lực quản trị hơn so với NAT Instance
            </p>
            <p className="mb-[10px]">
              - Để tạo một NAT Gateway, ta phải chỉ định một mạng con (public)
              và một địa chỉ Elastic IP. Cần đảm bảo địa chỉ Elastic IP đang
              không được liên kết với bất cứ Instance hoặc một Network interface
              nào khác
            </p>
            <p>
              - Trường hợp ta muốn migrate từ NAT instance sang NAT gateway, ta
              có thể sử dụng lại địa chỉ Elastic IP của NAT instance. Nhưng
              trước hết ta cần phải tách địa chỉ IP ra khỏi NAT Instance.
            </p>
          </div>
          <div className="flex justify-center mt-[20px]">
            <Image src={NAT_gateway_1} alt="NAT_gateway" />
          </div>
          <a
            href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html"
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

export default NateGateway;
