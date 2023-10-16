import React, { useState, useEffect } from 'react';
import PrimarySearchAppBar from './Navbar';
import './Notification.css'; // Import your CSS file for styling

function Notification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate receiving random messages (replace with actual data)
    const interval = setInterval(() => {
      const allMessages = [
        'A new crime report has been submitted.',
        'Update: Investigation in progress for Case #12345.',
        'Crime report status changed to "Resolved" for Case #56789.',
        'Weather update: Clear skies in the city.',
        'Traffic alert: Road closures on Main Street.',
        'A new case has been opened for theft.',
        'Missing person case updated: Please review the details.',
        'Breaking news: Robbery reported at downtown bank.',
        'Suspicious activity reported near the park.',
        'Homicide investigation launched for Case #98765.',
        'Vandalism incident reported in the neighborhood.',
        'Assault case update: Additional witnesses needed.',
      ];

      // Filter messages related to the crime reporting app
      const crimeMessages = allMessages.filter((message) =>
        message.toLowerCase().includes('crime report')
      );

      if (crimeMessages.length > 0) {
        const randomIndex = Math.floor(Math.random() * crimeMessages.length);
        const randomMessage = crimeMessages[randomIndex];

        // Generate a random case number between 10000 and 99999
        const randomCaseNumber = Math.floor(Math.random() * 90000) + 10000;

        const timestamp = new Date().toLocaleTimeString();
        const newNotification = {
          message: randomMessage.replace(/#(\d+)/), // Replace the case number
          timestamp,
        };
        setNotifications([newNotification, ...notifications]);
      }
    }, 3000); // Simulate receiving a new message every 3 seconds

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [notifications]);

  return (
    <div>
      <PrimarySearchAppBar />
      <div className="notification-container">
        <h1>Crime Reporting Messages Live</h1>
        <div className="notifications-list">
          {notifications.map((notification, index) => (
            <div className="notification-container" key={index}>
              <div className="notification">
                <div className="notification-header">
                  <p className="notification-timestamp">{notification.timestamp}</p>
                </div>
                <p className="notification-message">{notification.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notification;