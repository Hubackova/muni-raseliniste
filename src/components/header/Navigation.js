import React, {Component} from 'react'
import styled from 'styled-components'

import StyledLink from '../atoms/styledLink'

const ListLink = props => (
  <Li visible={props.visible}>
    <StyledLink to={props.to} navigation={1}>
      {props.children}
    </StyledLink>
  </Li>
)

const windowGlobal = typeof window !== 'undefined' && window

class Navigation extends Component {
  state = {
    visible: false,
    width: windowGlobal.innerWidth
  }

  componentDidMount() {
    windowGlobal.addEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({width: windowGlobal.innerWidth})
  }

  toggleMenu = () => {
    this.setState({visible: !this.state.visible})
  }

  render() {
    const isMobile = this.state.width <= 768
    const visible = this.state.visible || !isMobile
    return (
      <Container>
        <NavbarToggle onClick={this.toggleMenu}>
          <i className="fa fa-bars" />
        </NavbarToggle>
        <ListLink to="/" visible={visible}>
          HomePage
        </ListLink>
        <ListLink to="/people/" visible={visible}>
          People
        </ListLink>
        <ListLink to="/projects/" visible={visible}>
          Projects
        </ListLink>
        <Li visible={visible}>Theses</Li>
        <ListLink to="/publications/" visible={visible}>
          Publications
        </ListLink>
        <ListLink to="/courses/" visible={visible}>
          Courses
        </ListLink>
        <ListLink to="/gallery/" visible={visible}>
          Gallery
        </ListLink>
        <ListLink to="/links/" visible={visible}>
          Links
        </ListLink>
      </Container>
    )
  }
}

export default Navigation

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
  display: ${props => (props.visible ? 'flex' : 'none')};
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
