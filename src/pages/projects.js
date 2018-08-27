import React, {Component} from "react";
import styled from "styled-components";

import img2 from "./images/img2.jpg";
import Container from "../components/container";
import Project from "../components/project"
import Layout from "../components/layout";
import H2 from "../components/atoms/h2";

const project1 = {
    name: "Diversity of mire vegetation in Europe",
    contributors: "Michal Hájek, Borja Jiménez-Alfaro, Martin Jiroušek, Tomáš Peterka",
    img: img2,
    grant: 'Grant GA 206/99/1240',
    duration: '1999 - 2004',
    description: ` Mire vegetation comprises FENS (Scheuchzerio-Caricetea) and BOGS (Oxycocco-Sphagnetea). In Europe, the classification of plant communities related to these habitats has been a continuous source of debate, and different classification concepts are generally applied at national or regional level. Thus we need to establish a consistent classification useful for comunication among scientists (e.g. plant ecologists) and nature conservation agencies (e. g. interpretation of the habitats of European conservation concern within the Natura 2000 network). Our main aims are:
1) To create a unique database with harmonized taxonomy for vegetation plot data collected from official databases, bibliographic references and unpublished data from insufficiently explored regions of Europe.
2) To develop a consistent and formalized classification of European mires at the alliance level.
3) To characterize the species composition and geographic distribution of the alliances.`,
}

const project2 = {
    name: "Diversity of mire vegetation in Europe 2",
    contributors: "Michal Hájek, Borja Jiménez-Alfaro, Martin Jiroušek, Tomáš Peterka",
    img: img2,
    grant: 'Grant GA 206/99/1240',
    duration: '1999 - 2004',
    description: ` Mire vegetation comprises FENS (Scheuchzerio-Caricetea) and BOGS (Oxycocco-Sphagnetea). In Europe, the classification of plant communities related to these habitats has been a continuous source of debate, and different classification concepts are generally applied at national or regional level. Thus we need to establish a consistent classification useful for comunication among scientists (e.g. plant ecologists) and nature conservation agencies (e. g. interpretation of the habitats of European conservation concern within the Natura 2000 network). Our main aims are:
1) To create a unique database with harmonized taxonomy for vegetation plot data collected from official databases, bibliographic references and unpublished data from insufficiently explored regions of Europe.
2) To develop a consistent and formalized classification of European mires at the alliance level.
3) To characterize the species composition and geographic distribution of the alliances.`,
}

class Projects extends Component {
    state = {showAllIndex: 0}

    render() {
        return (<Layout>
          <Container>
            <H2> Soušasné projekty </H2>
              <Project project={project1} />
            <H2> Dokončené projekty </H2>
              <Project project={project2} />
          </Container>
        </Layout>);
}}

export default Projects;
