"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import rds_1 from "../../../../images/rds_1.drawio.png";

interface PageProps {
  id: string;
}
function RDS({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div>
        <h1 className="my-[20px] text-[#22a6df] text-[24px] font-bold text-center">
          What is Relational Databse Service (RDS) ?
        </h1>
        <div>
          <p>
            - <b>Amazon Relational Database Service (RDS)</b> là một dịch vụ web
            giúp thiết lập, vận hành và mở rộng cơ sở dữ liệu quan hệ trên AWS
            Cloud dễ dàng hơn. Nó cung cấp khả năng thay đổi kích thước, tiết
            kiệm chi phí cho cơ sở dữ liệu quan hệ theo tiêu chuẩn công nghiệp
            và quản lý các tác vụ quản trị cơ sở dữ liệu phổ biến.
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
              Bài viết này đề cập đến công cụ cơ sở dữ liệu Amazon RDS khác
              ngoài Amazon Aurora. Để biết thêm thông tin về cách sử dụng Amazon
              Aurora, hãy xem thêm
              <a
                className="text-[#22a6df] italic"
                href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"
                target="_blank"
              >
                &nbsp;hướng dẫn sử dụng Amazon Aurora.
              </a>
            </p>
          </div>
          <div>
            <p className="font-bold text-[16px]"> Ưu điểm của Amazon RDS</p>
            <p>
              - Amazon RDS là một dịch vụ cơ sở dữ liệu được quản lý. Dịch vụ
              này chịu trách nhiệm cho hầu hết các tác vụ quản lý. Bằng cách
              loại bỏ các quy trình cấu hình thủ công cơ sở dữ liệu, Amazon RDS
              giúp bạn tập trung vào ứng dụng và người dùng của mình.
            </p>
            <p>
              - Amazon cung cấp những lợi thế chính sau đây so với các triển
              khai cơ sở dữ liệu không được quản lý hoàn toàn:
            </p>
            <ul className="list-disc ml-[20px]">
              <li>
                Bạn có thể sử dụng các công cụ cơ sở dữ liệu mà bạn đã quen
                thuộc: IBM Db2, MariaDB, Microsoft SQL Server, MySQL, Oracle
                Database và PostgreSQL
              </li>
              <li>
                Amazon RDS quản lý các bản sao lưu, bản vá phần mềm, phát hiện
                lỗi tự động và khôi phục.
              </li>
              <li>
                Bạn có thể có tính khả dụng cao với phiên bản DB chính và phiên
                bản DB phụ đồng bộ mà bạn có thể chuyển sang khi có sự cố xảy
                ra. Bạn cũng có thể sử dụng bản sao đọc để tăng khả năng mở rộng
                đọc.
              </li>
              <li>
                Ngoài tính bảo mật trong gói cơ sở dữ liệu của mình, bạn có thể
                kiểm soát quyền truy cập bằng cách sử dụng AWS Identity and
                Access Management (IAM) để xác định người dùng và quyền. Bạn
                cũng có thể giúp bảo vệ cơ sở dữ liệu của mình bằng cách đưa
                chúng vào virtual private cloud (VPC)
              </li>
            </ul>
            <p className="font-bold text-[16px]">
              So sánh giữa Amazon EC2 và triển khai tại chỗ
            </p>
            <p>- Triển khai tại chỗ (On-premises deployment):</p>
            <p>
              &nbsp;Khi bạn mua máy chủ tại chỗ, bạn sẽ nhận được CPU, bộ nhớ,
              lưu trữ và IOPS, tất cả đều được đóng gói lại với nhau. Bạn chịu
              toàn bộ trách nhiệm với máy chủ, hệ điều hành và phần mềm cơ sở dữ
              liệu
            </p>
            <p>- Amazon EC2</p>
            <p>
              &nbsp;Amazon Elastic Compute Cloud (Amazon EC2) cung cấp khả năng
              tính toán có thể mở rộng trong AWS Cloud. Không giống như trong
              máy chủ tại chỗ, CPU, bộ nhớ, lưu trữ và IOPS được tách biệt đễ
              bạn có thể mở rộng chúng một cách độc lập. AWS quản lý các lớp
              phần cứng, giúp loại bỏ một số gánh nặng khi quản lý máy chủ cơ sở
              dữ liệu tại chỗ
            </p>
            <p>
              - Nhược điểm khi chạy cở sở dữ liệu trên Amazon EC2 là bạn dễ gặp
              lỗi của người dùng hơn. Ví dụ: khi bạn cập nhật hệ điều hành hoặc
              phần mềm cơ sở dữ liệu theo cách thủ công, bạn có thể vô tình
              khiến ứng dụng ngừng hoạt động. Bạn có thể mất hàng giờ để kiểm
              tra mọi thay đổi để xác định và khắc phục sự cố
            </p>
            <p className="font-bold text-[18px]">Mô hình của Amazon RDS</p>
            <p>
              - Amazon RDS chịu trách nhiệm lưu trữ các thành phần phần mềm và
              cơ sở hạ tầng của các phiên bản DB và cụm DB. Bạn chịu trách nhiệm
              điều chỉnh truy vấn, đây là quy trình điều chỉnh các truy vấn SQL
              để cải thiện hiệu suất.{" "}
            </p>
            <p>
              - Hiệu suất truy vấn phụ thuộc rất nhiều vào thiết kế cơ sở dữ
              liệu, kích thước dữ liệu, phân phối dữ liệu, khối lượng công việc
              của ứng dụng và các mẫu truy vấn, có thể thay đổi rắt nhiều. Giám
              sát và điều chỉnh là các quy trình được cá nhân hóa cao mà bạn sở
              hữu cho cơ sở dữ liệu RDS của mình. Bạn có thể sử dụng Amazon RDS
              Performance Insights và các công cụ khác để xác định các truy vấn
              có vấn đề
            </p>
            <p className="font-bold text-[18px]">Amazon RDS DB instance</p>
            <p>
              - Một DB Instance là một môi trường cơ sở dữ liệu bị cô lập trong
              AWS Cloud. Khối xây dựng cơ bản của Amazon RDS là DB Instance.
              Phiên bản DB của bạn có thể chứa một hoặc nhiều cơ sở dữ liệu do
              người dùng tạo. Sơ đồ sau là một virtual private cloud (VPC) chứa
              hai Availability Zones (AZ), với mỗi AZ chứa 2 DB instances
            </p>
            <div className="flex justify-center my-[20px]">
              <Image src={rds_1} alt="rds_1" />
            </div>
            <p>
              - Bạn có thể truy cập DB Instance của mình bằng cách sử dụng cùng
              các công cụ và ứng dụng mà bạn sử dụng với các DB Instance độc
              lập. Bạn có thể tạo và sửa đổi DB Instance bằng cách sử dụng AWS
              Command Line Interface(AWS CLI), Amazon RDS API hoặc AWS Managemet
              Console
            </p>
          </div>
        </div>
      </div>
      <a
        className="text-[#22a6df] italic mb-[20px] inline-block"
        href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
        target="_blank"
      >
        Tìm hiểu thêm về RDS
      </a>
    </Layout>
  );
}

export default RDS;
