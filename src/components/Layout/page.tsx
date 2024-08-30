import SideBar from "../SideBar/sidebar";

function Layout({ children, id }: { children: any; id: any }) {
  return (
    <div className="flex h-full">
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
