'use client';
import Layout from "@/components/Layout/page";``

interface PageProps {
    id: string;
}
function InternetGateway({params} : {params : PageProps}) {

  return (<Layout id ={params.id}>
     internet gateway
  </Layout>)
}

export default InternetGateway;
