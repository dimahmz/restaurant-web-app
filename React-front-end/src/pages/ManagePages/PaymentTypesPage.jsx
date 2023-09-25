import React from "react";

import data from "./paymentdata.json";
import TestTable from "./TestTable";
import NewPayment from "./AddNew/NewPayment";

const PaymentTypesPage = () => {
    const headertable = ["S/L", "Name", "Unique Key", "Action"];
    return (
        <div>
            <TestTable
                title="Payment Type List"
                data={data}
                headers={headertable}
                EditComponent={NewPayment}
            />
        </div>
    );
};

export default PaymentTypesPage;
