import React, { useState } from 'react';

function MessageInput() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.log('Sending message:', message);
    // Add logic to send message to backend
  };

  return (
    <div className='message-input'>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Type a message...'
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default MessageInput;