import React from "react"
import styled from "styled-components";
import Layout from "../components/layout";
import Container from "../components/container";

const courses = [
   {name: "Ekologie rašelinišť - cvičení  (Bi8179)", lecteur: "doc. Mgr. Michal Hájek, Ph.D., prof. RNDr. Michal Horsák, Ph.D.", link: "http://is.muni.cz"},
   {name: "Ekologie rašelinišť (Bi0001)", lecteur: "doc. Mgr. Michal Hájek, Ph.D.", link: "http://is.muni.cz"},
]

const Courses = props => {
    const coursesList = courses.map(i => {
        return <li key={i.name}><A href={i.link}>{i.name}</A>. Vyučující: <i><strong>{i.lecteur}</strong></i></li>;
    })
    return (
    <Layout>
        <Container>
            <ul style={{marginTop: 20}}>
                {coursesList}
            </ul>
        </Container>
    </Layout>
    );
};

export default Courses;

const A = styled.a`
        color: #333;
`;