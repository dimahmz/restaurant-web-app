import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const DropDown = ({ items, defaultValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(
        defaultValue || items[0]
    );
    const [searchQuery, setSearchQuery] = useState("");

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    const filteredItems = items.filter(
        (item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase()) ||
            searchQuery === ""
    );

    return (
        <div className="relative w-36">
            <div
                className="flex items-center border rounded-lg p-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <AiOutlineCaretDown className="mr-2" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setIsOpen(false)}
                    className="bg-white p-2 w-full font-bold text-md rounded-lg tracking-wider text-gray-500 outline-none"
                    placeholder="Search..."
                />
            </div>
            {isOpen && filteredItems.length > 0 && (
                <div className="absolute z-10 bg-gray-100 mt-2 w-full rounded-lg p-2">
                    {filteredItems.map((item) => (
                        <div
                            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2"
                            key={item}
                            onClick={() => handleLanguageChange(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDown;
