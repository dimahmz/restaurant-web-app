// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DotsMenu from "../../../components/dotsMenu";
// import DataGrid from "../../../components/DataGrid";
// import TableHeader from "../tableHader";
// import { MenuItem } from "@mui/material";
// import { MdDelete, MdModeEdit, MdAdd, MdImage } from "react-icons/md";
// import { Food, Group, Variation } from "../../../APIs/Food";
// import { useDispatch } from "react-redux";
// import ChangeImageModal from "./items/changeImgModal";
// import Filter from "../../../utils/filters";
// import DeleteFoodItemModal from "./items/deleteFoodModal";
// import EditFoodModal from "./items/editFoodModal";
// import {
//   toggle_change_img_modal,
//   set_selected_food,
//   toggle_edit_food_modal,
//   toggle_delete_item_modal,
//   toggle_add_variation_modal,
// } from "../../../stores/manageFood";
// import AddVariationModal from "./items/addVariationModal";

// const FoodItems = () => {
//   const [isFetchLoading, setIsFetchLoading] = useState(false);
//   const [foods, setFoods] = useState([]);
//   const [foodGroups, setFoodGroups] = useState([]);
//   const [variations, setVariations] = useState([]);
//   const [filtredFoods, setFiltredFoods] = useState([]);

//   const dispatch = useDispatch();

//   // fechers
//   async function fetchFood() {
//     setIsFetchLoading(true);
//     const response = await Food.get();
//     if (response.success) {
//       setFoods(response.payload);
//       setFiltredFoods(response.payload);
//     } else {
//       window.alert("an error occurred please try again later");
//     }
//     setIsFetchLoading(false);
//   }

//   async function fetchFoodGroups() {
//     const response = await Group.get();
//     if (response.success) {
//       setFoodGroups(response.payload);
//     }
//   }

//   async function fetchVariations() {
//     const response = await Variation.get();
//     if (response.success) {
//       setVariations(response.payload);
//     }
//   }

//   useEffect(() => {
//     fetchFood();
//     fetchFoodGroups();
//     fetchVariations();
//   }, []);

//   const columns = [
//     { field: "_index", headerName: "S/L", flex: 1 },
//     {
//       headerName: "Image",
//       flex: 1,
//       renderCell: (params) => (
//         <div className="p-2 flex-center">
//           <img
//             className="block rounded-full w-12 h-12"
//             src={`/images_host/${params.row.image}`}
//             alt={params.row.name.slice(0, 9)}
//           />
//         </div>
//       ),
//     },
//     { field: "name", headerName: "Name", flex: 1 },
//     { field: "price", headerName: "Price", flex: 1 },
//     {
//       field: "no_field",
//       headerName: "Action",
//       renderCell: (params) => {
//         return (
//           <DotsMenu
//             onClick={() => {
//               dispatch(set_selected_food(params.row));
//             }}
//           >
//             <MenuItem
//               onClick={() => {
//                 dispatch(toggle_add_variation_modal(true));
//               }}
//             >
//               <div className="flex items-center space-x-2">
//                 <MdAdd />
//                 <p>Add variation</p>
//               </div>
//             </MenuItem>
//             <MenuItem onClick={() => dispatch(toggle_edit_food_modal(true))}>
//               <div className="flex items-center space-x-2">
//                 <MdModeEdit />
//                 <p>Edit / View</p>
//               </div>
//             </MenuItem>

//             <MenuItem onClick={() => dispatch(toggle_change_img_modal(true))}>
//               <div className="flex items-center space-x-2">
//                 <MdImage />
//                 <p>Image</p>
//               </div>
//             </MenuItem>
//             <MenuItem onClick={() => dispatch(toggle_delete_item_modal(true))}>
//               <div className="flex items-center space-x-2">
//                 <MdDelete />
//                 <p>Delete</p>
//               </div>
//             </MenuItem>
//           </DotsMenu>
//         );
//       },
//       flex: 1,
//     },
//   ];

//   const naviagate = useNavigate();
//   function handleAddNewFood() {
//     naviagate("add-food");
//   }

//   function filterFoodItems(e) {
//     const name = e.target.value;
//     const $filtredFoods = Filter.byName(foods, name);
//     setFiltredFoods($filtredFoods);
//   }

//   return (
//     <div className="bg-white h-full relative">
//       {/* Delete a food modal */}
//       <DeleteFoodItemModal refresh={fetchFood} />
//       {/* edit an image Modal */}
//       <ChangeImageModal refresh={fetchFood} />
//       {/* edit a food item modal */}
//       <EditFoodModal foodGroups={foodGroups} refresh={fetchFood} />
//       {/* add variations  modal */}
//       <AddVariationModal variations={variations} refresh={fetchFood} />

//       <TableHeader
//         title="Items List"
//         onAddNew={handleAddNewFood}
//         handleSearchChange={filterFoodItems}
//         placeholder="search by name"
//       />
//       {/* table of foods */}
//       <div className="w-full h-[400px] bg-white px-4 py-8 mt-3">
//         <DataGrid
//           rowHeight={90}
//           isLoading={isFetchLoading}
//           columns={columns}
//           filteredRows={filtredFoods}
//         />
//       </div>
//     </div>
//   );
// };

// export default FoodItems;
