import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import {StyledLink} from '../components/atoms'

const ListLink = ({isVisible, to, children}) => (
  <Li isVisible={isVisible}>
    <StyledLink to={to} navigation={1}>
      {children}
    </StyledLink>
  </Li>
)

ListLink.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  to: PropTypes.string
}

const windowGlobal = typeof window !== 'undefined' && window

class Navigation extends Component {
  state = {
    isVisible: false,
    width: windowGlobal.innerWidth
  }

  componentDidMount() {
    windowGlobal.addEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({width: windowGlobal.innerWidth})
  }

  toggleMenu = () => {
    this.setState({isVisible: !this.state.isVisible})
  }

  render() {
    const {data} = this.props
    const isMobile = this.state.width <= 768
    const isVisible = this.state.isVisible || !isMobile
    return (
      <Container>
        <NavbarToggle onClick={this.toggleMenu}>
          <i className="fa fa-bars" />
        </NavbarToggle>
        <ListLink to="/" isVisible={isVisible}>
          HomePage
        </ListLink>
        <ListLink to="/people/" isVisible={isVisible}>
          {data.menuPeople}
        </ListLink>
        <ListLink to="/projects/" isVisible={isVisible}>
        {data.menuProjects}
        </ListLink>
        <ListLink to="/theses/" isVisible={isVisible}>
          {data.menuTheses}
        </ListLink>
        <ListLink to="/courses/" isVisible={isVisible}>
          {data.menuCourses}
        </ListLink>
        <ListLink to="/gallery/" isVisible={isVisible}>
          {data.menuGallery}
        </ListLink>
        <ListLink to="/links/" isVisible={isVisible}>
          {data.menuLinks}
        </ListLink>
      </Container>
    )
  }
}

export default Navigation

Navigation.propTypes = {
  language: PropTypes.string,
  isIndex: PropTypes.bool
}

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
`

export const Li = styled.li`
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  height: 40px;
  flex: auto;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.grey};
  padding: 0px 10px;
  border-right: 1px solid ${props => props.theme.grey};
  &:last-child {
    border-right: 0px;
  }
  @media (max-width: ${props => props.theme.mediumDevice}) {
    border: 0px;
  }
`

const NavbarToggle = styled(Li)`
  display: none;
  cursor: pointer;
  align-self: flex-end;
  font-size: 2em;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    display: flex;
    flex: 1;
  }
`
