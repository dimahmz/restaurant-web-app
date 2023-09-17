// src/components/UploadButton.js
import { useState } from "react";

const UploadButton = () => {
    const [selectedImage, setSelectedImage] = useState("");

    const handleImageUpload = (event) => {
        setSelectedImage(event.target.files[0].name); // Get the name of the selected image
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-2 border-2 rounded">
                <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Choose Image
                    <input
                        type="file"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                </label>
                <span className="text-gray-500">
                    {selectedImage ? selectedImage : "No image chosen"}
                </span>
            </div>
        </div>
    );
};

export default UploadButton;
