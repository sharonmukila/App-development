// import React, { useState, useEffect } from 'react';
// import PrimarySearchAppBar from './Navbar';
// import './Chat.css'; // Import your CSS file for styling

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [initialAdminMessageSent, setInitialAdminMessageSent] = useState(false);

//   useEffect(() => {
//     // Simulate receiving random messages (replace with actual data)
//     const interval = setInterval(() => {
//       if (initialAdminMessageSent) {
//         const allMessages = [
//           { sender: 'user', text: 'User message 1' },
//           { sender: 'admin', text: 'Admin message 1' },
//           { sender: 'user', text: 'User message 2' },
//           { sender: 'admin', text: 'Admin message 2' }
//           // Add more messages here as needed
//         ];

//         const randomIndex = Math.floor(Math.random() * allMessages.length);
//         const randomMessage = allMessages[randomIndex];

//         setMessages([...messages, randomMessage]);
//       }
//     }, 3000); // Simulate receiving a new message every 3 seconds

//     // Cleanup the interval on unmount
//     return () => clearInterval(interval);
//   }, [messages, initialAdminMessageSent]);

//   const handleInputChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (!initialAdminMessageSent) {
//       // Send the initial admin message
//       const adminMessage = { sender: 'admin', text: 'Hi there! How can I assist you today?' };
//       setMessages([...messages, adminMessage]);
//       setInitialAdminMessageSent(true);
//     } else if (newMessage.trim() !== '') {
//       const userMessage = { sender: 'user', text: newMessage };
//       setMessages([...messages, userMessage]);
//       setNewMessage('');

//       // Simulate an admin response after a delay (e.g., 2 seconds)
//       setTimeout(() => {
//         const adminMessage = { sender: 'admin', text: 'Thank you for your message! We will get back to you shortly.' };
//         setMessages([...messages, adminMessage]);
//       }, 2000); // Simulate a 2-second delay before the admin responds
//     }
//   };

//   return (
//     <div>
//      <PrimarySearchAppBar/>
//       <div className="chat-container">
//         <h1>User-Admin Chat</h1>
//         <div className="chat-messages">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={message ${message.sender === 'user' ? 'user' : 'admin'}}
//             >
//               {message.text}
//             </div>
//           ))}
//         </div>
//         <div className="message-input">
//           <input
//             type="text"
//             placeholder="Type your message..."
//             value={newMessage}
//             onChange={handleInputChange}
//           />
//           <button onClick={handleSendMessage}>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chat;