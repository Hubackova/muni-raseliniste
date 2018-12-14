import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContainerWrapper = ({ children }) => {
  return <Containerwrapper>{children}</Containerwrapper>;
};

export default ContainerWrapper;

const Containerwrapper = styled.div`
  display: flex;
  margin: 0 50px;
  @media (max-width: ${props => props.theme.largeDevice}) {
    margin: 0 15px;
    flex-wrap: wrap;
  }
`;

ContainerWrapper.propTypes = {
  children: PropTypes.node
};
