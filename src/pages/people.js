import React, {Component} from 'react'
import styled from 'styled-components'
import {Link, Element} from 'react-scroll'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PersonBox from '../components/people/PersonBox'
import {H2} from '../components/atoms'
import {Container as MenuContainer, Li} from '../components/header/Navigation'
import {withLocalization} from '../components/localization.context'
import hajek from '../images/people/hajek.jpg'
import horsak from '../images/people/horsak.jpg'
import horsakova from '../images/people/horsakova.jpg'

// export const hajekInfo = {
//   name: 'Doc. Michal Hájek Ph.D.',
//   position: 'vedoucí pracovní skupiny',
//   description:
//     'Michal Hájek je docent v oboru botanika na Masarykově univerzitě v Brně, kde vede Pracovní skupinu pro výzkum rašelinišť. Jeho vědecký výzkum je zaměřen na diverzitu rašeliništní a luční vegetace a současné a historické činitele, které ji předurčují. Co má obzvláště rád, jsou fascinující vesmíry ostřicovomechových vápnitých slatinišť a extrémně druhově bohatých luk v Karpatech. Studoval obor Systematická botanika a ekologie na Universitě Palackého v Olomouci. Diplomovou práci o mokřadní vegetaci Bílých Karpat obhájil v roce 1997. Doktorská práce se zabývala vegetací prameništních slatinišť Západních Karpat ve vztahu k faktorům prostředí a byla obhájena v roce 2002. Od roku 2000 pracoval na Masarykově univerzitě jako odborný pracovník, od roku 2003 jako odborný asistent a později jako docent. Menší úvazek měl i na Botanickém ústavu Akademie věd České republiky. Je maskotem Centra aplikované ekologie rostlin, virtuálního společného pracoviště Ústavu botaniky a zoologie Masarykovy univerzity a Oddělení vegetační ekologie Botanického ústavu Akademie věd ČR.',
//   email: 'hajek@sci.muni.cz',
//   researchgate: 'https://www.researchgate.net/',
//   is: 'https://is.muni.cz/osoba/580',
//   phoneNumber: '+42549494010',
//   img: hajek
// }

const horsakInfo = {
  name: 'Prof. RNDr. Michal Horsák Ph.D.',
  position: '',
  description: 'Lorem ipsum dolor sit amet',
  email: 'horsak@sci.muni.cz',
  phoneNumber: '+420549494448',
  img: horsak
}

const phdInfo = {
  name: 'Mgr. Někdo Kdosi',
  position: '',
  description: '',
  email: 'email@sci.muni.cz',
  phoneNumber: '+420666333666',
  img: horsakova
}

const studentInfoA = {
  name: 'Stedent Kdosi',
  supervisor: 'Prof. RNDr. Michal Horsák Ph.D.',
  thesis:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus faucibus molestie nisl. Aliquam erat volutpat. Fusce tellus'
}

const Student = ({studentInfo}) => {
  return (
    <div style={{margin: '0.8em 0'}}>
      <div style={{fontWeight: 'bold'}}>{studentInfo.name}</div>
      <div>
        <span>
          <u>Supervizor</u>: {studentInfo.supervisor}
        </span>
      </div>
      <div>
        <span>
          <u>Thesis</u>: {studentInfo.thesis}
        </span>
      </div>
    </div>
  )
}

Student.propTypes = {
  studentInfo: PropTypes.object
}

class Staff extends Component {
  render() {
    const {data} = this.props
    if (!data && !data.markdownRemark) return <div>...loading</div>

    const {title, email, phone, position, description} = data.markdownRemark.frontmatter
    const hajekInfo = {
      name: title,
      position: position,
      description: description,
      email: email,
      researchgate: 'https://www.researchgate.net/',
      is: 'https://is.muni.cz/osoba/580',
      phoneNumber: phone,
      img: hajek
    }
    return (
      <Layout>
        <Container>
          <MenuContainer>
            <Li isVisible={true}>
              <StyledLink activeClass="active" to="staff" spy={true} smooth={true} duration={500}>
                {/* {people.staff} */}
              </StyledLink>
            </Li>
            <Li isVisible={true}>
              <StyledLink activeClass="active" to="PhD" spy={true} smooth={true} duration={500}>
                PhD Students
              </StyledLink>
            </Li>
            <Li isVisible={true}>
              <StyledLink activeClass="active" to="students" spy={true} smooth={true} duration={500}>
                Students
              </StyledLink>
            </Li>
          </MenuContainer>
          <Element name="staff" className="element">
            <H2>Staff</H2>
          </Element>
          <PersonBox personInfo={hajekInfo} />
          <PersonBox personInfo={horsakInfo} />
          <Element name="PhD" className="element">
            <H2>PhD Students</H2>
          </Element>
          <PersonBox personInfo={phdInfo} />
          <PersonBox personInfo={phdInfo} />
          <Element name="students" className="element">
            <H2>Students</H2>
          </Element>
          <Student studentInfo={studentInfoA} />
          <Student studentInfo={studentInfoA} />
        </Container>
    </Layout>
    )
  }
}

export default withLocalization(Staff)

export const peopleQuery = graphql`
  query peopleQuery {
    markdownRemark(frontmatter: {id: {eq: "hajek"}}) {
      frontmatter {
        title
        email
        phone
        position
        description
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`

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
