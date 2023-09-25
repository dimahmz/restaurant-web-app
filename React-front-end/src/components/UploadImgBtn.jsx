const UploadButton = ({ onUploadImg }) => {
    const handleImageUpload = (event) => {
        onUploadImg(event.target.files[0]);
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
            </div>
        </div>
    );
};

export default UploadButton;
