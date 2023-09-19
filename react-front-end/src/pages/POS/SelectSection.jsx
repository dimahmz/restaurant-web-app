/* eslint-disable react/prop-types */
const Branch = ({ branches, tables }) => {
    return (
        <div className="max-w-[190px] py-6 px-2">
            <div className="flex flex-col space-y-10">
                <select name="" id="" className="block w-40">
                    {branches.map((branch, index) => (
                        <option key={index} value={branch.id}>
                            {branch.name}
                        </option>
                    ))}
                </select>
                <select name="" id="" className="block w-40">
                    {tables.map((table, index) => (
                        <option key={index} value={table.id}>
                            {table.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mt-20">
                <button className="uppercase w-full px-4 py-2  text-white bg-[#f64e60]">
                    cancel
                </button>
            </div>
        </div>
    );
};

export default Branch;
