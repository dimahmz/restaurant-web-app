import { BiSearch } from "react-icons/bi";

const SearchBar = ({ title }) => {
    return (
        <div className="bg-white">
            <div className="flex-center-between px-3 py-4">
                <h1>{title}</h1>
                <div className="flex items-center space-x-8">
                    <div className="flex">
                        <input
                            type="text"
                            name="search"
                            className="bg-[#f0f7fb] h-9"
                        />
                        <div className="bg-[#f64e60]  p-2 h-9 w-9 flex-center">
                            <BiSearch size={19} className="text-white" />
                        </div>
                    </div>

                    <button className="bg-[#f64e60] uppercase text-white py-2 px-4 rounded">
                        add new
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
