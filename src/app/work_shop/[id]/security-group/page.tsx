"use client";
import Layout from "@/components/Layout/page";
import Image from "next/image";
import { useState } from "react";
import security_1 from "../../../../images/security_1.png";
import example_security_group from "../../../../images/example_security_group.png";

interface PageProps {
  id: string;
}
function SecurityGroup({ params }: { params: PageProps }) {
  return (
    <Layout id={params.id}>
      <div>
        <h1 className="my-[20px] text-[#22a6df] text-[24px] font-bold text-center">
          Kiểm soát lưu lượng truy cập đến tài nguyên AWS của bạn bằng Security
          Group
        </h1>
        <div>
          <p>
            - Security Group kiểm soát lưu lượng truy cập (traffic) được phép
            truy cập và thoát khỏi tài nguyên mà nó liên kết. Ví dụ: sau khi bạn
            liên kết Security Group với EC2 Instance, Security Group sẽ kiểm
            soát lưu lượng truy cập đến và đi cho Instance đó.
          </p>
          <p>
            - Khi bạn tạo VPC, VPC này sẽ di kèm với một Security mặc định. Bạn
            có thể tạo thêm các Security Group cho VPC, mỗi nhóm có các quy tắc
            đến và đi riêng. Bạn có thể chỉ định nguồn (destination), phạm vị
            cổng (port range) và giao thức (protocol) cho mỗi quy tắc đến
            (inbound rule). Và cũng có thể chỉ định đích, phạm vi cổng và giao
            thức cho mỗi quy tắc đi
          </p>
          <p>
            - Sơ đồ sau đây hiển thị VPC có mạng con (subnet), cổng internet
            (internet gateway) và một security group. Mạng con chứa EC2
            Instance. Security Group hoạt động như tường lửa ảo. Lưu lượng truy
            cập duy nhất đến instance là lưu lượng được các security group rule
            cho phép. Ví dụ: nếu Security Group chứa quy tắc cho phép lưu lượng
            truy cập ICMP đến instance từ mạng của bạn, thì bạn có thể ping
            instance đó từ máy tính của mình. Nếu Security Group không chứa các
            rule cho phép lưu lượng SSH, thì bạn không thể kết nối với instance
            của mình bằng SSH.
          </p>
          <div className="flex justify-center">
            <Image src={security_1} alt="security-group" />
          </div>
          <p className="font-bold text-[18px]">
            Một số kiến thức cơ bản về Security Group
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              Giữa tài nguyên và Security Group là mối quan hệ một - nhiều. Tức
              là bạn chỉ có thể chỉ định 1 Security Group cho các tài nguyên
              được tạo trong cùng VPC với Security Group đó. Và bạn có thể chỉ
              định nhiều Security Group cho 1 tài nguyên.
            </li>
            <li>
              Khi bạn tạo một Security Group, bạn phải cung cấp cho nhóm đo một
              tên và mô tả
            </li>
            <li>
              Security Group là statefull. Ví dụ, nếu bạn gửi yêu cầu từ một
              instance, traffic phản hồi cho yêu cầu đó được phép đến instance
              bất kể các quy tắc đến (inbound rules). Các phản hồi cho lưu lượng
              đến (inbound rules) được phép rời khỏi instance, bất kể các quy
              tắc đi (outbound rules)
            </li>
            <li>
              Các nhóm bảo mật không lọc lưu lượng đến và đi các mục sau: Amazon
              Domain Name Service(DNS), Amazon Dynamic Host Configuration
              Protocol (DHCP), Amazon EC2 instance metadata, Amazon EC2 task
              metadata endpoints, License activation for Windows instances,
              Amazon Time Sync Service
            </li>
          </ul>
          <div className="rounded-[4px] overflow-hidden max-w-full my-[10px] mx-auto mb-[20px]">
            <div className="bg-[#6AB0DE] flex items-center justify-start p-[10px]">
              <span className="text-[16px] p-[4px] flex justify-center items-center text-[#6AB0DE] bg-white w-[20px] h-[20px] rounded-full border border-[white]">
                &#33;
              </span>
              <span className="text-white inline-block ml-[10px] font-bold text-[18px]">
                Lưu ý
              </span>
            </div>
            <div className="bg-[#E7F2FA] p-[10px]">
              <p>
                - Nên tạo số lượng Security Group tối thiểu mà bạn cần để giảm
                nguy cơ xảy ra lỗi. Sử dụng từng Security Group để quản lý quyền
                truy cập vào các tài nguyên có chức năng và yêu cầu bảo mật
                tương tự.
              </p>
              <p>
                - Khi bạn thêm các quy tắc đến cho cổng 22 (SSH) hoặc 3389 (RDP)
                để bạn có thể truy cập vào các EC2 instance của mình, hãy chỉ
                cho phép các phạm vi địa chỉ IP cụ thể. Nếu bạn chỉ định
                0.0.0.0/0 (IPv4) và ::/(IPv6), điều này cho phép bất kỳ ai truy
                cập vào các instance của bạn từ bất kỳ địa chỉ IP nào bằng giao
                thức đã chỉ định.
              </p>
              <p>
                - Không mở các phạm vi cổng lớn (port range). Đảm bảo rằng quyền
                truy cập qua mỗi cổng bị hạn chế đối với các nguồn hoặc đích yêu
                cầu quyền đó{" "}
              </p>
              <p>
                - Hãy cân nhắc tạo network ACLs với các quy tắc tương tự như
                Security Group của bạn để thêm một lớp bảo mật bổ sung vào VPC
                của bạn. Xem thêm về{" "}
                <a
                  className="italic text-[#22a6df]"
                  href="https://docs.aws.amazon.com/vpc/latest/userguide/infrastructure-security.html#VPC_Security_Comparison"
                  target="_blank"
                >
                  so sánh giữa Security Group và network ACLs
                </a>
              </p>
            </div>
            <p className="font-bold text-[18px] mt-[20px]">
              Ví dụ về Security Group
            </p>
            <div className="flex justify-center my-[20px]">
              <Image
                src={example_security_group}
                alt="example-security-group"
              />
            </div>
            <ul className="list-disc ml-[20px]">
              <li>
                Inbound rule đầu tiên trong Security Group 1 cho phép lưu lượng
                SSH đến các instance trong mạng con A từ phạm vi địa chỉ được
                chỉ định (ví dụ: phạm vi trong mạng con của riêng bạn)
              </li>
              <li>
                Inbound rule thứ 2 trong Security Group 1 cho phép các instance
                trong mạng con A giao tiếp với nhau bằng bất kỳ giao thức và
                cổng nào
              </li>
              <li>
                Inbound rule đầu tiên trong Security Group 2 cho phép các
                instance trong mạng con B giao tiếp với nhau bằng bất kỳ giao
                thức và cổng nào
              </li>
              <li>
                Inbound rule thứ 2 trong Security Group 2 cho phép các instance
                trong mạng con A giao tiếp với các instance trong mạng con B
                bằng SSH
              </li>
              <li>
                Cả 2 Security Group đều sử dụng quy tắc ra mặc định, cho phép
                tất cả lưu lượng
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a
        className="text-[#22a6df] italic inline-block my-[20px]"
        href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html"
        target="_blank"
      >
        Tìm hiểu thêm về Security Group
      </a>
    </Layout>
  );
}

export default SecurityGroup;
