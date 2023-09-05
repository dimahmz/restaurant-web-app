import React, { useState } from "react";

import NewGroup from "./AddNew/NewGroup";
import data from "./groupdata.json";
import TestTable from "./TestTable";

const GroupListPage = () => {
    const header1 = ["S/L", "Name", "Action"];
    return (
        <div>
            <TestTable
                title="Food Group List"
                EditComponent={NewGroup}
                data={data}
                headers={header1}
            />
        </div>
    );
};
export default GroupListPage;
