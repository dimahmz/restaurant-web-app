import React from "react";

import data from "./tablzdata.json";
import TestTable from "./TestTable";

import NewTable from "./AddNew/NewTable";

const TablePage = () => {
    const headertable = ["S/L", "Name", "Capacity", "Branch", "Action"];
    return (
        <div>
            <TestTable
                title="Table List"
                data={data}
                headers={headertable}
                EditComponent={NewTable}
            />
        </div>
    );
};

export default TablePage;
