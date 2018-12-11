import React from "react";
import PropTypes from "prop-types";

import MainContainer from "../components/MainContainer";
import { H2 } from "../components/atoms";
import Backarrow from "../components/atoms/Backarrow";

const GalleryContainer = ({ children, heading }) => {
  return (
    <MainContainer>
      <Backarrow to="/gallery/" />
      <H2>{heading} </H2>
      {children}
    </MainContainer>
  );
};

export default GalleryContainer;

GalleryContainer.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string
};
