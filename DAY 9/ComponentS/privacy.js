import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Last Updated: [Date]</p>

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy describes how [Your Company/Organization Name] ("we," "us," or "our") collects, uses, and shares information from users ("you" or "your") of the Crime Reporting Application (the "App"). We are committed to protecting your privacy and the security of your personal information.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        a. <strong>User-Provided Information</strong>: When you use the App, you may provide us with the following types of information:
      </p>
      <ul>
        <li>Personal Information: Your name, email address, and other contact information you provide.</li>
        <li>User Content: Information you submit, such as text, images, videos, and other content related to crime reports.</li>
      </ul>

      <p>
        b. <strong>Automatically Collected Information</strong>: We may collect certain information automatically when you use the App, including:
      </p>
      <ul>
        <li>Device Information: Information about your device, including device type, operating system, unique device identifiers, and mobile network information.</li>
        <li>Usage Information: Information about your use of the App, such as the date and time of your interactions, the features you use, and your interactions with other users.</li>
      </ul>

      {/* Include additional sections such as "How We Use Your Information," "Sharing Your Information," "Data Security," "Your Choices," and "Contact Us" here */}
    </div>
  );
};

export default PrivacyPolicy;
