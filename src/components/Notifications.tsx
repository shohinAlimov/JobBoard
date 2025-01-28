import React from "react";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
      <button onClick={onClose} className="close-btn">×</button>
    </div>
  );
};

export default Notification;
