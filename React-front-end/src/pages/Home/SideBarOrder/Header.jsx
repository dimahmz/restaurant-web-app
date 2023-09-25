import { AiOutlineClose } from "react-icons/ai";

const SideBarOrderHeader = ({ OnCloseSideBar }) => {
    function OnClose() {
        OnCloseSideBar();
    }
    return (
        <>
            <div className="bg-white flex px-4 py-2 justify-between items-center">
                <h1 className="text-[#2a435d] text-base font-[600]">jcris</h1>
                <button
                    onClick={() => {
                        OnClose();
                    }}
                >
                    <AiOutlineClose size={25} className="text-[#cc3333]" />
                </button>
            </div>
        </>
    );
};
export default SideBarOrderHeader;
