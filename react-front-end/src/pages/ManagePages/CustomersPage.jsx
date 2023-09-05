import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import data from "./datacust.json";
import { Link } from "react-router-dom";
import NewCutomers from "./AddNew/NewCustomers";
import TestTable from "./TestTable";
import NewBranches from "./AddNew/NewBranches";
const CustomersPage = () => {
    const header1 = [
        "S/L",
        "Name",
        "Email",
        "Address",
        "Phn no",
        "Branch",
        "Action",
    ];
    return (
        <div>
            <TestTable
                title="Customer List"
                headers={header1}
                data={data}
                EditComponent={NewCutomers}
            />
        </div>
    );
};

export default CustomersPage;
