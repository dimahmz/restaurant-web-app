import { BiSearch } from "react-icons/bi";

const SearchInput = ({ onChange, placeholder }) => {
  return (
    <div className="flex-center">
      <input
        className="bg-[#f0f7fb] px-2 text-[#49505] text-xs h-[36px] focus:outline-none"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className="bg-[#f64e60] p-2 h-9 w-9 flex-center cursor-pointer">
        <BiSearch size={15} className="text-white" />
      </div>
    </div>
  );
};
export default SearchInput;
