import React from "react";
import TestTable from "./TestTable";

const IngredientPurchaseHistoryPage = () => {
    const header1 = [
        "S/L",
        "Supplier",
        "Invoice",
        "Purchased",
        "Total",
        "Due",
        "Action",
    ];
    return (
        <div>
            <TestTable title="Ingredient Purchases List" headers={header1} />
        </div>
    );
};

export default IngredientPurchaseHistoryPage;
