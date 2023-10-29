import { useEffect, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import HeroSection from "./HeroSection";
import SideBarOrder from "./SideBarOrder";
import { Group } from "../../APIs/Food";
import { Branch } from "../../APIs/Restaurant";
import { MenuProvider } from "./MenuProvider";
import { CircularProgress } from "@mui/material";
import Snackbar from "../../components/snackBar";
import { useSelector } from "react-redux";

const MenuHome = () => {
  // images host
  const imgUrl = new URL(import.meta.env.VITE_APP_IMAGES_HOST).href;

  const [foodGroups, setFoodGroups] = useState([]);
  const [branches, setBranches] = useState([]);

  const [selectedFoodGroup, setSelectedFoodGroup] = useState([]);
  const [selectedFood, setSelectedFood] = useState({});

  const isUserLoggedIn = useSelector(
    (state) => state.user.userProfile.isLoggedIn
  );
  const [response, setResponse] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  function AddFoodToBasket(item) {
    console.log(isUserLoggedIn);
    if (!isUserLoggedIn) {
      setResponse({
        open: true,
        message: "You must log in before placing an order",
        severity: "error",
      });
    } else {
      setSelectedFood(item);
    }
  }

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFoods() {
      setLoading(true);
      const response = await Group.getGroupFood();
      if (response.success) {
        setFoodGroups(response.payload);
      }
      setLoading(false);
    }

    async function fetchBranches() {
      const response = await Branch.get();
      if (response.success) {
        setBranches(response.payload);
      }
    }
    fetchFoods();
    fetchBranches();
  }, []);

  return (
    <MenuProvider>
      <SideBarOrder selectedFood={selectedFood} branches={branches} />
      <Snackbar
        message={response.message}
        open={response.open}
        severity={response.severity}
        handleClose={() => setResponse((prev) => ({ ...prev, open: false }))}
        sx={{
          fontSize: "16px",
          height: "60px",
        }}
      />

      <HeroSection />
      <div id="popular" className="w-full bg-white relative">
        <div className="max-w-[1140px] m-auto px-4 bg-white">
          <h2 className="text-[#cc3333] font-serif text-center text-3xl">
            Food Items
          </h2>
          <h1 className="text-[#2a435d] font-bold text-4xl text-center">
            Popular <span className="text-[#cc3333]">Menu</span>
          </h1>
          {isLoading ? (
            <div className="w-full h-64 flex justify-center mt-28 z-[1000000] backdrop-blur-sm bg-white/0">
              <CircularProgress color="primary" />
            </div>
          ) : foodGroups.length == 0 ? (
            <div className="text-red-800 text-2xl my-24 font-medium text-center bg-white">
              Error while trying to load Popular Menu. please refresh page or
              try again later
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center items-center p-4 mt-2">
                {foodGroups.map((food, index) => (
                  <a key={index} href="#Selected_Food">
                    <button
                      className="hover:bg-[#cc3333] hover:text-white hover:bg-[url('https://khadyo.softtechdemo.com/website/images/shapes/14.png')] duration-300 font-bold border rounded border-solid w-[150px] h-[150px] p-4 m-4"
                      onClick={() => {
                        setSelectedFoodGroup(food.foods);
                      }}
                    >
                      {food.name}
                    </button>
                  </a>
                ))}
              </div>
            </div>
          )}
          {/* Selected Food Group */}
          <div id="Selected_Food" className="mt-4 p-4 px-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {selectedFoodGroup.map((food, index) => (
                <div
                  key={index}
                  className="flex py-6  px-4 space-x-8 border-2 rounded hover:shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => {
                    AddFoodToBasket(food);
                  }}
                >
                  <div className="flex-center">
                    <img
                      className="rounded-full w-[100px] h-[100px]"
                      src={`${imgUrl}/${food.image}`}
                      alt={food.name}
                    />
                  </div>
                  <div className="flex-column space-y-5 ">
                    <h1 className="text-[#2a435d] hover:text-[#cc3333] text-[30px] ">
                      {food.name}
                    </h1>
                    <h2 className="text-[#2a435d] text-lg font-bold">
                      {food.price} DH
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Special Food */}
          <div id="special" className="relative bg-white ">
            <div className="max-w-[1140px] m-auto px-4 py-28">
              <h1 className="text-[#2a435d]  text-5xl text-center font-extrabold">
                Explore Our
                <span className="text-[#cc3333]">Special Menu</span>
              </h1>
              <div className="max-w-[1000px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto gap-x-12 gap-y-6 px-8 mt-16">
                {foodGroups.map((foodGroup) =>
                  foodGroup.foods.map(
                    (food, index) =>
                      food.is_special === 1 && (
                        <div
                          key={index}
                          className="shadow-xl flex-column py-12 px-6 text-center rounded-lg hover:scale-105 duration-300"
                          onClick={() => {
                            AddFoodToBasket(food);
                          }}
                        >
                          <div className="relative">
                            <img
                              src={`${imgUrl}/${food.image}`}
                              alt={food.name}
                              className="block w-full h-full object-cover rounded-lg "
                            />
                            <button className="absolute text-white bg-[#cc3333] top-[10%] px-4 py-2 z-50 right-0">
                              <FaBasketShopping size={20} className="" />
                            </button>
                          </div>
                          <h1 className="text-center text-sm text-white">
                            <span className="bg-[#cc3333] inline-block rounded-md px-2 my-4 ">
                              special
                            </span>
                          </h1>
                          <h2 className="font-bold text-2xl">{food.name}</h2>
                        </div>
                      )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MenuProvider>
  );
};

export default MenuHome;
