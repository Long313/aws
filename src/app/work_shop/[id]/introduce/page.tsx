"use client";
import Layout from "@/components/Layout/page";
import work_shop from "../../../../images/work_shop.drawio.png";
import Image from "next/image";

interface PageProps {
  id: string;
}
function Introduce({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div className="">
        <div className="flex items-center flex-col">
          <h1 className="text-center font-bold my-[20px] text-[20px] text-[#22a6df]">
            High Availability Architecture
          </h1>
          <div className="">
            <p className="font-semibold">
              Đây là một High Availability Architecture với mục tiêu:
            </p>
            <ul>
              <li>
                - Tính sẵn sàng cao (High Availability) nhờ việc sử dụng nhiều
                AZs.
              </li>
              <li>
                - Khả năng mở rộng (Scalability) thông qua{" "}
                <a
                  className="text-[#22a6df]"
                  href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html"
                  target="_blank"
                >
                  Auto Scaling Groups
                </a>
                .
              </li>
              <li>
                - Bảo mật (Security) với các subnets riêng biệt cho các tài
                nguyên public, private subnet.
              </li>
              <li>
                - Tính linh hoạt (Flexibility) và hiệu suất cao (Performance)
                với{" "}
                <a
                  href="https://aws.amazon.com/elasticloadbalancing/application-load-balancer/"
                  target="_blank"
                  className="text-[#22a6df]"
                >
                  ALB
                </a>{" "}
                và{" "}
                <a
                  href="https://aws.amazon.com/elasticloadbalancing/application-load-balancer/"
                  target="_blank"
                  className="text-[#22a6df]"
                >
                  ELB
                </a>
                .
              </li>
              <li>
                - Kiến trúc này thường được sử dụng cho các ứng dụng web phức
                tạp, có yêu cầu về tính khả dụng, khả năng mở rộng và bảo mật
                cao.
              </li>
            </ul>
          </div>
          <Image
            src={work_shop}
            alt="work_shop_1"
            className="w-2/3 inline-block mt-[20px]"
          />
          <div className="">
            <p className="mt-[20px] mb-[10px]">
              Đây là mô hình kiến trúc phổ biến cho ứng dụng web hoặc ứng dụng
              phân tán với các thành phần sau:
            </p>
            <ol>
              <li className="my-[10px]">
                <span className="font-bold text-[#22a6df]">
                  <a
                    href="https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"
                    target="_blank"
                  >
                    - Availability Zones (AZs)
                  </a>
                  :
                </span>{" "}
                Đây là các trung tâm dữ liệu vật lý riêng biệt trong cùng một
                vùng (
                <a
                  className="text-[#22a6df]"
                  href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html"
                  target="_blank"
                >
                  region
                </a>
                ) AWS, giúp tăng cường tính khả dụng và giảm thiểu rủi ro sự cố.
              </li>
              <li className="my-[10px]">
                <span className="font-bold text-[#22a6df]">
                  <a
                    href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"
                    target="_blank"
                  >
                    - Virtual Private Cloud (VPC):
                  </a>
                </span>{" "}
                Đây là một môi trường mạng ảo mà bạn có thể kiểm soát hoàn toàn,
                bao gồm cả việc xác định các{" "}
                <a
                  className="text-[#22a6df]"
                  href="https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html"
                  target="_blank"
                >
                  subnets
                </a>
                ,{" "}
                <a
                  href="https://docs.aws.amazon.com/vpc/latest/userguide/RouteTables.html"
                  target="_blank"
                  className="text-[#22a6df]"
                >
                  route tables
                </a>{" "}
                và{" "}
                <a
                  href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html"
                  target="_blank"
                  className="text-[#22a6df]"
                >
                  security group
                </a>
                .
              </li>
              <li className="my-[10px]">
                <p>
                  <span className="font-bold">- Public Subnets:</span> Các
                  subnet này chứa tài nguyên có thể truy cập công khai từ
                  Internet, như:
                </p>
                <ul className="list-disc ml-[25px]">
                  <li>
                    <p>
                      <span className="font-bold">
                        <a
                          href="https://aws.amazon.com/pm/ec2/?trk=2611c804-1e99-4df7-a0e2-7da1f68ad997&sc_channel=ps&ef_id=:G:s&s_kwcid=AL!4422!10!71743361496055!71743883667895"
                          target="_blank"
                          className="text-[#22a6df]"
                        >
                          EC2 Instances:
                        </a>
                      </span>{" "}
                      Máy chủ ảo để chạy các ứng dụng hoặc dịch vụ.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">
                        <a
                          href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html"
                          target="_blank"
                          className="text-[#22a6df]"
                        >
                          NAT Gateway:
                        </a>
                      </span>{" "}
                      Cho phép các instances trong private subnets truy cập ra
                      ngoài Internet mà không bị lộ địa chỉ IP của chúng.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="my-[10px]">
                <p>
                  <span className="font-bold">- Private Subnets:</span> Các
                  subnet này chứa các tài nguyên không thể truy cập trực tiếp từ
                  Internet, như:
                </p>
                <ul className="list-disc ml-[25px]">
                  <li>
                    <p>
                      <span className="font-bold">EC2 Instances:</span> Máy chủ
                      ảo xử lý backend, không cần truy cập công khai.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">
                        <a className="text-[#22a6df]" href="https://aws.amazon.com/rds/" target="_blank">RDS (Relational Database Service)</a>:
                      </span>{" "}
                      Cơ sở dữ liệu quản lý, với <a className="text-[#22a6df]" href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html#replication-scenario" target="_blank">replication</a> để đảm bảo tính sẵn
                      sàng cao.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="my-[10px]">
                <span className="font-bold">
                  <a
                    href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html"
                    target="_blank"
                    className="text-[#22a6df]"
                  >
                    - Auto Scaling Groups:
                  </a>
                </span>{" "}
                Tự động điều chỉnh số lượng EC2 instances dựa trên nhu cầu tải,
                đảm bảo rằng ứng dụng luôn có đủ tài nguyên để xử lý lưu lượng.
              </li>
              <li className="my-[10px]">
                <span className="font-bold">
                  - ALB (Application Load Balancer):
                </span>{" "}
                Được sử dụng để phân phối lưu lượng ứng dụng (HTTP/HTTPS) đến
                các EC2 instances trong Auto Scaling Groups. ALB có thể hoạt
                động ở cả public và private subnets.
              </li>
              <li className="my-[10px]">
                <span className="font-bold">
                  - ELB (Elastic Load Balancer):
                </span>{" "}
                Có thể bao gồm cả ALB và CLB (Classic Load Balancer) hoặc NLB
                (Network Load Balancer). Trong mô hình này, ELB thường là một
                lớp phân phối lưu lượng để tăng cường tính khả dụng.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Introduce;
