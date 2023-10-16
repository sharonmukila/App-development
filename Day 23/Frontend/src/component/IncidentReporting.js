import React, { useState } from 'react';
import './IncidentReporting.css'; // Import your CSS for styling
import { FaCalendar, FaMapMarker, FaExclamationTriangle, FaUser } from 'react-icons/fa';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function IncidentReportingForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    crimeType: '',
    description: '',
    role: '', // Victim or Witness
    name: '',
    contact: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server).
    // You can also validate the data before submission.
    console.log(formData);
    // Reset the form or show a success message as needed
  };

  return (
    <div className='imgw'>
      <Navbar/>

      <h2><FaExclamationTriangle /> Crime Incident Reporting</h2>
    
    <div className="incident-reporting-form">
      <div className="ic">

      </div>
      <form onSubmit={handleSubmit}>
        {/* Date and Time */}
        <div className="form-section">
          <FaCalendar />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="Date"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            placeholder="Time"
            required
          />
        </div>
        {/* Location */}
        <div className="form-section">
          <FaMapMarker />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
            required
          />
        </div>
        {/* Crime Type */}
        <div className="form-section">
          <FaExclamationTriangle />
          <select
            name="crimeType"
            value={formData.crimeType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Crime Type</option>
            <option value="theft">Theft</option>
            <option value="assault">Assault</option>
            <option value="vandalism">Vandalism</option>
            <option value="Burglary">Burglary</option>
            <option value="Robbery">Robbery</option>
            <option value="Fraud">Fraud</option>
            <option value="Homicide">Homicide</option>
            <option value="Kidnapping">Kidnapping</option>
            <option value="Homicide">Homicide</option>
            <option value="Drug Trafficking">Drug Trafficking</option>
            <option value="Cybercrime"> Cybercrime</option>
            <option value="Arson"> Arson</option>
            <option value="Domestic Violence"> Domestic Violence</option>
            <option value="Shoplifting"> Shoplifting</option>
            <option value="Forgery">Forgery</option>
            <option value="Stalking"> Stalking</option>
            <option value="Child Abuse"> Child Abuse</option>
            <option value="Public Intoxication"> Public Intoxication</option>
            <option value="others"> others</option>
     
,
    
          </select>
        </div>
        {/* Description */}
        <div className="form-section">
          <FaUser />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description of the Incident"
            rows="4"
            required
          />
        </div>
        {/* Role (Victim or Witness) */}
        <div className="form-section">
          <label>
            <input
              type="radio"
              name="role"
              value="victim"
              onChange={handleInputChange}
            />
            Victim
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="witness"
              onChange={handleInputChange}
            />
            Witness
          </label>
        </div>
        {/* Name and Contact */}
        <div className="form-section">
          <FaUser />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Your Contact"
            required
          />
        </div>
        {/* Submit Button */}
        <div className="form-section">
        <Link to="/FileUploadForm">
          
            <button type="submit">Next</button>
          </Link>
        </div>
      </form>
    </div>
       </div>
  );
}

export default IncidentReportingForm;
