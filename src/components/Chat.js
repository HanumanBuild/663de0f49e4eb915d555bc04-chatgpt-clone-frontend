import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function Chat() {
  return (
    <div className='chat-container'>
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default Chat;