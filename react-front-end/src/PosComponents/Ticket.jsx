import React from "react";
const Ticket = ({ data }) => {
  return (
    <div className="ticket border p-4 m-4 w-72">
      <h2 className="text-lg font-semibold mb-2">Ticket Details</h2>
      <div className="ticket-content">
        <p className="mb-1">
          <strong>Token:</strong> {data.token}
        </p>
        <p className="mb-1">
          <strong>Date:</strong> {data.datetime}
        </p>
        <p className="mb-1">
          <strong>Customer:</strong> {data.customer}
        </p>
        <p className="mb-1">
          <strong>Total Bill:</strong> ${data.totalBill}
        </p>
        <p className="mb-1">
          <strong>Branch:</strong> {data.branch}
        </p>
        <p className="mb-1">
          <strong>Status:</strong> {data.status}
        </p>
        {/* ... other ticket details */}
      </div>
    </div>
  );
};

export default Ticket;
