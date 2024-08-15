import SideBar from "../SideBar/sidebar";

function Layout({children} : {children : any}) {
    return ( <div className="flex h-full">
        <div className="w-1/5 h-screen">
        <SideBar/>
        </div>
        <div className="w-4/5">
        {children}
        </div>
    </div> );
}

export default Layout;