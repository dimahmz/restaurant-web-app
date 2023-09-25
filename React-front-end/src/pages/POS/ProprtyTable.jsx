const ProprtyTable = ({ data }) => {
    return (
        <div className="relative p-1 text-xs w-full">
            {data.length !== 0 &&
                data.map((property) => (
                    <div key={property.id}>
                        <div className="text-white bg-[#f64e60] px-4 py-2 flex justify-center font-medium">
                            {property.name}
                        </div>
                        <section className="flec-column">
                            <ul className="flex justify-between py-3">
                                <li className="">Name</li>
                                <li className="">QTY</li>
                                <li className="">Unit Price</li>
                            </ul>
                            <div className="flex-column space-y-2 mb-2 bg-[#f4f9fc] p-1 border-2">
                                {property.property_items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="py-1 flex items-center justify-between border-b-2"
                                    >
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            onChange={() => {}}
                                        />
                                        <p>{item.name}</p>
                                        <input
                                            className="w-10 border-2 h-5"
                                            type="number"
                                            defaultValue={1}
                                            min={1}
                                        />
                                        <span className="">{item.price}DH</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                ))}
        </div>
    );
};

export default ProprtyTable;

// bg-[#f4f9fc]
