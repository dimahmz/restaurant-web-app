import React from "react";
import TestTable from "./TestTable";

const IngredientGroupPage = () => {
    const header1 = ["S/L", "Name", "Action"];
    return (
        <div>
            <TestTable title="Ingredient Group List" headers={header1} />
        </div>
    );
};

export default IngredientGroupPage;
