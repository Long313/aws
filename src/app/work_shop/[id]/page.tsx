'use client';
import Layout from "@/components/Layout/page";
import useBearStore from '../../store/store';
import { useEffect } from "react";

interface PageProps {
      id: string;
}
function WorkShopOne({params} : {params : PageProps}) {
  const {setId} = useBearStore();
  useEffect(() => {
    setId(Number(params.id));
  }, [params.id, setId]);
  return (<Layout id={params.id}>
     abc
  </Layout>)
}

export default WorkShopOne;
