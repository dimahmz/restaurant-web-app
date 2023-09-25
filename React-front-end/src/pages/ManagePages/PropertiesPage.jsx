import React, { useState } from "react";
import data from "./groupdata.json";
import TestTable from "./TestTable";
import NewProprty from "./AddNew/NewProprty";

const PropertiesPage = () => {
    const header1 = ["S/L", "Name", "Action"];
    return (
        <div>
            <TestTable
                title="Property Group List"
                data={data}
                EditComponent={NewProprty}
                headers={header1}
            />
        </div>
    );
};
export default PropertiesPage;
