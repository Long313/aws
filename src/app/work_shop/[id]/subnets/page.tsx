'use client';
import Layout from "@/components/Layout/page";``

interface PageProps {
    id: string;
}
function Subnets({params} : {params : PageProps}) {
  return (<Layout id ={params.id}>
     subnets
  </Layout>)
}

export default Subnets;
