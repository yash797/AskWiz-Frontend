import React from "react";
import Avatar from "../chatList/Avatar";

const ChatItem = (props) => {
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${props.user ? props.user : ""}`}
    >
      <div className="chat_item_content">
        <div className="chat__msg">{props.msg}</div>
        
      </div>
      <Avatar isOnline="active" image={props.image} />
    </div>
  );
};

export default ChatItem;