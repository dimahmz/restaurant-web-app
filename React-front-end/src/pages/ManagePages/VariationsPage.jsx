import React from "react";
import data from "./groupdata.json";
import NewVariations from "./AddNew/NewVariations";
import TestTable from "./TestTable";
const VariationsPage = () => {
    const header1 = ["S/L", "Name", "Action"];
    return (
        <div>
            <TestTable
                title="Variation List"
                data={data}
                EditComponent={NewVariations}
                headers={header1}
            />
        </div>
    );
};
export default VariationsPage;
