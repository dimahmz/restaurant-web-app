import React from "react";
import TestTable from "./TestTable";

const PurchaseHistoryPage = () => {
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
            <TestTable title="Food Purchases List" headers={header1} />
        </div>
    );
};

export default PurchaseHistoryPage;
