import React, {Fragment} from "react"
import PropTypes from 'prop-types';
import styled from "styled-components";
import Layout from "../components/layout";
const courses = [
   {name: "Hydrobiologie (Bi0000)", lecteur: "Jan Helešic", link: "http://is.muni.cz"},
   {name: "Hydrobiologie (Bi0001)", lecteur: "Jan Helešic, Jindřiška Bojková", link: "http://is.muni.cz"},
   {name: "Hydrobiologie (Bi0002)", lecteur: "Jan Helešic", link: "http://is.muni.cz"}
]

const Courses = props => {
    const coursesList = courses.map(i => {
        return <li key={i.name}><A href={i.link}>{i.name}</A>. Vyučující: <i><strong>{i.lecteur}</strong></i></li>;
    })
    return (
    <Layout>
        <h1> Předměty </h1>
        {coursesList}
    </Layout>
    );
};

Courses.propTypes = {

};

export default Courses;

const A = styled.a`
        color: #333;
`;