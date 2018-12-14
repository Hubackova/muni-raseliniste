import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainContainer from "../MainContainer";
import H2 from "../atoms/H2";

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
      {publicationsList}
      <H2> {data.databases} </H2>
      {databasesList}
      <H2> {data.media} </H2>
      {mediaList}
      <H2> {data.popularization} </H2>
      {popularizationList}
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
