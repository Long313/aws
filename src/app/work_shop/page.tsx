"use client";
import Header from "@/components/Header/page";
import work_shop from "../../images/work_shop.drawio.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Blog() {
    const router = useRouter();
  return (
    <div>
      <Header />
      <div className="mt-[60px] w-full text-center">
        <h1 className="text-[30px]">Welcome to my workshop!</h1>
        <div className="w-full flex justify-center">
          <div className="flex items-center justify-center flex-col w-[600px] border-[2px] rounded-[5px] h-[450px] transform scale-90 hover:scale-100 transition-transform duration-300 shadow-2xl" onClick={() => router.push("/blog/work_shop/1")}>
            <h2 className="">Workshop 1 - High Availability Architecture</h2>
            <Image
              src={work_shop}
              alt="work_shop_1"
              className="w-[90%] h-[90%] cursor-pointer p-[10px]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
