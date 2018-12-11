import React from "react";
import PropTypes from 'prop-types';

const CompletedProject = ({projectsData, project}) => {
  return (
    <div style={{marginBottom: 20}}>
      <div>
        <b>{project.title}</b>
      </div>
      <div>
        <u>{projectsData.identification}</u>: {project.identification}
      </div>
      {project.coapplicant && <div>
        <u>{projectsData.coapplicant}</u>: {project.coapplicant}
      </div>}
      {project.applicant && <div>
        <u>{projectsData.applicant}</u>: {project.applicant}
      </div>}
      <div>
        <u>{projectsData.duration}</u>: {project.duration}
      </div>
      <div>
        <a  target="_blank" rel="noopener noreferrer" href={project.link}>{project.link}</a>: 
      </div>
    </div>
  );
};

CompletedProject.propTypes = {
  projectsData: PropTypes.object,
  project: PropTypes.object,
}

export default CompletedProject;
