import React, { useState } from "react";
import NavBar from "../PosComponents/NavBar";
import { BiSearch } from "react-icons/bi";
import DropDownTow from "../PosComponents/DropDownTow";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import TableHistory from "../PosComponents/TableHistory";
import Footer from "../PosComponents/Footer";

const OnlineHistoryPage = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };
  return (
    <div className="bg-gray-200 h-screen">
      <NavBar />
      <div className=" ">
        <div className="mt-[10px]">
          <div className="pl-4 pb-4">
            <div className="bg-white">
              <div className="p-[15px] shadow-lg ">
                <div className="mb-[15px]">
                  <h1 className=" uppercase text-lg font-extrabold text-[#121053]">
                    online order history
                  </h1>
                </div>
                <div className="flex justify-between">
                  <div className="flex px-2">
                    <button className="bg-[#f64e60] p-2">
                      <BiSearch size={20} className="text-white" />
                    </button>
                    <input
                      className="bg-[#f0f7fb] px-3 py-[0.375rem] text-[#49505] text-[1rem] w-[328.25px] focus:outline-none"
                      type="text"
                      placeholder="Search by token,customer,branch.."
                    />
                  </div>
                  <div>
                    <ul className="flex">
                      <li className="mr-[10px]">
                        <a href="/dashboard/orders">
                          {" "}
                          <button className=" text-xs rounded-sm  uppercase px-2 py-3 text-[#0880ea] bg-[#daedfe] duration-300 hover:text-white hover:bg-[#0880ea]">
                            POS ORDERS
                          </button>
                        </a>
                      </li>
                      <li className="mr-[10px]">
                        <DropDownTow />
                      </li>
                      <li className="mr-[10px]">
                        <div className="container ">
                          <DatePicker
                            selected={fromDate}
                            onChange={handleFromDateChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholderText="From date"
                          />
                        </div>
                      </li>
                      <li className="mr-[10px]">
                        <AiOutlineArrowRight size={28} />
                      </li>
                      <li className="mr-[10px]">
                        <div className="container ">
                          <DatePicker
                            selected={toDate}
                            onChange={handleToDateChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholderText="To date"
                          />
                        </div>
                      </li>
                      <li className="mr-[10px]">
                        <button className=" text-xs rounded-sm  uppercase px-2 py-3 text-[#f5364a] bg-[#fde0e3] duration-300 hover:text-white hover:bg-[#f5364a]">
                          filter
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="pl-[15px]">
                  <div className=" mt-6">
                    <TableHistory />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OnlineHistoryPage;
