import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainContainer from "../MainContainer";
import H2 from "../atoms/H2";
import Ul from "../atoms/Ul";

const Links = ({
  publicationsData,
  mediaData,
  popularizationData,
  databasesData,
  data
}) => {
  const publicationsList = publicationsData.map(i => {
    return (
      <li key={i.name}>
        <A target="_blank" rel="noopener noreferrer" href={i.link}>
          {i.name}
        </A>
      </li>
    );
  });
  const popularizationList = popularizationData.map(i => {
    return (
      <li key={i.name}>
        <A target="_blank" rel="noopener noreferrer" href={i.link}>
          {i.name}
        </A>
      </li>
    );
  });
  const mediaList = mediaData.map(i => {
    return (
      <li key={i.name}>
        <A target="_blank" rel="noopener noreferrer" href={i.link}>
          {i.name}
        </A>
      </li>
    );
  });
  const databasesList = databasesData.map(i => {
    return (
      <li key={i.name}>
        <A target="_blank" rel="noopener noreferrer" href={i.link}>
          {i.name}
        </A>
      </li>
    );
  });
  return (
    <MainContainer>
      <H2> {data.publications} </H2>
      <Ul>{publicationsList}</Ul>
      <H2> {data.databases} </H2>
      <Ul>{databasesList}</Ul>
      <H2> {data.media} </H2>
      <Ul>{mediaList}</Ul>
      <H2> {data.popularization} </H2>
      <Ul>{popularizationList}</Ul>
    </MainContainer>
  );
};

Links.propTypes = {
  publicationsData: PropTypes.object,
  mediaData: PropTypes.object,
  popularizationData: PropTypes.object,
  databasesData: PropTypes.object,
  data: PropTypes.object
};

export default Links;

const A = styled.a`
  color: #333;
  text-decoration: none;
`;
