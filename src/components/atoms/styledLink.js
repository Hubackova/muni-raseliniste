import React from "react"
import {Link} from "gatsby"
import styled from "styled-components";

const StyledLink = ({to, children}) => {
    return (
        <LinkStyled to={to}> {children} </LinkStyled>
    );
};

const H2Styled = styled.h2`
  color: '#969696';
  border-bottom: 1px solid ${props => props.theme.grey};
`;

export default StyledLink;

const LinkStyled = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
  &:hover, &:focus {
    color: ${props => props.theme.secondary};
  }
`;