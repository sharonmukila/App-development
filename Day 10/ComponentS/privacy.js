import React from 'react';
import Footer from './Footer';
import NavbarLand from './NavbarLand';

const PrivacyPolicy = () => {
  return (
    <div className='ret'>

  
    <div>
      <NavbarLand/>
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Last Updated: [25/09/2023]</p>

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

      <h2>3. How We Use Your Information</h2>
      <p>
        We use the information collected to provide, maintain, and improve the App. This includes processing crime reports, communicating with you, and enhancing user experience.
      </p>

      <h2>4. Sharing Your Information</h2>
      <p>
        We may share your information with law enforcement agencies and authorized personnel for the purpose of investigating and addressing reported crimes.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement security measures to protect your data, but no method of transmission over the internet is entirely secure. You are responsible for keeping your login credentials confidential.
      </p>

      <h2>6. Your Choices</h2>
      <p>
        You can manage your personal information through your account settings. You may also contact us to access, update, or delete your data.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at [Contact Email/Phone].
      </p>
    </div>
    <Footer/>
    </div>
    
    </div>
  );
};

export default PrivacyPolicy;