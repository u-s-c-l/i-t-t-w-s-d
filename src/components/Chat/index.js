import React from "react";

const Chat = () => {
  return (
    <div>
      <a
        id="chat_btn"
        href="/ChatRoom"
        className="bg-slate-50 w-28 flex justify-around rounded-3xl max-w-sm"
      >
        <i className="fa-solid fa-hand-holding-heart fa-2x"></i>
      </a>
    </div>
  );
};

export default Chat;
