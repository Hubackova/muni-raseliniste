import React, {Component} from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import StaffBox from "../components/staffBox"
import hajek from "./images/hajek.jpg";
import horsak from "./images/horsak.jpg";
import horsakova from "./images/horsakova.jpg";
import H2 from "../components/atoms/h2";

export const hajekInfo = {
    name: "Doc. Michal Hájek Ph.D.",
    position: "vedoucí pracovní skupiny",
    description: 'Michal Hájek je docent v oboru botanika na Masarykově univerzitě v Brně, kde vede Pracovní skupinu pro výzkum rašelinišť. Jeho vědecký výzkum je zaměřen na diverzitu rašeliništní a luční vegetace a současné a historické činitele, které ji předurčují. Co má obzvláště rád, jsou fascinující vesmíry ostřicovomechových vápnitých slatinišť a extrémně druhově bohatých luk v Karpatech. Studoval obor Systematická botanika a ekologie na Universitě Palackého v Olomouci. Diplomovou práci o mokřadní vegetaci Bílých Karpat obhájil v roce 1997. Doktorská práce se zabývala vegetací prameništních slatinišť Západních Karpat ve vztahu k faktorům prostředí a byla obhájena v roce 2002. Od roku 2000 pracoval na Masarykově univerzitě jako odborný pracovník, od roku 2003 jako odborný asistent a později jako docent. Menší úvazek měl i na Botanickém ústavu Akademie věd České republiky. Je maskotem Centra aplikované ekologie rostlin, virtuálního společného pracoviště Ústavu botaniky a zoologie Masarykovy univerzity a Oddělení vegetační ekologie Botanického ústavu Akademie věd ČR.',
    email: "hajek@sci.muni.cz",
    researchgate: 'https://www.researchgate.net/profile/Jan_Helesic2',
    is: 'https://is.muni.cz/osoba/580',
    phoneNumber: '+42549494010',
    img:hajek
}

const horsakInfo = {
    name: "Prof. RNDr. Michal Horsák Ph.D.",
    position: "",
    description: "",
    email: "horsak@sci.muni.cz",
    phoneNumber: '+420549494448',
    img:horsak
}

const phdInfo = {
    name: "Mgr. Někdo Kdosi",
    position: "",
    description: "",
    email: "email@sci.muni.cz",
    phoneNumber: '+420666333666',
    img:horsakova
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
                <H2>Staff</H2>
                <StaffBox personInfo={hajekInfo} />
                <StaffBox personInfo={horsakInfo} />
                <H2>PhD Students</H2>
                <StaffBox personInfo={phdInfo} />
                <StaffBox personInfo={phdInfo} />
                <H2>Students</H2>
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
