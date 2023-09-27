import { BiSearch } from "react-icons/bi";

const TableHeader = ({ label }) => {
  return (
    <div className="flex-center-between pt-4 px-8">
      <h1>{label}</h1>

      <div className="flex items-center space-x-5">
        <div className="flex">
          <input type="text" name="search" className="bg-[#f0f7fb] h-9" />
          <div className="bg-[#f64e60]  p-2 h-9 w-9 flex-center">
            <BiSearch size={19} className="text-white" />
          </div>
        </div>
        <button className="bg-[#f64e60] uppercase text-white py-2 px-4">
          add new
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
