import React from "react"
import {Link} from "gatsby"
import styled from "styled-components";

const StyledLink = ({to, navigation, children}) => {
    return (
        <LinkStyled to={to} navigation={navigation}> {children} </LinkStyled>
    );
};

export default StyledLink;

const LinkStyled = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
  &:hover {
    text-decoration:  ${props => props.navigation ? 'underline' : 'none'};
    color: ${props => props.navigation ? props.theme.grey : props.theme.secondary};
  }
  &:focus {
    color: ${props => props.navigation ? props.theme.secondary : props.theme.grey};
  }
`;