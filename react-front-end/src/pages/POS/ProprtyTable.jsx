const ProprtyTable = ({ data, onSelectPropertyItem }) => {
    return (
        <div>
            <div className="p-2">
                {data.length !== 0 &&
                    data.map((property) => (
                        <div key={property.id}>
                            <div className="text-white bg-[#f64e60] px-4 py-2 flex justify-center font-bold border-2">
                                {property.name}
                            </div>
                            <table className="table-auto w-full">
                                <thead className="border">
                                    <tr className="text-sm">
                                        <td className="pl-2">Name</td>
                                        <td className="pl-2 border-l-2">QTY</td>
                                        <td className="pl-2 border-l-2">
                                            Unit Price
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="bg-[#f4f9fc]">
                                    {property.property_items.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="border-b-2"
                                        >
                                            <td className="p-2 flex flex-row-reverse">
                                                <p>{item.name}</p>
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox mr-2"
                                                    onClick={(e) => {
                                                        if (e.target.checked)
                                                            onSelectPropertyItem(
                                                                item
                                                            );
                                                    }}
                                                />
                                            </td>
                                            <td className="p-2 border-l-2">
                                                <div className="flex justify-center">
                                                    <input
                                                        type="number"
                                                        defaultValue={1}
                                                        min={1}
                                                        className="w-14"
                                                    />
                                                </div>
                                            </td>
                                            <td className="p-2  border-l-2">
                                                {item.price}DH
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProprtyTable;
