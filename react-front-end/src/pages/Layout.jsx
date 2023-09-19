import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="w-full fixed top-0 z-[10000]">
                <NavBar />
            </div>
            <div className="mt-[70px]">
                <Outlet />
            </div>
            <div className="fixed w-full bottom-0">
                <Footer />
            </div>
        </>
    );
};

export default Layout;
