import React from "react";

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
        <a href={project.link}>{project.link}</a>: 
      </div>
    </div>
  );
};

export default CompletedProject;
