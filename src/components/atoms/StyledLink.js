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
    text-decoration: none;
    &:hover {
      text-decoration: ${props => (props.navigation ? 'underline' : 'none')};
      color: ${props => (props.navigation ? props.theme.grey : props.theme.secondary)};
    }
    &:focus {
      color: ${props => (props.navigation ? props.theme.secondary : props.theme.grey)};
    }
  `
  export default StyledLink