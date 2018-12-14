import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import {Link} from 'gatsby'

const StyledLink = ({to, navigation, children}) => {
    return (
      <LinkStyled to={to} navigation={navigation}>
        {children}
      </LinkStyled>
    )
  }
  
  StyledLink.propTypes = {
      children: PropTypes.node,
      navigation: PropTypes.number,
      to: PropTypes.string
    }
  
  const LinkStyled = styled(Link)`
  color: ${props => props.theme.grey};
  padding: 10px;
  cursor: pointer;
  transform: translateZ(0);
  backface-visibility: hidden;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    top: 0;
    height: 4px;
    background-color: ${props => props.theme.green};
    transition-property: right;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    @media (max-width: ${props => props.theme.mediumDevice}) {
      height: 0px
    }
  }
  &:hover:before {
    right: 0;
  }
  &:hover, &:focus {
    color: black;
  }
  &:active { 
    background-color: yellow;
  }
  `
  export default StyledLink