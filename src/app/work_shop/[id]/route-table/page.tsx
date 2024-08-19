'use client';
import Layout from "@/components/Layout/page";``

interface PageProps {
    id: string;
}
function RouteTable({params} : {params : PageProps}) {

  return (<Layout id ={params.id}>
     router table
  </Layout>)
}

export default RouteTable;
