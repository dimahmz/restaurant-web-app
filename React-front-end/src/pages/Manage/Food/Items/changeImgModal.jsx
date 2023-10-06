import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../../components/FormModal";
import { toggle_change_img_modal } from "../../../../stores/manageFood";
import { useState } from "react";

export default function ChangeImgModal({ refresh }) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const selectedFood = useSelector((state) => state.manageFood.selectedFood);

  const openChangeImgModal = useSelector(
    (state) => state.manageFood.openChangeImgModal
  );
  const [image, setImage] = useState(null);

  function updateImage(e) {
    console.log(image);
    e.preventDefault();
    setIsLoading(true);
    setIsLoading(false);
    refresh();
  }

  return (
    <FormModal
      labels={{ title: `Update ${selectedFood.name}` }}
      open={openChangeImgModal}
      handleClose={() => dispatch(toggle_change_img_modal(false))}
      onSubmitForm={updateImage}
      isLoading={isLoading}
    >
      <div className="py-5 px-4 flex-col space-y-8">
        <div className="flex items-center space-x-3">
          <label htmlFor="image">Image</label>
          <img
            className="w-9 h-9 rounded-full block"
            src={`/images_host/${selectedFood?.image}`}
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
