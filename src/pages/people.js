import React, {Component} from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import StaffBox from "../components/staffBox"
import hajek from "./images/hajek.jpg";
import horsak from "./images/horsak.jpg";
import horsakova from "./images/horsakova.jpg";

const hajekInfo = {
    name: "Doc. Michal Hájek Ph.D.",
    position: "vedoucí pracovní skupiny",
    research: ["",
     ""],
    email: "hajek@sci.muni.cz",
    researchgate: 'https://www.researchgate.net/profile/Jan_Helesic2',
    is: 'https://is.muni.cz/osoba/580',
    phoneNumber: '+42549494010'
}

const horsakInfo = {
    name: "Prof. RNDr. Michal Horsák Ph.D.",
    position: "",
    research: [""],
    email: "horsak@sci.muni.cz",
    phoneNumber: '+420549494448'
}

const phdInfo = {
    name: "Mgr. Někdo Kdosi",
    position: "",
    research: [""],
    email: "email@sci.muni.cz",
    phoneNumber: '+420666333666'
}

const studentInfoA = {
    name: "Stedent Kdosi",
    supervisor: "Prof. RNDr. Michal Horsák Ph.D.",
    thesis: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus faucibus molestie nisl. Aliquam erat volutpat. Fusce tellus",
}

const Student = ({studentInfo}) => {
    return (
    <div style={{margin: '0.8em 0'}}>
        <div style={{fontWeight: 'bold'}}>{studentInfo.name}</div>
        <div><span><u>Supervizor</u>: {studentInfo.supervisor}</span></div>
        <div><span><u>Thesis</u>: {studentInfo.thesis}</span></div>
    </div>
    )
}

class Staff extends Component {
    render() {
        return (
        <Layout>
            <Container>
                <H1>Staff</H1>
                <StaffBox img={hajek} personInfo={hajekInfo} />
                <StaffBox img={horsak} personInfo={horsakInfo} />
                <H1>PhD Students</H1>
                <StaffBox img={horsakova} personInfo={phdInfo} />
                <StaffBox img={horsakova} personInfo={phdInfo} />
                <H1>Students</H1>
                <Student studentInfo={studentInfoA} />
                <Student studentInfo={studentInfoA} />
            </Container>
        </Layout>
        );
    }
}

export default Staff;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

const H1 = styled.h1`
  color: '#969696';
  border-bottom: 1px solid ${props => props.theme.grey};
`;
