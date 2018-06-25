import React, {Component, Fragment} from "react";
import styled from "styled-components";

import img2 from "./images/img2.jpg";
import Project from "../components/project"

const project1 = {
    name: "Výzkum vodních bezobratlých na slatiništích moravsko-slovenského pomezí:gradienty prostředí vs. prostorová struktura",
    mainSolver: "Jindřiška Bojková",
    img: img2,
    description: "Vliv faktorů prostředí a schopnosti šíření na skladbu taxocenóz vodních bezobratlých v izolovaných prameništních slatiništích (The role of species sorting and dispersal in structuring the aquatic invertebrate assemblages of isolated spring fens)",
}

class Projects extends Component {
    render() {
        return (
<div style={{margin: '0 auto', width: '90%'}}>
  <h1> Soušasné projekty </h1>
<Container>
  <Project project={project1} />
  <Project project={project1} />
  <Project project={project1} />
  </Container>

  <h1> Dokončené projekty </h1>
      <Container>
  <Project project={project1} />
  <Project project={project1} />
</Container></div>
);
}}

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
