/* eslint-disable react/prop-types */

const Header = () => {
    return (
        <thead className="bg-[#f4f9fc] border-solid border-[1px] border-[#dee2e6] text-sm">
            <tr>
                <th className="border-r-2 py-[5px]">S/L</th>
                <th className="border-r-2 py-[5px]">Food item</th>
                <th className="border-r-2 py-[5px]">QTY</th>
                <th className="border-r-2 py-[5px]">Price</th>
            </tr>
        </thead>
    );
};

export default Header;
