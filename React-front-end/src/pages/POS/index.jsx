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
import { DeptTag, Table, Branch } from "../../APIs/Restaurant";
import { Group } from "../../APIs/Food";
import getResponseMessage from "../../utils/getResponse";

const PosPage = () => {
  const dispatch = useDispatch();

  const selectedFoodVariation = useSelector(
    (state) => state.pointOfSalesOrders.selected_food_variations
  );

  const [branches, setBranches] = useState([]);
  const [tables, setTables] = useState([]);
  const [foodGroups, setFoodGroups] = useState([]);
  const [foodGroupsLoading, setFoodGroupsLoading] = useState(false);

  const [commissions, setCommissions] = useState([]);
  const [commissionsLoading, setCommissionsLoading] = useState(false);

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
    fetchCommissions();
    fetchFoods();
    fetchBranches();
    fetchTables();
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
    <>
      {isLoading && (
        <div className="fixed w-screen h-screen flex-center z-[1000000] backdrop-blur-sm bg-white/0">
          <CircularProgress color="secondary" />
        </div>
      )}
      <div className="bg-gray-200 overflow-hidden ">
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
        <div className="flex w-full  overflow-y-hidden overflow-x-auto">
          <div className="flex-col">
            <div className="px-3 py-2">
              <OrdersNavBar />
            </div>
            <div className="max-h-[70vh] px-2 flex space-x-2">
              <div className="overflow-y-auto px-1 w-full max-w-[150px]">
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
              <div className="w-[322px] overflow-y-auto">
                <Products />
              </div>
              <div className="h-[70vh] relative w-[185px] bg-white overflow-y-auto overflow-x-hidden py-2 px-1">
                <VariationsTable variations={selectedFoodVariation} />
              </div>

              <div className="w-[135px] max-h-[70vh]">
                <SelectSection branches={branches} tables={tables} />
              </div>
            </div>
          </div>
          <div className="flex h-[79vh] w-full pr-3 pt-2">
            <BasketComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default PosPage;
