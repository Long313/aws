import useStore from "@/app/store/store";
import SideBar from "../SideBar/page";
import { useEffect, useState } from "react";

function Layout({ children, id }: { children: any; id: any }) {
  const mode = useStore((state) => state.mode)
  const [isMode, setIsMode] = useState<boolean>(mode);
  useEffect(() => {
    console.log("mode", mode)
    setIsMode(mode)
  },[mode])
  return (
    <div className={`flex h-full ${isMode ? 'bg-[#000] text-white': 'bg-[#fff] text-black'}`}>
      <div className="h-screen">
        <SideBar id={id} />
      </div>
      <div className="ml-[300px] items-center flex-col w-full">
        <div className="mx-[40px]">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
