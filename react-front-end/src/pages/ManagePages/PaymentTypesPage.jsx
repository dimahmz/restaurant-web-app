import React from "react";

import data from "./paymentdata.json";
import TestTable from "./TestTable";

const PaymentTypesPage = () => {
    const headertable = ["S/L", "Name", "Unique Key", "Action"];
    return (
        <div>
            <TestTable
                title="Payment Type List"
                data={data}
                headers={headertable}
            />
        </div>
    );
};

export default PaymentTypesPage;
