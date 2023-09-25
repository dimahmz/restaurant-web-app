import React from "react";
import TestTable from "./TestTable";

const IngerdientItemPage = () => {
    const header1 = ["S/L", "Name", "Group", "Action"];
    return (
        <div>
            <TestTable title="Ingredient Item" headers={header1} />
        </div>
    );
};

export default IngerdientItemPage;
