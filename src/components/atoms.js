import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import {Link} from 'gatsby'

export const H2 = ({children}) => {
  return <H2Styled> {children} </H2Styled>
}

H2.propTypes = {
  children: PropTypes.node
}

const H2Styled = styled.h2`
  color: '#969696';
  border-bottom: 1px solid ${props => props.theme.grey};
`

export const StyledLink = ({to, navigation, children}) => {
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