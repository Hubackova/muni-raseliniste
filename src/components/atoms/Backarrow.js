import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

const Backarrow = ({ to, ...props }) => {
  return (
    <BackArrow>
      <LinkStyled to={to} {...props}>
        <span>←</span>Back
      </LinkStyled>
    </BackArrow>
  );
};

export default Backarrow;

Backarrow.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  afterElement: PropTypes.node
};

const LinkStyled = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
`;

const BackArrow = styled.div`
  cursor: pointer;
  margin-left: 7px;
  &:hover {
    margin-left: 0;
    span {
      margin-right: 7px;
      font-weight: bold;
    }
  }
  span {
    margin-right: 3px;
  }
`