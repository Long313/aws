import SideBar from "../SideBar/sidebar";

function Layout({ children, id }: { children: any; id: any }) {
  return (
    <div className="flex h-full">
      <div className="w-1/5 h-screen">
        <SideBar id={id} />
      </div>
      <div className="w-4/5 ml-[80px]">{children}</div>
    </div>
  );
}

export default Layout;
