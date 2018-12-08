import React, { Component } from "react";
import { Consumer } from "../layouts/Context";
import MainContainer from "../components/MainContainer";
import Projects from "../components/projects/Projects";
import {projectsCz, projectsEn} from '../content/projects'



class ProjectsPage extends Component {
  state = { showAllIndex: 0 };

  render() {
    return (
      <Consumer>
        {context => (
          <MainContainer>
                          <Projects
              projectsData={context.int === "en" ? projectsEn : projectsCz}
            />
          </MainContainer>
        )}
      </Consumer>
    );
  }
}

export default ProjectsPage;
