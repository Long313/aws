"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import vpc_az from "../../../../images/vpc_az.drawio.png";

interface PageProps {
  id: string;
}
function VPC({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div className="flex mt-[20px] flex-col items-center">
        <h1 className="text-[#22a6df] font-bold text-[24px]">
          What is Amazon Virtual Private Cloud (VPC) ?
        </h1>
        <div>
          <p>
            - Là một dịch vụ cung cấp môi trường mạng ảo riêng tư được cô lập về
            mặt logic khỏi các mạng khác trên AWS Cloud
          </p>
          <p>
            - VPC cho phép chúng ta khởi tạo các tài nguyên của AWS như máy chủ ảo
            (Amazon EC2), cơ sở dữ liệu (RDS, EFS, S3), các thiết bị cân bằng
            tải (ELB ) trong một môi trường mạng ảo riêng mà chúng ta có quyền
            kiểm soát hoàn toàn
          </p>
          <p>
            - Khái niệm VPC trên AWS hoàn toàn khác biệt với khái niệm về private
            cloud truyền thống. Khái niệm private cloud truyền thống được hiểu
            là các doanh nghiệp họ sẽ xây dựng hệ thống ảo hoá tập trung ở môi
            trường local và on-premise với các tính năng mô phỏng theo các tính
            năng của các nhà cung cấp dịch vụ Cloud lớn (hay còn gọi là
            Hyperscale Cloud Provide) như AWS
          </p>
        </div>
        <div>
          - Amazon Virtual Private Cloud (Amazon VPC) cho phép bạn khởi chạy các
          tài nguyên AWS vào một mạng ảo mà bạn đã xác định
          <p>
            - Ví dụ như ở đây, chúng ta tạo ra một vùng không gian mạng ảo có địa
            chỉ IP là 10.10.0/16
          </p>
          <p>
            - Như vậy các tài nguyên của chúng ta, các máy ảo, cơ sở dữ liệu, các
            thiết bị cân bằng tải của chúng ta sẽ đặt trong lớp mạng ảo này
          </p>
          <p>- Và lớp mạng ảo này nó có mối liên hệ gì với Availability Zone ?</p>
          <div className="flex justify-center my-[10px]">
            <Image src={vpc_az} alt="vpc_za" className="w-2/3 inline-block" />
          </div>
          <p>
            - Đầu tiên chúng ta tạo ra một account AWS có id 12 số là
            3322-4564-7325
          </p>
          <p>
            - Và chúng ta muốn tạo ra các tài nguyên của mình, muốn thuê các tài
            nguyên mà AWS cung cấp. Bản chất của việc sử dụng AWS là mình thuê
            tài nguyên. Không phải mình gửi máy chủ trên AWS, không phải là mình
            mua phần cứng gì cả. Mà mình thuê các tài nguyên mà AWS cho thuê.
          </p>
          <p>
            - Sau khi tạo account, thì mình sẽ lựa chọn Region. Ở đây mình sẽ lựa
            chọn Region Singapore. Lý do mà mình lựa chọn Region này vì muốn
            chạy các tài nguyên, các dịch vụ của AWS trên Region Singapore thì
            mình sẽ ưu tiên độ trễ để phục vụ khách hàng tại Việt Nam. Khi sử
            dụng Region Singapore thì độ trễ khoảng dưới 50ms
          </p>
          <p>
            - Bên dưới Region sẽ có Availability Zone. Tối thiểu một Region sẽ có
            3 Availability Zone (AZ). Tuy nhiên để đơn giản hoá mô hình mình chỉ
            để là 2 AZ.
          </p>
          <p>
            - Virtual Private Cloud sẽ nằm ở đâu? VPC sẽ bao quát nhiều AZ. Ý
            nghĩa của kiến trúc khi vẽ như vậy. Khi mình tạo ra 1 VPC, mình có
            thể chạy các máy chủ ảo của mình, các cơ sở dữ liệu của mình ở trên
            nhiều AZ khác nhau. Và khi triển khai một mô hình kiến trúc Cloud
            mình phải triển khai Multi AZ để đảm bảo độ sẵn sàng cao
          </p>
          <p>
            - Ở môi trường truyền thống, việc mình chạy ứng dụng và dịch vụ trên 2
            trung tâm dữ liệu (AZ là một cụm trung tâm dữ liệu) sẽ giống như
            mình sẽ có 2 DC (Data Center) chính và DR (Desactor Recovery Data
            Center)
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default VPC;
