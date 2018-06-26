import React, {Component} from "react";
import styled from "styled-components";

class Project extends Component {
    render() {
      const {project} = this.props

        return (
        <Box>
            <Name>{project.name}</Name>
            <Img src={project.img} alt={project.name}/>
            <div style={{fontSize: '0.8em', color: '#778899'}}>{project.mainSolver}</div>
            <Description>{project.description}</Description>
        </Box>
);
}}
export default Project;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: 1em;
  line-height: 1.6em;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h3`
    color: #46ACC2;
    text-transform: uppercase;
    margin-top: 0;
    border-bottom: 0.08em solid rgb(229, 229, 229);
    text-align: center;
 `

  const Img = styled.img`
    max-height: 150px;
 `

 const Description = styled.div`
    text-align: center;
 `