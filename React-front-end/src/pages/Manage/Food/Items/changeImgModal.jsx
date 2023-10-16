import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../../components/FormModal";
import { toggle_edit_modal } from "../../../../stores/manageFood";
import { useState } from "react";
import { Food } from "../../../../APIs/Food";

export default function ChangeImgModal({ refresh, serverResponse }) {
  const dispatch = useDispatch();

  const imgUrl = new URL(import.meta.env.VITE_APP_IMAGES_HOST).href;

  const [isLoading, setIsLoading] = useState(false);

  const selectedFood = useSelector((state) => state.manageFood.selectedFood);

  const openModal = useSelector(
    (state) => state.manageFood.openChangeFoodImgModal
  );

  const [image, setImage] = useState(null);

  function closeModal() {
    dispatch(
      toggle_edit_modal({ name: "openChangeFoodImgModal", value: false })
    );
  }
  async function updateImage() {
    const id = selectedFood.id;
    setIsLoading(true);
    const response = await Food.updateImg({ image, id });
    serverResponse(response);
    if (response.success) {
      closeModal();
      refresh();
    }
    setIsLoading(false);
  }

  return (
    <FormModal
      labels={{ title: `Update ${selectedFood.name}` }}
      open={openModal}
      handleClose={closeModal}
      onSubmitForm={updateImage}
      isLoading={isLoading}
    >
      <div className="py-5 px-4 flex-col space-y-8">
        <div className="flex items-center space-x-3">
          <label htmlFor="image">Image</label>
          <img
            className="w-9 h-9 rounded-full block object-cover"
            src={`${imgUrl}/${selectedFood?.image}`}
            alt={selectedFood?.name}
          />
        </div>
        <div className="border py-2 px-1">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
      </div>
    </FormModal>
  );
}
