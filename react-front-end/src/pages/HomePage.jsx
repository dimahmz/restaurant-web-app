import HeaderHome from "../components/HeaderHome";
import ShopBasketHome from "../components/ShopBasketHome";
import MenuHome from "../components/MenuHome";
import SoonHome from "../components/SoonHome";
import FooterHome from "../components/FooterHome";

const HomePage = () => {
    return (
        <div>
            <HeaderHome />
            <MenuHome />
            <SoonHome />
            <FooterHome />
            <ShopBasketHome />
        </div>
    );
};

export default HomePage;
