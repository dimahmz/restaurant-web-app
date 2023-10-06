import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  food_order: [],
  selected_food: { id: null },
  depTag: {},
  select_food_index: -1,
  select_groud_index: -1,
  selected_group_food: [],
  selected_food_variations: [],
  selected_food_properties: [],
  selected_dep_tag: { name: "", commission: 0.0 },
  subtotal: 0,
  total_bill: 0,
  paid_amount: 0,
  due_amount: 0,
  CGST_SGST: {
    percentage: 0.1,
    label: "5+5",
    value: 0.0,
  },
  order_commission: 0,
};

export const pointOfSaleSlice = createSlice({
  name: "posOrder",
  initialState: {
    ...initialState,
    selected_branch_id: null,
    selected_table_id: null,
    selected_payment_type_id: null,
    show_response: false,
    response: { message: "", payload: {} },
    isLoading: false,
  },
  reducers: {
    // ----- food that are in the order -------
    add_food_order: (state, action) => {
      let $food = action.payload;
      let isFoodExist = false;
      state.food_order.map((food, i) => {
        if (food.id === $food.id) {
          isFoodExist = true;
          state.select_food_index = i;
          state.selected_food = food;
          return;
        }
      });

      if (isFoodExist) return;
      state.food_order.push($food);
      const index = state.food_order.length - 1;
      state.select_food_index = index;
      state.selected_food_variations = $food.variations;
      state.selected_food_properties = $food.properties;
      state.selected_food = $food;
    },

    delete_food_order: (state, action) => {
      if (!state.food_order[action.payload]) return;
      state.food_order.splice(action.payload, 1);
    },
    modify_food_order: (state, action) => {
      state.food_order[state.select_food_index] = action.payload;
      state.selected_food = state.food_order[state.select_food_index];
    },
    // ----- selected food index -------
    update_index: (state, action) => {
      state.select_food_index = action.payload.index;
      state.selected_food_variations = action.payload.food.variations;
      state.selected_food_properties = action.payload.food.properties;
      state.selected_food = action.payload.food;
    },
    set_selected_food_in_order: (state, action) => {
      state.selected_food_variations = action.payload.variations;
      state.selected_food_properties = action.payload.properties;
    },
    // ----- selected Group ------
    update_selected_group_food: (state, action) => {
      state.selected_group_food = action.payload;
      state.select_food_index = -1;
      state.selected_food_variations = [];
      state.selected_food_properties = [];
    },
    // ------ selected table ---------
    update_branch: (state, action) => {
      state.selected_branch_id = action.payload;
    },

    // ------ selected branch  ---------
    update_table: (state, action) => {
      state.selected_table_id = action.payload;
    },

    // ------ selected Payment type  ---------
    update_payment_type: (state, action) => {
      state.selected_payment_type_id = action.payload;
    },

    // ------ selected department tag  ---------
    update_dep_tag: (state, action) => {
      state.selected_dep_tag.name = action.payload.name;
      state.selected_dep_tag.commission = +action.payload.commission || 0.0;
    },
    // ------ server response ---------
    set_show_response: (state, action) => {
      state.show_response = action.payload;
    },
    set_response: (state, action) => {
      state.response = action.payload;
      state.show_response = true;
      state.isLoading = false;
    },
    set_loading: (state, action) => {
      state.isLoading = action.payload;
    },
    update_subtotal: (state, action) => {
      state.subtotal = action.payload;
    },
    update_CGST_SGST: (state, action) => {
      state.CGST_SGST.value = action.payload.value;
    },
    update_commission: (state, action) => {
      state.order_commission = action.payload;
    },
    update_total_bill: (state, action) => {
      state.total_bill = action.payload;
    },
    reset_selections: (state) => {
      state.selected_branch_id = null;
      state.selected_table_id = null;
      state.selected_payment_type_id = null;
    },
    reset_store: (state) => {
      Object.keys(state).forEach((key) => {
        if (initialState[key]) state[key] = initialState[key];
      });
    },
  },
});

export const {
  update_index,
  update_selected_group_food,
  add_food_order,
  delete_food_order,
  modify_food_order,
  update_branch,
  update_table,
  update_payment_type,
  update_dep_tag,
  set_response,
  set_show_response,
  set_loading,
  set_selected_food_in_order,
  update_subtotal,
  update_CGST_SGST,
  update_commission,
  update_total_bill,
  reset_store,
  reset_selections,
} = pointOfSaleSlice.actions;

export const store_order_food = (state) => state.pointOfSalesOrders.food_order;

export default pointOfSaleSlice.reducer;
