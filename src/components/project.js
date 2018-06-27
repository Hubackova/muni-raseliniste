import React, {Component} from "react";
import styled from "styled-components";
import {withLocalization} from "./localization.context";

class Project extends Component {
    state = {showAll: false}

    toggleShowFulltext = () => {
      this.setState(prevState => ({
        showAll: !prevState.showAll
      }));
    }

    render() {
      const {project: {description}, project, showFulltext, showAllIndex} = this.props
      const shortDescription = description.substring(0, 300)
      const showFull = showAllIndex === project.index
      console.log(project.name, project.index, showAllIndex, showFull)
        return (
        <>
        <Name>{project.name}</Name>
        <Box>
            <Img src={project.img} alt={project.name}/>
            <RightWrapper>

            <div style={{color: '#778899'}}>{project.contributors}</div>
            <div><u>Funding</u>: {project.grant}</div>
            <div><u>Duration</u>: {project.duration}</div>
            <div style={{whiteSpace: 'pre-wrap', textAlign: 'justify'}}>
              <u>Project aims</u>:
              {showFull
                ? project.description
                : shortDescription
              }
            {!showFull && <span style={{color: 'red', cursor: 'pointer'}} onClick={() => showFulltext(project.index)}> Show more...</span>}</div>
            </RightWrapper>
        </Box>
        </>
);
}}
export default withLocalization(Project);

const Box = styled.div`
  line-height: 1.6em;
  margin-bottom: 1em;
  display: flex;
  max-width: 1400px;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    flex-wrap: wrap;
  }
`;

const RightWrapper = styled.div`
  line-height: 1.6em;
  margin-bottom: 1em;
  max-height: ${props => props.short ? '7em' : ''};
`;

const Name = styled.h3`
  color: #46ACC2;
  text-transform: uppercase;
  margin: 0;
  border-bottom: 0.08em solid rgb(229, 229, 229);
`

const Img = styled.img`
  float: left;
  height: 8em;
  margin: 1em 1em 1em 0;
`
