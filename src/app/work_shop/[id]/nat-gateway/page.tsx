'use client';
import Layout from "@/components/Layout/page";``

interface PageProps {
    id: string;
}
function NateGateway({params} : {params : PageProps}) {

  return (<Layout id ={params.id}>
     <div>
        <div className="items-center">
          <h1 className="text-center font-bold my-[20px] text-[20px] text-[#22a6df]">
            What is Route Table ?
          </h1>
          
          <a
            href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html"
            target="_blank"
            className="inline-block my-[40px] italic text-[#22a6df]"
          >
            Tìm hiểu thêm về Route Table
          </a>
        </div>
      </div>
  </Layout>)
}

export default NateGateway;
