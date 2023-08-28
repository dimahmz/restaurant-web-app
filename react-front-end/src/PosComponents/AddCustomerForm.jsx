import React, { useState } from "react";

const AddCustomerForm = ({ onClose }) => {
    const handleFormClose = () => {
        onClose();
    };
    const [customer, setCustomer] = useState({
        name: "",
        branch: "",
        email: "",
        phone: "",
        address: "",
    });
    const branches = ["Branch 1", "Branch 2", "Branch 3"];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can handle the submission, such as sending the customer data to an API or storing it in your state.
        console.log("Customer Data:", customer);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Add New Customer</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={customer.name}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="branch"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Branch
                    </label>
                    <select
                        id="branch"
                        name="branch"
                        value={customer.branch}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full bg-white"
                        required
                    >
                        {branches.map((branch, index) => (
                            <option
                                placeholder="select branch"
                                key={index}
                                value={branch}
                            >
                                {branch}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={customer.phone}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Address
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        value={customer.address}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full h-24"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-[#0dd19d] text-white px-4 py-2 rounded hover:bg-[#058d68]"
                    >
                        Add Customer
                    </button>
                    <button
                        onClick={handleFormClose}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCustomerForm;
