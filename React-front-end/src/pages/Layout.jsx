import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative overflow-y-hidden">
      <header className="w-full fixed top-0 z-[1000] shadow-lg">
        <NavBar />
      </header>
      <main className="mt-[60px]">
        <Outlet />
      </main>
      <footer className="fixed w-full bottom-0 ">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
