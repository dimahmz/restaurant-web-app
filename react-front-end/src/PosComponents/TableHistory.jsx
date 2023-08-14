import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import data from "./testdata.json";
import Ticket from "./Ticket";
import Notification from "./Notification";
import { MdLocalPrintshop } from "react-icons/md";
const TableHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = Array.from({ length: npage }, (_, i) => i + 1);
  const ticketRef = useRef(null);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);

  function nextPage() {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function prePage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  return (
    <div>
      <div className="w-[1505px] h-[407.2px] overflow-scroll">
        <table className="w-full table-auto ">
          <thead className="border ">
            <tr>
              <th className=" p-2  border-r-2 text-sm text-center">S/L</th>
              <th className="p-2 border-r-2 text-sm text-center">Token</th>
              <th className="p-2 border-r-2 text-sm text-center ">Date</th>
              <th className="p-2 border-r-2 text-sm text-center">Customer</th>
              <th className="p-2 border-r-2 text-sm text-center">Total Bill</th>
              <th className="p-2 border-r-2 text-sm text-center">Branch</th>
              <th className="p-2 border-r-2 text-sm text-center">Status</th>
              <th className="p-2 border-r-2 text-sm text-center">Print</th>
              <th className="p-2 border-r-2 text-sm text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr className="border " key={i}>
                <td className=" text-xs text-capitalize align-middle text-center font-bold px-2 py-4 border-r-2">
                  {d.id}
                </td>
                <td className="px-2 py-4 text-blue-500  border-r-2 text-xs text-center">
                  {d.token}
                </td>
                <td className="p-2 border-r-2 text-xs text-center">
                  {d.datetime}
                </td>

                <td className="p-2 border-r-2 text-xs text-center">
                  {d.customer}
                </td>
                <td className="p-2 border-r-2 text-xs text-center">
                  {d.totalBill}
                </td>
                <td className="p-2 border-r-2 text-xs text-center">
                  {d.branch}
                </td>
                <td className="p-2  border-r-2 text-xs text-center">
                  <button className="text-xs rounded-sm px-3 py-[0.375rem] text-[#0880ea] bg-[#daedfe] duration-300 hover:text-white hover:bg-[#0880ea]">
                    <span className="p-2">{d.status}</span>
                  </button>
                </td>
                <td className="p-2 border-r-2 text-xs text-center">
                  <ReactToPrint
                    trigger={() => (
                      <button className="p-2 bg-blue-500 text-white rounded">
                        <MdLocalPrintshop />
                      </button>
                    )}
                    content={() => ticketRef.current} // Use the ref here
                  />
                </td>
                <td className="p-2 border-r-2 text-xs text-center">
                  <button
                    onClick={() => {
                      setRowToDelete(i);
                      setShowDeleteConfirm(true);
                    }}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Notification
          show={showDeleteConfirm}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      </div>
      <nav className="mt-2">
        <ul className="flex ">
          <li className="px-[10px] py-[5px] border cursor-pointer ">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`px-[10px] py-[5px] border cursor-pointer ${
                currentPage === n ? "active" : ""
              }`}
              key={i}
            >
              <a
                href="#"
                className="px-[10px] py-[5px]"
                onClick={() => changePage(n)}
              >
                {n}
              </a>
            </li>
          ))}
          <li className="px-[10px] py-[5px] border cursor-pointer">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
      <div style={{ display: "none" }}>
        <Ticket data={records[currentPage - 1]} ref={ticketRef} />
      </div>
    </div>
  );
};

export default TableHistory;
