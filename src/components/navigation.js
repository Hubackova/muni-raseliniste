import React, { Component } from 'react';
import styled from "styled-components";
import Link from "gatsby-link"

const ListLink = props =>
  <Li menuVisible={props.menuVisible}>
    <StyledLink to={props.to}>
      {props.children}
    </StyledLink>
  </Li>

const windowGlobal = typeof window !== 'undefined' && window

class Navigation extends Component {
  state = {
    menuVisible: false,
    width: windowGlobal.innerWidth,
  };

  componentDidMount() {
    windowGlobal.addEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: windowGlobal.innerWidth });
  };

  toggleMenu = () => {
    this.setState({menuVisible: !this.state.menuVisible});
  }

    render() {
      const isMobile = this.state.width <= 768;
      const menuVisible = this.state.menuVisible || !isMobile
        return (
          <Container>
            <NavbarToggle onClick={this.toggleMenu}>
              <i className="fa fa-bars"></i>
            </NavbarToggle>
            <ListLink to="/" menuVisible={menuVisible}>HomePage</ListLink>
            <ListLink to="/people/" menuVisible={menuVisible}>People</ListLink>
            <ListLink to="/projects/" menuVisible={menuVisible}>Projects</ListLink>
            <Li menuVisible={menuVisible}>Theses</Li>
            <ListLink to="/publications/" menuVisible={menuVisible}>Publications</ListLink>
            <ListLink to="/courses/"  menuVisible={menuVisible}>Courses</ListLink>
            <Li menuVisible={menuVisible}>Gallery</Li>
            <ListLink to="/links/" menuVisible={menuVisible}>Links</ListLink>
          </Container>
        )
    }
}

export default Navigation;

const Container = styled.ul`
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    margin-left: auto;
    padding: 0;
    @media (max-width: ${props => props.theme.mediumDevice}) {
      flex-direction: column;
      text-align: center;
      width: 100%
    }
`;

const Li = styled.li`
    display: ${props => props.menuVisible ? 'flex' : 'none'};
    height: 40px;
    flex: auto;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.grey};
    padding: 0px 10px;
    border-right: 1px solid black;
    &:last-child {
      border-right: 0px;
    }
    @media (max-width: ${props => props.theme.mediumDevice}) {
      border: 0px;
    }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;

const NavbarToggle  = styled(Li)`
  display: none;
  cursor: pointer;
  align-self: flex-end;
  font-size: 2em;
  @media (max-width: ${props => props.theme.mediumDevice}) {
      display: flex;
      flex: 1;
  }
`;
