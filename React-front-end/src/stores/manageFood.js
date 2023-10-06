import { createSlice } from "@reduxjs/toolkit";
export const manageFoodSlice = createSlice({
  name: "manageFood",
  initialState: {
    // Food
    selectedFood: {},
    openEditFoodModal: false,
    openDeleteItemModal: false,
    openChangeFoodImgModal: false,
    openAddFoodVariationModal: false,
    // Group
    selectedGroup: {},
    openAddGroupModal: false,
    openEditGroupModal: false,
    openDeleteGroupModal: false,
    // Variation
    selectedVariation: {},
    openAddVariationModal: false,
    openEditVariationModal: false,
    openDeleteVariationModal: false,
    // Branch
    selectedBranch: {},
    openAddBranchModal: false,
    openEditBranchModal: false,
    openDeleteBranchModal: false,
    // DepTag
    selectedDeptTag: {},
    openAddDeptTagModal: false,
    openEditDeptTagModal: false,
    openDeleteDeptTagModal: false,
    // Table
    selectedTable: {},
    openAddTableModal: false,
    openEditTableModal: false,
    openDeleteTableModal: false,
    // Payment Type
    selectedPaymentType: {},
    openAddPaymentTypeModal: false,
    openEditPaymentTypeModal: false,
    openDeletePaymentTypeModal: false,
  },
  reducers: {
    set_selected_item: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    toggle_edit_modal: (state, action) => {
      state[action.payload.name] = action.payload.value;
      console.log(state[action.payload.name]);
    },
    toggle_delete_item_modal: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    toggle_add_item_modal: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
  openAddVariationModal: false,
  openEditVriationModal: false,
  openDeleteVriationModal: false,
});

export const {
  set_selected_item,
  toggle_edit_modal,
  toggle_delete_item_modal,
  toggle_add_item_modal,
} = manageFoodSlice.actions;

export const selectedFood = (state) => state.manageFood.selectedFood;
export const selectedVariation = (state) => state.manageFood.selectedVariation;
export const selectedBranch = (state) => state.manageFood.selectedBranch;
export const selectedGroup = (state) => state.manageFood.selectedGroup;
export const selectedTable = (state) => state.manageFood.selectedTable;
export const selectedPaymentType = (state) =>
  state.manageFood.selectedPaymentType;
export const selectedDeptTag = (state) => state.manageFood.selectedDeptTag;

export default manageFoodSlice.reducer;
