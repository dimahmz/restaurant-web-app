// TicketComponent.js
import React from "react";

const TicketComponent = ({ items, totalBill }) => {
    // Get the current date and time
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    return (
        <div className="ticket">
            <h2>Ticket</h2>
            <p>Date: {currentDate}</p>
            <p>Time: {currentTime}</p>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.price * item.qty} DH</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total Bill: {totalBill} DH</p>
        </div>
    );
};

export default TicketComponent;
