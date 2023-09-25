import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MenuItem, FormControl, Select } from "@mui/material";
import { Branch } from "../../APIs/Restaurant";
import "./Header.css";
const TableHeader = ({ link, onSearchChange, branchChange }) => {
    const [branch, setBranch] = useState("");
    const [branches, setBranches] = useState([]);

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
    function handleInputChange(name) {
        onSearchChange(name);
    }

    return (
        <div className="relative header-shadow max-w-[1520px] mx-auto px-4 mt-[10px] bg-white py-2">
            <h1 className="text-lg font-bold uppercase text-[#121053] my-3">
                Online Order history
            </h1>
            <div className="flex justify-between items-center py-2">
                <div className="flex-center space-x-3">
                    <div className="bg-[#f64e60] p-2 h-[36px] flex-center">
                        <BiSearch size={15} className="text-white" />
                    </div>
                    <input
                        className="bg-[#f0f7fb] px-2 text-[#49505] text-xs h-[36px] focus:outline-none"
                        type="text"
                        placeholder="Search By Token"
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <Link to={link.path}>
                        <button className="uppercase  text-[#0880ea] bg-[#daedfe] duration-300 hover:text-white hover:bg-[#0880ea] py-2 px-3">
                            {link.name}
                        </button>
                    </Link>
                    <div>
                        <FormControl sx={{ minWidth: "180px" }}>
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
                    <DatePicker
                        className="appearance-none border rounded w-[120px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholderText="From date"
                    />
                    <div className="grid place-items-center">
                        <AiOutlineArrowRight size={22} />
                    </div>
                    <div>
                        <DatePicker
                            className="appearance-none border w-[120px] rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholderText="To date"
                        />
                    </div>
                    <button className=" text-xs rounded-sm  uppercase px-2 py-3 text-[#f5364a] bg-[#fde0e3] duration-300 hover:text-white hover:bg-[#f5364a]">
                        filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TableHeader;
