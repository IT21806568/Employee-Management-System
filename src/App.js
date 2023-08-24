import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

const SubmissionLink = ({ linkTitle, dueDate, openModal }) => {
  return (
    <div className="submission-link">
      <p>{linkTitle}</p>
      <p>Due Date: {dueDate}</p>
      <button onClick={openModal}>Submit Work Here</button>
    </div>
  );
};

const UploadModal = ({ isOpen, closeModal, submitWork }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    submitWork(file);
    setFile(null);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Upload Modal">
      <h2>Upload Your Work</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={closeModal}>Cancel</button>
    </Modal>
  );
};

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const openModal = (link) => {
    setSelectedLink(link);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedLink(null);
  };

  const submitWork = (file) => {
    // Here you can implement the logic to handle the submitted file.
    // For example, you can upload the file to a server or perform any
    // necessary processing.
    console.log('File submitted:', file);

    closeModal(); // Close the modal after submission
  };

  const submissionLinks = [
    { linkTitle: 'Link 1', dueDate: '2023-08-25' },
    { linkTitle: 'Link 2', dueDate: '2023-09-01' },
    { linkTitle: 'Link 3', dueDate: '2023-09-10' },
    { linkTitle: 'Link 4', dueDate: '2023-09-15' },
  ];

  return (
    <div className="app">
      <h1>Employee Submission Links</h1>
      <div className="submission-links">
        {submissionLinks.map((link, index) => (
          <SubmissionLink
            key={index}
            linkTitle={link.linkTitle}
            dueDate={link.dueDate}
            openModal={() => openModal(link)}
          />
        ))}
      </div>
      <UploadModal isOpen={modalIsOpen} closeModal={closeModal} submitWork={submitWork} />
    </div>
  );
};

export default App;
