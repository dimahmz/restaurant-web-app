import React, { useState } from "react";

import TestTable from "./TestTable";
import NewDeptTag from "./AddNew/NewDeptTag";
const DeptTagsPage = () => {
    const header1 = ["S/L", "Name", "Commission(%)", "Action"];
    return (
        <div>
            <TestTable
                title="Department Tag List"
                headers={header1}
                EditComponent={NewDeptTag}
            />
        </div>
    );
};

export default DeptTagsPage;
