import React, { useState } from "react";
import CountDiscout from "./CountDiscout";
import { BiSolidCalculator } from "react-icons/bi";
import Calculator from "./Calculator";
import { FaTrash } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import TicketComponent from "./TicketComponent";
const BasketComponent = () => {
    const [nav, setNav] = useState(false);
    const [serviceCharge, setServiceCharge] = useState(0.0);
    const [discount, setDiscount] = useState(0.0);
    const [showTicket, setShowTicket] = useState(false);

    const initialItems = [
        { id: 1, name: "Pizza", qty: 1, price: 10 },
        { id: 2, name: "Burger", qty: 1, price: 12 },
        // Add more items here if needed
    ];

    const handleSubmit = () => {
        setShowTicket(true);
        // Trigger the print dialog
    };
     
    const [items, setItems] = useState(initialItems);

    const calculateTotalBill = () => {
        // Calculate the total price of all items
        const totalItemsPrice = items.reduce(
            (total, item) => total + item.price * item.qty,
            0
        );

        // Calculate the total GST for items in the tbody
        const totalGST = items.reduce(
            (total, item) => total + item.price * item.qty * 0.1, // Assuming a GST rate of 10%
            0
        );

        // Calculate the final total bill
        const totalBill = totalItemsPrice + totalGST + serviceCharge - discount;

        return totalBill.toFixed(2); // Assuming you want to round the total to two decimal places
    };

    const updateQty = (index, newQty) => {
        const updatedItems = [...items];
        updatedItems[index].qty = newQty;
        setItems(updatedItems);
    };

    const removeItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div className=" relative pl-[10px] bg-white w-[480px] h-[611.2px] ">
            {nav ? (
                <div className="absolute right-[70%] top-[50%]">
                    <Calculator />
                </div>
            ) : (
                <div></div>
            )}
            <div className="p-4 h-full">
                <div className="w-[100%] h-[100%]">
                    <div className="flex justify-end">
                        <span className="font-bold text-sm">ORDER TOKEN:</span>
                    </div>
                    <div className="mt-[10px]">
                        <div className="h-[353.8px]">
                            <table className="w-full">
                                <thead className="bg-[#f4f9fc] border-solid border-[1px] border-[#dee2e6] text-sm">
                                    <tr>
                                        <th className="border-r-2 py-[5px]">
                                            S/L
                                        </th>
                                        <th className="border-r-2 py-[5px]">
                                            Food item
                                        </th>
                                        <th className="border-r-2 py-[5px]">
                                            QTY
                                        </th>
                                        <th className="border-r-2 py-[5px]">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="text-center text-red-700 p-6 text-sm font-bold"
                                            >
                                                Select food item to add to the
                                                list
                                            </td>
                                        </tr>
                                    ) : (
                                        items.map((item, index) => (
                                            <tr
                                                key={item.id}
                                                className="border bg-[#f64e60] text-white font-bold text-sm"
                                            >
                                                <td className="border-r-2 py-[5px] text-center">
                                                    {index + 1}
                                                </td>
                                                <td className="border-r-2 py-[5px] flex flex-col ml-2">
                                                    <div className="flex justify-end">
                                                        <button
                                                            onClick={() =>
                                                                removeItem(
                                                                    index
                                                                )
                                                            }
                                                            className=" w-6 mr-2 flex  bg-[#158df7]  rounded p-1 "
                                                        >
                                                            <FaTrash
                                                                size={15}
                                                            />
                                                        </button>
                                                    </div>
                                                    {item.name}
                                                    <div className="flex flex-col mt-2">
                                                        <span>
                                                            Variations:{" "}
                                                            <span className="text-black text-xs bg-[#f4bd0e] rounded-full px-2 py-[2px]">
                                                                large
                                                            </span>
                                                        </span>
                                                        <span>
                                                            Spice Level:{" "}
                                                            <span className="text-black text-xs bg-[#f4bd0e] rounded-full px-2 py-[2px]">
                                                                Mild
                                                            </span>
                                                        </span>
                                                        <span>
                                                            Variations:{" "}
                                                            <span className="text-black text-xs bg-[#f4bd0e] rounded-full px-2 py-[2px]">
                                                                large
                                                            </span>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="border-r-2 py-[5px] ">
                                                    <div className="flex justify-between mx-2">
                                                        <button
                                                            onClick={() =>
                                                                updateQty(
                                                                    index,
                                                                    item.qty - 1
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        {item.qty}
                                                        <button
                                                            onClick={() =>
                                                                updateQty(
                                                                    index,
                                                                    item.qty + 1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="border-r-2 py-[5px] text-center">
                                                    {item.price * item.qty} DH
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-[10px]">
                        <div>
                            <div className="flex">
                                <div className="w-[50%] flex  bg-[#f4f9fc] border text-[12px] font-bold">
                                    <div className=" w-[50%] flex justify-center  ">
                                        <span className=" py-[5px]">
                                            Sub Total
                                        </span>
                                    </div>
                                    <div className=" w-[50%] flex  justify-center">
                                        <span className="py-[5px]">
                                            {items
                                                .reduce(
                                                    (total, item) =>
                                                        total +
                                                        item.price * item.qty,
                                                    0
                                                )
                                                .toFixed(2)}
                                            DH
                                        </span>
                                    </div>
                                </div>
                                <div className="w-[50%] flex  bg-[#f4f9fc] border text-[12px] font-bold">
                                    <div className=" w-[50%] flex justify-center  ">
                                        <span className=" py-[5px]">
                                            cgst+sgst(5+5)%:
                                        </span>
                                    </div>
                                    <div className=" w-[50%] flex  justify-center">
                                        <span className="py-[5px]">
                                            {items
                                                .reduce(
                                                    (total, item) =>
                                                        total +
                                                        item.price *
                                                            item.qty *
                                                            0.1, // Assuming a GST rate of 10%
                                                    0
                                                )
                                                .toFixed(2)}{" "}
                                            DH
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end bg-[#f4f9fc] border text-[12px] font-bold">
                                <div className="pr-[50px]">
                                    <div className="py-[5px]">
                                        <span>
                                            Department Tag Commission :{" "}
                                        </span>
                                        <span>0.00DH</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-[50%] flex bg-[#f4f9fc] border text-[12px] font-bold">
                                    <div className=" w-[50%] flex justify-center">
                                        <span className=" py-[5px]">
                                            Service Charge
                                        </span>
                                    </div>
                                    <div className=" w-[50%] bg-white border flex  justify-center">
                                        <CountDiscout
                                            count={serviceCharge}
                                            setCount={setServiceCharge}
                                        />
                                    </div>
                                </div>
                                <div className="w-[50%] flex  bg-[#f4f9fc] border text-[12px] font-bold">
                                    <div className=" w-[50%] flex justify-center  ">
                                        <span className=" py-[5px]">
                                            Discount
                                        </span>
                                    </div>
                                    <div className=" w-[50%] bg-white border flex  justify-center">
                                        <CountDiscout
                                            count={discount}
                                            setCount={setDiscount}
                                        />
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
                                    <span>{calculateTotalBill()} DH</span>
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
                                <button
                                    onClick={handleSubmit}
                                    className=" text-white px-4 py-2 font-bold bg-[#0dd19d] rounded-[2px] "
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showTicket && (
                <div className="print-only absolute top-0">
                    <TicketComponent
                        items={items}
                        totalBill={calculateTotalBill()}
                    />
                </div>
            )}
        </div>
    );
};

export default BasketComponent;
