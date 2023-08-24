import React from 'react';
import { Link } from 'react-router-dom';

const SubmissionLink = () => {
  const submissionLinks = [
    { id: 1, title: 'Project 1', link: '/submission/project1' },
    { id: 2, title: 'Project 2', link: '/submission/project2' },
    // Add more submission links as needed
  ];

  return (
    <div>
      <h1>Submission Links</h1>
      <ul>
        {submissionLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionLinks;
