import { useEffect, useState } from "react";
import Products from "./Products";
import BasketComponent from "./Basket";
import SelectSection from "./SelectSection";
import CommissionBar from "./CommissionBar";
import GroupsBar from "./GroupsBar";
import VariationsTable from "./VariationsTable";
import OrdersNavBar from "./OrdersNavbar";
import {
  update_selected_group_food,
  set_show_response,
} from "../../stores/pointOfSale";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "../../components/snackBar";
import { CircularProgress } from "@mui/material";
import { DeptTag, Table, Branch, PaymentType } from "../../APIs/Restaurant";
import { Group } from "../../APIs/Food";
import getResponseMessage from "../../utils/getResponse";

const PosPage = () => {
  const dispatch = useDispatch();

  const [branches, setBranches] = useState([]);
  const [tables, setTables] = useState([]);
  const [foodGroups, setFoodGroups] = useState([]);
  const [foodGroupsLoading, setFoodGroupsLoading] = useState(false);
  const [commissions, setCommissions] = useState([]);
  const [commissionsLoading, setCommissionsLoading] = useState(false);
  const [pyamnetTypes, setPaymentTypes] = useState([]);

  useEffect(() => {
    async function fetchFoods() {
      setFoodGroupsLoading(true);
      let response = await Group.getGroupFood();
      if (response.success) {
        setFoodGroups(response.payload);
      }
      setFoodGroupsLoading(false);
    }
    async function fetchCommissions() {
      let response = await DeptTag.get();
      if (response.success) {
        setCommissions(response.payload);
      }
    }
    async function fetchBranches() {
      setCommissionsLoading(true);
      let response = await Branch.get();
      if (response.success) {
        setBranches(response.payload);
      }
      setCommissionsLoading(false);
    }
    async function fetchTables() {
      let response = await Table.get();
      if (response.success) {
        setTables(response.payload);
      }
    }
    async function fetchPaymentTypes() {
      let response = await PaymentType.get();
      if (response.success) {
        setPaymentTypes(response.payload);
      }
    }
    fetchCommissions();
    fetchFoods();
    fetchBranches();
    fetchTables();
    fetchPaymentTypes();
  }, []);

  // ------ adding Items ----------

  // selected group
  function handleSelectedGroup(Groupfood) {
    dispatch(update_selected_group_food(Groupfood));
  }
  const show_response = useSelector(
    (state) => state.pointOfSalesOrders.show_response
  );
  const response = useSelector((state) => state.pointOfSalesOrders.response);

  const isLoading = useSelector((state) => state.pointOfSalesOrders.isLoading);

  const [message, setMessage] = useState("");
  const [sx, setSx] = useState({});

  useEffect(() => {
    setMessage(() =>
      response.success ? response.message : getResponseMessage(response)
    );
    setSx(() =>
      response.success
        ? { background: "#07bc0c", color: "#fff" }
        : { background: "#de222a", color: "#fff" }
    );
  }, [response]);

  return (
    <div className="w-full px-4">
      {isLoading && (
        <div className="fixed w-screen h-screen flex-center z-[1000000] backdrop-blur-sm bg-white/0">
          <CircularProgress color="secondary" />
        </div>
      )}
      {show_response && (
        <div className="relative z-[1000]">
          <Snackbar
            message={message}
            open={show_response}
            severity={response.success ? "success" : "error"}
            handleClose={() => {
              dispatch(set_show_response(false));
            }}
            sx={sx}
          />
        </div>
      )}
      <div className="flex justify-start">
        <div className="flex-col">
          <div className="py-2">
            <OrdersNavBar />
          </div>
          {/* commission bar */}
          <div className="flex space-x-2 px-2">
            <div className="overflow-y-auto h-[415px] 1xl:h-[480px] 3xl:h-[565px] w-full max-w-[180px]">
              {commissionsLoading ? (
                <div className="flex-center w-full h-1/2 z-[1000] backdrop-blur-sm bg-white/0">
                  <CircularProgress color="primary" />
                </div>
              ) : (
                <CommissionBar data={commissions} />
              )}
              {foodGroupsLoading ? (
                <div className="flex-center w-full h-1/2 z-[1000] backdrop-blur-sm bg-white/0">
                  <CircularProgress color="primary" />
                </div>
              ) : (
                <GroupsBar
                  foodGroups={foodGroups}
                  onSelectGroup={handleSelectedGroup}
                />
              )}
            </div>
            <div className="w-[292px] h-[371px]  1xl:h-[436px] 2xl:h-[560px] overflow-y-auto">
              <Products />
            </div>
            <div className="w-[210px] h-[371px] 1xl:h-[436px] 2xl:h-[560px] bg-white">
              <VariationsTable />
            </div>
            <div className="w-[135px] h-[371px] 1xl:h-[436px] 2xl:h-[560px] bg-white">
              <SelectSection
                branches={branches}
                tables={tables}
                pyamnetTypes={pyamnetTypes}
              />
            </div>
          </div>
        </div>
        <div className="flex h-[470px] 1xl:h-[535px]  w-full pt-2">
          <BasketComponent />
        </div>
      </div>
    </div>
  );
};

export default PosPage;
