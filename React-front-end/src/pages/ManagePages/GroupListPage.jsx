import { useEffect, useState } from "react";
import NewGroup from "./AddNew/NewGroup";
import TestTable from "./TestTable";
import axios from "../../utils/axios";

// import data from "./groupdata.json";

const GroupListPage = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fechFoodGoups() {
            const response = await axios.get("/food/groups");
            if (response.data.success) {
                // setData(response.data.payload);
                console.log(response.data.payload);
            }
        }
        fechFoodGoups();
    }, []);

    const header1 = ["S/L", "Name", "Action"];

    return (
        <div>
            <TestTable
                title="Food Group List"
                EditComponent={NewGroup}
                data={data}
                const
                headers={header1}
            />
        </div>
    );
};
export default GroupListPage;
