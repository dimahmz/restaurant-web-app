const AppButton = ({ label }) => {
    return (
        <div className="absolute bottom-2 py-2 w-full flex justify-center">
            <button className="text-white bg-[#cc3333] px-8 py-2 rounded-md">
                {label}
            </button>
        </div>
    );
};

export default AppButton;
