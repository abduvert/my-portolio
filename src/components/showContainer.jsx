import React from 'react';
import '../App.css';

function ShowContainer({ project }) {
  return (
    <div className='cardContain'>
      <div className="img">
      <img src={project.image} alt={project.name} />
      </div>
      <div className="info">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
}

export default ShowContainer;
