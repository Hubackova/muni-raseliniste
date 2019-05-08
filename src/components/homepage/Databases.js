import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import snail from "../../images/snail.png";
import plant from "../../images/plant.png";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
const Databases = ({ text }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allImageSharp(
          filter: { fluid: { src: { regex: "/topic/" } } }
          sort: { fields: [fluid___originalName], order: ASC }
        ) {
          edges {
            node {
              id
              fluid(maxWidth: 3200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => {
      const imgs = data.images.edges.map(i => i.node.fluid);
      const researches = [
        <TopicLink to="topic-mires" key="topic-mires">
          <Img fluid={imgs[3]} />
          {text.mireEcology}
        </TopicLink>,
        <TopicLink to="topic-paleo" key="topic-paleo">
        <Img fluid={imgs[1]} />
          {text.palaeoEcology}
        </TopicLink>,
        <TopicLink to="topic-relict" key="topic-relict">
        <Img fluid={imgs[2]} />
          {text.relictEcosystems}
        </TopicLink>,
        <TopicLink to="topic-crypto" key="topic-crypto">
          <Img fluid={imgs[0]} />
          {text.cryptogamology}
        </TopicLink>
      ];
      let researchesBox = researches.map((i, index) => (
        <div key={index} style={{ flex: 1, marginRight : 5 }}>
          {i}
        </div>
      ));

      return (
        <RightPanel>
          <strong>{text.mainTopics}</strong>
          <Research>{researchesBox}</Research>

          <p>
            <strong>{text.databases}</strong>
          </p>
          <p>
            <img src={plant} alt="plant" height="30em" />
            <StyledLink href="http://www.sci.muni.cz/botany/mirecol/paleo/en/">
              {text.plantDatabase}
            </StyledLink>
          </p>
          <p>
            <img src={snail} alt="snail" height="30em" />
            <StyledLink href="https://arcg.is/1yqyGH">{text.paleoDatabase}</StyledLink>
          </p>
          <p>
            <img src={plant} alt="plant" height="30em" />
            <StyledLink href="http://www.givd.info/ID/EU-00-022">
              {text.vegetationDatabase}
            </StyledLink>
          </p>
        </RightPanel>
      );
    }}
  />
);

export default Databases;

Databases.propTypes = {
  data: PropTypes.object
};

const Research = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
`;

const RightPanel = styled.div`
  flex: 1;
  border-left: 1px solid ${props => props.theme.grey};
  padding-left: 1em;
  padding-right: 1em;
  margin-left: 2em;
  line-height: 1em;
  @media (max-width: ${props => props.theme.largeDevice}) {
    margin: 0;
    border: 0;
    border-top: 1px solid ${props => props.theme.grey};
  }
`;

const StyledLink = styled.a`
  color: ${props => props.theme.main};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;

const TopicLink = styled(Link)`
  cursor: pointer,
  color: ${props => props.theme.grey};
  text-decoration: none;
  font-
  &:hover {
    text-decoration: ${props => (props.navigation ? "underline" : "none")};
    color: ${props => (props.navigation ? props.theme.grey : props.theme.secondary)};
  }
  &:focus {
    color: ${props => (props.navigation ? props.theme.secondary : props.theme.grey)};
  }
`;
const Ul = styled.ul`
  font-weight: bold;
`;

const ResearchComponent = ({ img, text }) => {
  return (
    <div>
      <div>{img}</div> {text}
    </div>
  );
};
