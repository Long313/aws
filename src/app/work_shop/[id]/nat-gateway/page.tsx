'use client';
import Layout from "@/components/Layout/page";``

interface PageProps {
    id: string;
}
function NateGateway({params} : {params : PageProps}) {

  return (<Layout id ={params.id}>
     nat gateway
  </Layout>)
}

export default NateGateway;
