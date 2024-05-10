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

const sendMessage = async () => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_CHATGPT_CLONE_BACKEND_URL}/api/messages`, { message });
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Error sending message:', error.response.data);
    alert('Failed to send message. Please try again.');
  }
};

export default Chat;