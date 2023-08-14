import React, { useState } from "react";
import CountDiscout from "./CountDiscout";
import { BiSolidCalculator } from "react-icons/bi";
import Calculator from "./Calculator";

const BasketComponent = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" relative pl-[10px] bg-white w-[480px] h-[611.2px] ">
      {nav ? (
        <div className="absolute right-[100%] top-[50%]">
          <Calculator />
        </div>
      ) : (
        <div></div>
      )}
      <div className="p-4 h-full">
        <div className="w-[100%] h-[100%]">
          <div className="flex justify-end">
            <span
              className="font-bold
             text-sm "
            >
              ORDER TOKEN:
            </span>
          </div>
          <div className="mt-[10px]">
            <div className="h-[353.8px]">
              <table className="w-full">
                <thead className="bg-[#f4f9fc] border-solid border-[1px] border-[#dee2e6] text-sm">
                  <tr>
                    <th className=" border-r-2 py-[5px]">S/L</th>
                    <th className=" border-r-2 py-[5px]">Food item</th>
                    <th className=" border-r-2 py-[5px]">QTY</th>
                    <th className=" border-r-2 py-[5px]">Price</th>
                  </tr>
                </thead>
              </table>
              <div className="  h-[321.1px] ">
                <div className=" pt-12">
                  <div className="flex font-bold text-[12px] justify-center uppercase text-[#cc3333]">
                    Select food item to add to the list
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[10px]">
            <div>
              <div className="flex">
                <div className="w-[50%] flex  bg-[#f4f9fc] border text-[12px] font-bold">
                  <div className=" w-[50%] flex justify-center  ">
                    <span className=" py-[5px]">Sub Total</span>
                  </div>
                  <div className=" w-[50%] flex  justify-center">
                    <span className="py-[5px]">0.00DH</span>
                  </div>
                </div>
                <div className="w-[50%] flex  bg-[#f4f9fc] border text-[12px] font-bold">
                  <div className=" w-[50%] flex justify-center  ">
                    <span className=" py-[5px]">cgst+sgst(5+5)%:</span>
                  </div>
                  <div className=" w-[50%] flex  justify-center">
                    <span className="py-[5px]">0.00DH</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end bg-[#f4f9fc] border text-[12px] font-bold">
                <div className="pr-[50px]">
                  <div className="py-[5px]">
                    <span>Department Tag Commission : </span>
                    <span>0.00DH</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-[50%] flex bg-[#f4f9fc] border text-[12px] font-bold">
                  <div className=" w-[50%] flex justify-center">
                    <span className=" py-[5px]">Service Charge</span>
                  </div>
                  <div className=" w-[50%] bg-white border flex  justify-center">
                    <CountDiscout />
                  </div>
                </div>
                <div className="w-[50%] flex  bg-[#f4f9fc] border text-[12px] font-bold">
                  <div className=" w-[50%] flex justify-center  ">
                    <span className=" py-[5px]">Discount</span>
                  </div>
                  <div className=" w-[50%] bg-white border flex  justify-center">
                    <CountDiscout />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="px-[10px] bg-[#f64e60] flex justify-between">
                <div className="pt-2 pb-[10px] text-white font-bold">
                  <span>Total Bill</span>
                </div>
                <div className="pt-2 pb-[10px] text-white font-bold">
                  <span>0.00DH</span>
                </div>
              </div>
            </div>
            <div className="mt-[10px] flex justify-between">
              <div>
                <button
                  onClick={() => setNav(!nav)}
                  className="bg-[#09c2de] text-white p-2 cursor-pointer hover:bg-[#11a7be] duration-300"
                >
                  <BiSolidCalculator size={30} />
                </button>
              </div>
              <div>
                <button className="mr-2 text-white px-4 py-2 font-bold bg-[#f64e60] rounded-[2px] ">
                  SETTLE
                </button>
                <button className=" text-white px-4 py-2 font-bold bg-[#0dd19d] rounded-[2px] ">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketComponent;
