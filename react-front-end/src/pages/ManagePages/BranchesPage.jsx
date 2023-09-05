import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import data from "./databranch.json";
import { Link } from "react-router-dom";
import NewBranches from "./AddNew/NewBranches";
import Action from "../../PosComponents/Action";
import TestTable from "./TestTable";
const BranchesPage = () => {
    const header1 = [
        "S/L",
        "Name",
        "Delivery Charge",
        "Address",
        "Phn no",
        "Action",
    ];
    return (
        <div>
            <TestTable
                title="Branch List"
                headers={header1}
                data={data}
                EditComponent={NewBranches}
            />
        </div>
    );
};

export default BranchesPage;
