import React, { useState } from "react";
import "./MessageRequestDashboard.css";

const MessageRequestDashboard = () => {
  const [requests, setRequests] = useState(5);

  return (
    <div className="message-request-container">
      <h1>Message Requests</h1>
      
      <p>You have {requests} pending message requests.</p>
      <button onClick={() => setRequests(0)}>Clear requests</button>
    </div>
  );
};

export default MessageRequestDashboard;


