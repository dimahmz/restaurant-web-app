import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ComponentToPrint } from "../OrderToPrint";
import { useReactToPrint } from "react-to-print";
import {
  store_order_food,
  set_response,
  set_loading,
  update_subtotal,
  update_CGST_SGST,
  update_commission,
  update_total_bill,
  reset_store,
} from "../../../stores/pointOfSale";
import { PosOrder } from "../../../APIs/Orders";
import { Button } from "@mui/material";

const Footer = () => {
  const dispatch = useDispatch();

  // order properties

  const user = useSelector((state) => state.user.userProfile);

  const state = useSelector((state) => state);

  const order_food = useSelector(store_order_food);

  const Dept_tag = useSelector(
    (state) => state.pointOfSalesOrders.selected_dep_tag
  );
  const branch_id = useSelector(
    (state) => state.pointOfSalesOrders.selected_branch_id
  );

  const table_id = useSelector(
    (state) => state.pointOfSalesOrders.selected_table_id
  );

  const payment_id = useSelector(
    (state) => state.pointOfSalesOrders.selected_payment_type_id
  );

  const subtotal = useSelector((state) => state.pointOfSalesOrders.subtotal);
  const total_bill = useSelector(
    (state) => state.pointOfSalesOrders.total_bill
  );
  const paid_amount = useSelector(
    (state) => state.pointOfSalesOrders.paid_amount
  );
  const department_commission = useSelector(
    (state) => state.pointOfSalesOrders.selected_dep_tag
  );

  const order_commission = useSelector(
    (state) => state.pointOfSalesOrders.order_commission
  );

  const CGST_SGST = useSelector((state) => state.pointOfSalesOrders.CGST_SGST);

  // updated
  useEffect(() => {
    // array of prices of each food in the order plus its variation and in multiply of its quantity
    const $food_subtotals = order_food.map((food) => {
      return +food.quantity_price;
    });
    // the sum of all food in the order
    const subtotal = $food_subtotals
      .reduce((sum, current) => sum + current, 0)
      .toFixed(2);
    //order's tax
    const $CGST_SGST = (subtotal * CGST_SGST.percentage).toFixed(2);

    const commission = (
      subtotal * +(department_commission.commission / 100)
    ).toFixed(2);

    const $total_bill = (+subtotal + +commission - +$CGST_SGST).toFixed(2);

    dispatch(update_subtotal(subtotal));
    dispatch(update_CGST_SGST({ value: $CGST_SGST }));
    dispatch(update_commission(commission));
    dispatch(update_total_bill($total_bill));
  }, [state]);

  // store the order in the database

  async function submitOrder() {
    const $posOrder = {};
    const $order_food = order_food.map((food) => {
      return {
        food_id: food.id,
        variation_id: food.selected_variation.id || null,
        quantity: food.quantity,
      };
    });
    $posOrder.order_food = [...$order_food];
    $posOrder.subtotal = subtotal;
    $posOrder.total_bill = total_bill;
    $posOrder.due_amount = subtotal;
    $posOrder.paid_amount = paid_amount;
    $posOrder.department_commission = order_commission;
    $posOrder.branch_id = branch_id;
    $posOrder.table_id = table_id;
    $posOrder.user_id = user.id;
    $posOrder.payment_id = payment_id;

    dispatch(set_loading(true));

    const response = await PosOrder.create($posOrder);

    setTimeout(() => {
      if (response.success) {
        handlePrint();
        dispatch(reset_store());
      }
    }, 700);
    dispatch(set_response(response));
  }

  // print the order
  const componenetRef = useRef(ComponentToPrint);

  const handlePrint = useReactToPrint({
    content: () => componenetRef.current,
  });
  return (
    <div className="border-2 border-slate-600 text-[12px]">
      <div className="flex justify-between bg-[#f4f9fc] font-semibold  p-1 border-b-2 border-slate-600">
        <div className="w-full flex  justify-between border-r-2 border-slate-600 px-1">
          <p className="">Sub Total</p>
          <span className="">{subtotal} DH</span>
        </div>
        <div className="w-full px-1">
          cgst+sgst ({CGST_SGST.label})%&nbsp;:&nbsp;
          {CGST_SGST.value}DH
        </div>
      </div>
      <div className=" bg-[#f4f9fc] text-[14px] text-center font-semibold  flex-center space-x-2 py-1">
        <span> Commission :</span>
        <span>
          {Dept_tag.commission} %&nbsp;
          {order_commission}&nbsp;DH
        </span>
      </div>
      <div className="px-2 py-1 bg-[#f64e60] flex justify-between  text-white text-[16px] font-bold">
        <p>Total Bill</p>
        <p className="">{total_bill} DH</p>
      </div>
      <div className="flex justify-end space-x-3 py-2 text-[15px] font-semibold px-2">
        <div className="hidden">
          <ComponentToPrint ref={componenetRef} />
        </div>
        <Button
          variant="contained"
          sx={{
            fontSize: "15px",
            letterSpacing: "5px",
            paddingX: "30px",
            backgroundColor: "#0dd19d",
            "&:hover": {
              backgroundColor: "#0dd19d",
            },
          }}
          onClick={submitOrder}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};
export default Footer;
