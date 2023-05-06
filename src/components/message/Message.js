// import React from 'react'
import "./message.css"
import ChatListItems from './chatList/ChatListItems'
// import ChatList from "./chatList/chatList"
import ChatList from "./chatList/chatList"
import ChatContent from "./chatContent/ChatContent"
import UserProfile from "./userProfile/MessageRequestDashboard"
import MessageRequestDashboard from "./userProfile/MessageRequestDashboard"




const Message = () => {
  return (
    <div className="message-main">
      <div className="message__contents">
        <div className="message__content">
        <ChatList/>
      <ChatContent/>
      {/* <UserProfile/> */}
      <MessageRequestDashboard/>
          </div>
        </div>
      </div>
      
      
      
    
  
  )
}

export default Message