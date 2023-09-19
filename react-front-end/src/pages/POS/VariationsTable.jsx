const VariationsTable = ({ variations, onSelectVariation }) => {
    return (
        <div className="p-2">
            <div>
                <div className="text-white bg-[#f64e60] px-4 py-2 flex justify-center font-bold border-2">
                    Variations
                </div>
                {variations.length === 0 ? (
                    <p className="px-3 mt-7">There is no variation</p>
                ) : (
                    <table className="table-auto w-full">
                        <thead className="border">
                            <tr>
                                <td className="pl-2">Name</td>
                                <td className="pl-2 border-l-2">Price</td>
                            </tr>
                        </thead>
                        <tbody className="bg-[#f4f9fc] border-2">
                            {variations.map((variation, index) => (
                                <tr key={index} className="border-b-2">
                                    <td className="p-2 ">
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox mr-2"
                                                onClick={(e) => {
                                                    if (e.target.checked)
                                                        onSelectVariation(
                                                            variation
                                                        );
                                                }}
                                            />
                                            {variation.name}
                                        </label>
                                    </td>
                                    <td className="p-2 border-l-2">
                                        {variation.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default VariationsTable;
