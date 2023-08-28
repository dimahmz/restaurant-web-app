import React, { useState } from "react";

const CheckboxWithLabel = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="flex items-center space-x-2 cursor-pointer">
            <input
                type="checkbox"
                className=""
                checked={isChecked}
                onChange={toggleCheckbox} // Update the event handler here
            />
            <span>{label}</span>
        </label>
    );
};

export default CheckboxWithLabel;
