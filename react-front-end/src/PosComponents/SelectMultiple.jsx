import { useState } from "react";

const SelectMultiple = ({ options, label }) => {
    const [searchText, setSearchText] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleAddItem = (item) => {
        setSelectedItems([...selectedItems, { item, price: "" }]);
        setIsDropdownOpen(false);
    };

    const handleRemoveItem = (item) => {
        setSelectedItems(
            selectedItems.filter((selectedItem) => selectedItem.item !== item)
        );
    };

    const handlePriceChange = (item, newPrice) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.map((selectedItem) =>
                selectedItem.item === item
                    ? { ...selectedItem, price: newPrice }
                    : selectedItem
            )
        );
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="select-multiple relative">
            <div className="input-container">
                <label>{label}</label>
                <input
                    type="text"
                    className="border w-full rounded p-2 mt-2 mb-2"
                    placeholder="Search..."
                    value={searchText}
                    onClick={toggleDropdown}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <div className="selected-items flex">
                    {selectedItems.map((itemObj) => (
                        <div
                            key={itemObj.item}
                            className="selected-item bg-blue-200 rounded p-1 mr-1"
                        >
                            {itemObj.item}
                            <button
                                onClick={() => handleRemoveItem(itemObj.item)}
                            >
                                &times;
                            </button>
                            {itemObj.price !== "" && (
                                <div>Price: {itemObj.price}</div>
                            )}
                            <input
                                type="number"
                                placeholder="Enter price"
                                value={itemObj.price}
                                onChange={(e) =>
                                    handlePriceChange(
                                        itemObj.item,
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
            {isDropdownOpen && (
                <div className="dropdown-list mt-2 absolute z-10 w-full rounded shadow-lg bg-white">
                    {filteredOptions.map((option) => (
                        <div
                            key={option}
                            className="cursor-pointer p-2 hover:bg-gray-100"
                            onClick={() => handleAddItem(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectMultiple;
