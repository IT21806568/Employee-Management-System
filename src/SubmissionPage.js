import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SubmissionPage = () => {
  const { projectId } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Perform the file upload logic here using APIs
    }
  };

  return (
    <div>
      <h1>Submit Your Project</h1>
      <p>Project ID: {projectId}</p>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default SubmissionPage;
