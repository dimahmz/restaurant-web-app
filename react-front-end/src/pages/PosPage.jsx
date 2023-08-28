import NavBar from "../PosComponents/NavBar";
import Products from "../PosComponents/Products";
import BasketComponent from "../PosComponents/BasketComponent";
import Branch from "../PosComponents/Branch";
import Footer from "../PosComponents/Footer";

const PosPage = () => {
    return (
        <div className=" bg-gray-200 h-full w-full">
            <NavBar />
            <div className=" overflow-scroll">
                <div className="mt-[10px] pl-2 flex mb-[10px]">
                    <Products />
                    <div className="flex">
                        <Branch />
                        <BasketComponent />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default PosPage;
