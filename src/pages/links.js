import React from "react"
import styled from "styled-components";
import Layout from "../components/layout";
import Container from "../components/container";

const popularization = [
   {name: "Kam se točí ulity (Vesmír 96, 343, 2017/6)", link: "https://vesmir.cz/cz/casopis/archiv-casopisu/2017/cislo-6/kam-se-toci-ulity.html"},
   {name: "Ekologie hlavních vegetačních formací na Zemi (Vesmír 88, 829, 2009/12)", link: "https://vesmir.cz/cz/casopis/archiv-casopisu/2009/cislo-12/ekologie-hlavnich-vegetacnich-formaci-zemi.html"},
]

const links = [
   {name: "odkazy", link: "https://is.muni.cz"},
	 {name: "média (naše skupina na ČT)", link: "https://is.muni.cz"},
	 {name: "rozhovory, odkazy na databáze", link: "https://is.muni.cz"},
]

const Popularization = props => {
    const popularizationList = popularization.map(i => {
        return <li key={i.name}><A href={i.link}>{i.name}</A></li>;
    })
    const linksList = links.map(i => {
        return <li key={i.name}><A href={i.link}>{i.name}</A></li>;
    })
    return (
    <Layout>
      <Container>
        <H2> Odkazy </H2>
        {linksList}
        <H2> Popularizační články </H2>
        {popularizationList}
    	</Container>
    </Layout>
    );
};

Popularization.propTypes = {

};

export default Popularization;

const A = styled.a`
        color: #333;
        text-decoration: none;
`;

const H2 = styled.h2`
  color: '#969696';
  border-bottom: 1px solid ${props => props.theme.grey};
`;
