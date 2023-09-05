import React from "react";
import TestTable from "./TestTable";

const ManageSupplierPage = () => {
    const header1 = ["S/L", "Name", "Email", "Phone", "Address", "Action"];
    return (
        <div>
            <TestTable title="Supplier List" headers={header1} />
        </div>
    );
};

export default ManageSupplierPage;
