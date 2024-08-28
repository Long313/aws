"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import ec2_1 from "../../../../images/ec2_1.png";

interface PageProps {
  id: string;
}
function EC2({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div>
        <h1 className="text-[#22a6df] font-bold text-[24px] my-[20px] text-center">
          What is Amazon Compute Cloud (Amazon EC2) and Auto Scaling Group ?
        </h1>
        <div>
          <p className="font-bold text-[#22a6df] text-[16px]">EC2</p>
          <p>
            - Amazon Elastic Compute Cloud (Amazon EC2) cung cấp khả năng tính
            toán theo yêu cầu, có thể mở rộng trong Amazon Web Services (AWS)
            Cloud
          </p>
          <p>
            - Sử dụng Amazon EC2 giúp giảm chi phí phần cứng đê bạn có thể phát
            triển và triển khai ứng dụng nhanh hơn. Bạn có thể sử dụng Amazon
            EC2 để khởi chạy nhiều hoặc ít máy chủ ảo tùy theo nhu cầu, cấu hình
            bảo mật và mạng cũng như quản lý lưu trữ. Bạn có thể thêm dung lượng
            (mở rộng quy mô) để xử lý các tác vụ tính toán nặng, chẳng hạn như
            quy trình hằng tháng, hằng năm hoặc lưu lượng truy cập trang web
            tăng đột biến. Khi lưu lượng truy cập giảm, bạn có thể giảm capacity
            (giảm sự mở rộng)
          </p>
          <p>
            - Một EC2 instance là máy chủ ảo trong AWS Cloud. Khi bạn khởi chạy
            một EC2 instance, loại instance mà bạn chỉ định sẽ xác định phần
            cứng khả dụng cho EC2 instance của bạn
          </p>
          <p>
            - Mỗi kiểu instance cung cấp sự cân bằng khác nhau giữa tài nguyên
            tính toán, bộ nhớ, mạng và lưu trữ
          </p>
          <div className="flex justify-center">
            <Image src={ec2_1} alt="ec2" />
          </div>
        </div>
        <div>
          <p className="font-bold text-[#22a6df] text-[16px]">
            Auto Scaling Group
          </p>
          <p>
            - Một Auto Scaling Group là một tập hợp các EC2 instance mà được tập
            hợp lại với nhau về mặt logic cho mục đích tự động mở rộng và quản
            lý. Auto Scaling Group cũng cho phép bạn sử dụng các tính năng
            Amazon EC2 Auto Scaling như thay thế kiểm tra tình trạng (health
            check) và chính sách mở rộng ( scaling policies). Duy trì số lượng
            các instances trong một Auto Scaling group và tự động mở rộng là
            chức năng cốt lõi của dịch vụ Amazon EC2 Auto Scaling.
          </p>
          <p>
            - Kích thước của một Auto Scaling group phụ thuộc vào số lượng
            instance mong muốn mà bạn đã đặt. Bạn có thể diều chỉnh kích thước
            của ASG để đáp ứng nhu cầu, theo cách thủ công hoặc bằng cách sử
            dụng tính năng mở rộng tự động
          </p>
          <p>
            - Một Auto Scaling Group bắt đầu bằng cách khởi chạy đủ phiên bản để
            đáp ứng capacity mong muốn. ASG duy trì số lượng instance bằng cách
            thực hiện health checks định kỳ trên những instance trong ASG
          </p>
          <p>
            - Auto Scaling Group tiếp tục duy trì một số lượng instances cố định
            ngay cả khi một instance trở nên không ổn định, ASG sẽ terminates
            instance không ổn định đó và khởi chạy instance khác để thay thế.
            <a
              className="text-[#22a6df] italic"
              href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-health-checks.html"
              target="_blank"
            >
              &nbsp;Xem thêm về Health checks cho instance trong một Auto
              Scaling Group
            </a>
          </p>
          <p>
            - Bạn có thể sử dụng scaling policies để tăng hoặc giảm số lượng
            instance trong Group của bạn một cách linh hoạt để đáp ứng các điều
            kiện thay đổi. Khi scaling policies co hiệu lực, Auto Scaling Group
            sẽ điều chỉnh capacity mong muốn của Group, giữa các giá trị minimum
            capacity (sức chứa tối thiểu) và maximum capaticy (sức chứa tối đa)
            mà bạn chỉ định, đồng thời khởi chạy hoặc chấm dứt (terminates) các
            instance khi cần. Bạn cũng có thể mở rộng quy mô (scale) theo lịch
            cụ thể.
            <a
              className="text-[#22a6df] italic"
              href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/scaling-overview.html"
              target="_blank"
            >
              &nbsp;Xem thêm về Chọn phương pháp mở rộng quy mô của bạn
            </a>
          </p>
          <p>
            Khi tạo một Auto Scaling Group, bạn có thể chọn khởi chạy On-Demand
            Instances, Spot Instance hoặc cả. Bạn có thể chỉ định nhiều tùy chọn
            cho Auto Scaling Group khi sử dụng template khởi chạy
          </p>
          <p>
            - Spot Instances cung cấp cho bạn quyền truy cập vào dung lượng EC2
            chưa sử dụng với mức chiết khấu lớn so với giá theo yêu cầu. Để biết
            thêm thông tin, hãy xem{" "}
            <a
              className="text-[#22a6df]"
              href="https://aws.amazon.com/ec2/spot/pricing/"
              target="_blank"
            >
              Amazon EC2 Spot Instance
            </a>
            . Có những điểm khác biệt chính giữa Spot Instances và On-Demand
            Instances:
          </p>
          <p>+ Giá của Spot Instances thay đổi tùy theo yêu cầu</p>
          <p>
            + Amazon EC2 có thể terminates một Spot Instance riêng lẻ khi tính
            khả dụng hoặc giá của Spot Instances thay đổi
          </p>
          <p>
            + Khi một Spot Instance bị terminates, Auco Scaling Group sẽ cố gắng
            khởi chạy một instance thay thế để duy trì số lượng mong muốn cho
            nhóm
          </p>
          <p>
            Khi các instance được khởi chạy (launched), nếu bạn chỉ định nhiều
            AZ (Availability Zones), dung lượng (capacity) mong muốn sẽ được
            phân phối trên các AZ. Nếu hành động mở rộng quy mô xảy ra, Amazon
            EC2 Auto Scaling sẽ tự động duy trì sự cân bằng trên tất cả các AZ
            mà bạn chỉ định
          </p>
        </div>
      </div>
      <p className="font-bold mt-[20px]">Xem thêm</p>
      <ul className="list-disc ml-[20px] text-[#22a6df] italic mb-[20px]">
        <li>
          <a
            href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html"
            target="_blank"
          >
            EC2
          </a>
        </li>
        <li>
          <a
            href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html"
            target="_blank"
          >
            EC2 Auto Scaling Group
          </a>
        </li>
      </ul>
    </Layout>
  );
}

export default EC2;
