import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const headerHeight = 50,
    footerHeight = 50,
    totalHeight = headerHeight + footerHeight;

  const mainContentHeight = `calc(100% - ${totalHeight}px)`;

  return (
    <div className="relative bg-gray-200">
      <header
        className={`w-full fixed top-0 z-[1000] h-${[headerHeight]} shadow-lg`}
      >
        <NavBar />
      </header>

      <main className="w-screen h-screen flex-center ">
        <div
          style={{
            height: mainContentHeight,
            marginTop: `${headerHeight}px`,
            marginBottom: `${footerHeight}px`,
          }}
          className={`relative py-3 overflow-auto w-full max-w-[1520px] mx-auto`}
        >
          <div className="relative w-full h-full overflow-auto">
            <Outlet />
          </div>
        </div>
      </main>
      <footer
        className={`fixed w-full bottom-0 bg-white h-${[footerHeight]}px`}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
