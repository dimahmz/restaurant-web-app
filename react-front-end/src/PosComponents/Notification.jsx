import React from "react";

const Notification = ({ show, onCancel, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="notification-container">
      <div className="notification-content">
        <p>Are you sure you want to delete this record?</p>
        <div className="notification-buttons">
          <button onClick={onCancel} className="btn-cancel">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn-confirm">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
