import React, {Component} from 'react'
import PersonBox from './PersonBox'
import H2 from '../atoms/H2'
import PropTypes from 'prop-types'
import {Link, Element} from 'react-scroll'
import {Container as MenuContainer, Li} from '../../layouts/Navigation'
import styled from 'styled-components'

class People extends Component {
  render() {
    const {staffData, studentsData, data} = this.props
    const people = staffData.map(i => <PersonBox personInfo={i} key={i.id} data={data}/>)
    const students = studentsData.map(i => <PersonBox personInfo={i} key={i.id} data={data}/>)
    return (
      <React.Fragment>
        <MenuContainer>
          <Li isVisible={true}>
            <StyledLink activeClass="active" to="staff" spy={true} smooth={true} duration={500}>
              {data.staff}
            </StyledLink>
          </Li>
          <Li isVisible={true}>
            <StyledLink activeClass="active" to="PhD" spy={true} smooth={true} duration={500}>
            {data.phD}
            </StyledLink>
          </Li>
        </MenuContainer>

        <Element name="staff" className="element">
          <H2>{data.staff}</H2>
        </Element>
        {people}
        <Element name="PhD" className="element">
          <H2>{data.phD}</H2>
        </Element>
        {students}
      </React.Fragment>
    )
  }
}

export default People

People.propTypes = {
  data: PropTypes.object,
  studentsData: PropTypes.object,
  staffData: PropTypes.object,
}

const StyledLink = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`
