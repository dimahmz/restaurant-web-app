import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { BiSearch } from "react-icons/bi";
import { MenuItem, FormControl, Select } from "@mui/material";
import { Branch } from "../../APIs/Restaurant";
import "./Header.css";
import { useLocation } from "react-router-dom";

const TableHeader = ({ onSearchChange, branchChange }) => {
  const [branch, setBranch] = useState("");
  const [branches, setBranches] = useState([]);
  const [link, setLink] = useState({
    name: "",
    path: "",
    title: "",
  });

  const handleChange = (event) => {
    setBranch(event.target.value);
    branchChange(event.target.value);
  };

  useEffect(() => {
    async function fetchBranches() {
      const response = await Branch.get();
      if (response.success) {
        setBranches(response.payload);
      }
    }
    fetchBranches();
  }, []);

  const location = useLocation();

  //header search component dynamin link
  useEffect(() => {
    if (location.pathname == "/dashboard/pos-orders") {
      setLink({
        path: "/dashboard/online-orders",
        name: "online orders",
        title: "Point of sale orders history",
      });
    } else {
      setLink({
        name: "pos orders",
        path: "/dashboard/pos-orders",
        title: "online orders history",
      });
    }
  }, [location]);

  function handleInputChange(name) {
    onSearchChange(name);
  }

  return (
    <header className="relative header-shadow max-w-[1520px] mx-auto px-4 mt-[10px] bg-white py-2">
      <h1 className="text-lg font-bold uppercase text-[#121053] my-1">
        {link.title}
      </h1>
      <div className="flex-center-between">
        <div className="flex items-center space-x-10 px-4 py-2">
          <div className="flex-center">
            <div className="bg-[#f64e60] p-2 h-9 w-9 flex-center">
              <BiSearch size={15} className="text-white" />
            </div>
            <input
              className="bg-[#f0f7fb] px-2 text-[#49505] text-xs h-[36px] focus:outline-none"
              type="text"
              placeholder="Search By Token"
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <FormControl sx={{ width: "180px" }}>
            <Select
              value={branch}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              style={{
                padding: 0,
                margin: 0,
                height: "35px",
              }}
            >
              <MenuItem value="">
                <em>Any Branch</em>
              </MenuItem>
              {branches.map((branch) => (
                <MenuItem key={branch.id} value={branch.id}>
                  {branch.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="flex-[3] flex-center">
          <Link to={link.path}>
            <button className="uppercase  text-[#0880ea] bg-[#daedfe] duration-300 hover:text-white hover:bg-[#0880ea] py-2 px-6">
              {link.name}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TableHeader;
