import React, {Component} from 'react'
import {Consumer} from '../layouts/Context'
import styled from 'styled-components'
import People from '../components/people/People'
import {staffCz,staffEn} from '../content/staff'
import {studentsCz, studentsEn} from '../content/students'
import {cz, en} from '../content/general'
import { graphql } from 'gatsby'

class Staff extends Component {
  render() {
    debugger
    return (
      <Consumer>
        {context => (
          <Container>
            <People
              int={context.int}
              staffData={context.int === "en" ? staffEn : staffCz}
              studentsData={context.int === "en" ? studentsEn : studentsCz}
              data={context.int === "en" ? en : cz}
            />
          </Container>
        )}
      </Consumer>
    )
  }
}

export default Staff

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    sizes {
      src
            }
  }
}
`;

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "homepage/hp01.jpg" }) {
      ...fluidImage
    }

    image2: file(relativePath: { eq: "homepage/hp02.jpg" }) {
      ...fluidImage
    }

    image3: file(relativePath: { eq: "homepage/hp03.jpg" }) {
      ...fluidImage
    }

    image4: file(relativePath: { eq: "homepage/hp04.jpg" }) {
      ...fluidImage
    }

    image5: file(relativePath: { eq: "homepage/hp05.jpg" }) {
      ...fluidImage
    }

    image6: file(relativePath: { eq: "homepage/hp06.jpg" }) {
      ...fluidImage
    }

    image7: file(relativePath: { eq: "homepage/hp07.jpg" }) {
      ...fluidImage
    }

    image8: file(relativePath: { eq: "homepage/hp08.jpg" }) {
      ...fluidImage
    }

    image9: file(relativePath: { eq: "homepage/hp09.jpg" }) {
      ...fluidImage
    }

    image10: file(relativePath: { eq: "homepage/hp10.jpg" }) {
      ...fluidImage
    }
  }
`