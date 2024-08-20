"use client";
import Layout from "@/components/Layout/page";
``;

interface PageProps {
  id: string;
}
function Subnets({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div>
        <div className="items-center">
          <h1 className="text-center font-bold my-[20px] text-[20px] text-[#22a6df]">
            What is Subnet ?
          </h1>
          <div>
            <p>
              Subnets là một phân đoạn của dải địa chỉ IP mà bạn sử dụng khi
              khởi tạo Amazon VPC, cung cấp trực tiếp dải mạng hoạt động cho các
              tài nguyên AWs có thể chạy bên trong nó như Amazon EC2, Amazon RDS
              (CSDL quan hệ Amazon),... các subnet cũng được xác định thông qua
              CIDR block (ví dụ: 10.0.1.0/24 và 192.168.0.0/24) và bắt buộc các
              CIDR của subnet phải nằm trong CIDR của VPC. Subnet nhỏ nhất có
              thể tạo được là /28 (16 điah chỉ IP). AWS lưu trữ 4 địa chỉ IP đầu
              tiên và 1 địa chỉ IP cuối cùng của mỗi subnet cho các mục đích kết
              nối mạng nội bộ. Ví dụ: subnet /28 có 16 địa chỉ IP khả dụng,
              nhưng loại bỏ 5 reserved IP cho AWS, như vậy còn lại 11 địa chỉ IP
              có thể sử dụng cho các tài nguyên hoạt động bên trong subnet này
            </p>
            <p>
              Availability Zone hay được viết tắt thành AZ là một trung tâm dữ
              liệu con, nằm bên trong Region và được xác định dựa treo vị trí
              địa lý. Bên trong AZ có thể có một hoặc nhiều subnet, nhưng một
              subnet chi có thể nằm trong duy nhất một AZ mà không thể mở rộng
              sang AZ khác
            </p>
            <p>
              Các subnet được chia thành các loại như Public, Private hoặc
              VPN-only
            </p>
            <ul className="list-disc">
              <li>
                Public subnet là subnet có route table điều hướng lưu lượng truy
                cập bên trong subnet đi tới VPC IGW
              </li>
              <li>
                Private subnet thì ngược lại với Public subnet, nó không có
                route{" "}
              </li>
              <li>
                VPN-only subnet là subnet mà có route table điều hướng lưu lượng
                truy cấp với VPG của Amazon VPC
              </li>
            </ul>
            <a
              href="https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html"
              target="_blank"
              className="inline-block my-[40px] italic text-[#22a6df]"
            >
              Tìm hiểu thêm về Subnet
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Subnets;
