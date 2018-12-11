import React from 'react';
import PropTypes from 'prop-types'; 
import Project from "./Project";
import CompletedProject from "./CompletedProject"
import { H2 } from "../atoms";

const Projects = ({projectsData}) => {
    const {currentProjectsList, completedProjectsList} = projectsData
    const currentProjects = currentProjectsList.map(i => {
        return <Project project={i} key={i.identification} projectsData={projectsData}/>
    })
    const completedProjects = completedProjectsList.map(i => {
        return <CompletedProject project={i} key={i.identification} projectsData={projectsData}/>
    })
    return (
        <div>
           <H2>{projectsData.currentProjects}</H2> 
            {currentProjects}
           <H2>{projectsData.completedProjects}</H2>
           {completedProjects}
        </div>
    );
};

export default Projects;

Projects.propTypes = {
    projectsData: PropTypes.object
  }
