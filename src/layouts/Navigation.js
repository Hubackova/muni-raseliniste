import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import StyledLink from "../components/atoms/StyledLink";

const ListLink = ({ isVisible, to, children, className }) => (
  <Li isVisible={isVisible} className={className}>
    <StyledLink to={to} navigation={1}>
      {children}
    </StyledLink>
  </Li>
);

ListLink.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  to: PropTypes.string,
  className: PropTypes.string
};

const windowGlobal = typeof window !== "undefined" && window;

class Navigation extends Component {
  state = {
    isNavVisible: false,
    width: windowGlobal.innerWidth
  };

  componentDidMount() {
    windowGlobal.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: windowGlobal.innerWidth });
  };

  toggleMenu = () => {
    this.setState({ isNavVisible: !this.state.isNavVisible });
  };

  getClass = urlIncludes => {
    if (windowGlobal && windowGlobal.location && windowGlobal.location.href.includes(urlIncludes)) {
      return "active";
    } else return "";
  };

  render() {
    const { generalData, isIndex } = this.props;
    const { width, isNavVisible } = this.state;
    const isMobile = width <= 768;
    const isVisible = isNavVisible || !isMobile;
    return (
      <Container>
        <NavbarToggle onClick={this.toggleMenu}>
          <i className="fa fa-bars" />
        </NavbarToggle>
        <ListLink to="/" isVisible={isVisible} className={isIndex ? "active" : ""}>
          HomePage
        </ListLink>
        <ListLink to="/people/" isVisible={isVisible} className={this.getClass("people")}>
          {generalData.menu.menuPeople}
        </ListLink>
        <ListLink to="/projects/" isVisible={isVisible} className={this.getClass("projects")}>
          {generalData.menu.menuProjects}
        </ListLink>
        <ListLink to="/theses/" isVisible={isVisible} className={this.getClass("theses")}>
          {generalData.menu.menuTheses}
        </ListLink>
        <ListLink to="/courses/" isVisible={isVisible} className={this.getClass("courses")}>
          {generalData.menu.menuCourses}
        </ListLink>
        <ListLink to="/gallery/" isVisible={isVisible} className={this.getClass("gallery")}>
          {generalData.menu.menuGallery}
        </ListLink>
        <ListLink to="/links/" isVisible={isVisible} className={this.getClass("links")}>
          {generalData.menu.menuLinks}
        </ListLink>
      </Container>
    );
  }
}

export default Navigation;

Navigation.propTypes = {
  language: PropTypes.string,
  isIndex: PropTypes.bool,
  generalData: PropTypes.object
};

export const Container = styled.ul`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0 15px;
  margin-left: auto;
  padding: 0;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

export const Li = styled.li`
  display: ${props => (props.isVisible ? "flex" : "none")};
  height: 40px;
  flex: auto;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.grey};
  margin: 10px 10px;
  &:last-child {
    border-right: 0px;
  }
  @media (max-width: ${props => props.theme.mediumDevice}) {
    border: 0px;
  }
  &.active > a {
    color: black;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;
      height: 4px;
      background-color: ${props => props.theme.black};
      @media (max-width: ${props => props.theme.mediumDevice}) {
        height: 0px;
      }
    }
  }
`;

const NavbarToggle = styled(Li)`
  display: none;
  cursor: pointer;
  align-self: flex-end;
  font-size: 2em;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    display: flex;
    flex: 1;
  }
`;
