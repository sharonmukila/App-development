import React, { useState } from 'react';
import "./FileUploads.css"; // Import your CSS file
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function FileUploadForm() {
  const [fileData, setFileData] = useState({
    image: null,
    audio: null,
    video: null,
  });

  const handleFileUpload = (event, fileType) => {
    const file = event.target.files[0];
    setFileData({
      ...fileData,
      [fileType]: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add file upload logic here
    console.log(fileData);
  };

  return (
    <div className='navsss'>

    <Navbar/>
   
    <div className="file-upload-form">
   
      <h2>Upload Your Evidence..</h2>
      <form onSubmit={handleSubmit}>
        {/* Image file upload */}
        <div className="file-container">
          <label htmlFor="image" className="file-label">
            <i className="fas fa-image"></i> Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="image"
            onChange={(e) => handleFileUpload(e, 'image')}
            required
          />
          {fileData.image && (
            <img
              src={URL.createObjectURL(fileData.image)}
              alt="Uploaded Image"
              className="uploaded-file"
            />
          )}
        </div>

        {/* Audio file upload */}
        <div className="file-container">
          <label htmlFor="audio" className="file-label">
            <i className="fas fa-volume-up"></i> Upload Audio
          </label>
          <input
            type="file"
            accept="audio/*"
            name="audio"
            id="audio"
            onChange={(e) => handleFileUpload(e, 'audio')}
            required
          />
          {fileData.audio && (
            <audio
              controls
              className="uploaded-file"
            >
              <source
                src={URL.createObjectURL(fileData.audio)}
                type="audio/*"
              />
            </audio>
          )}
        </div>

        {/* Video file upload */}
        <div className="file-container">
          <label htmlFor="video" className="file-label">
            <i className="fas fa-video"></i> Upload Video
          </label>
          <input
            type="file"
            accept="video/*"
            name="video"
            id="video"
            onChange={(e) => handleFileUpload(e, 'video')}
            required
          />
          {fileData.video && (
            <video
              controls
              className="uploaded-file"
            >
              <source
                src={URL.createObjectURL(fileData.video)}
                type="video/*"
              />
            </video>
          )}
        </div>

        {/* Submit button */}
        <button type="submit" className="upload-button">
          <i className="fas fa-upload"></i> Upload Files
        </button>
      </form>

      
    </div>
    </div>
  );
}

export default FileUploadForm;