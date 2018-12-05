import React, {Component} from 'react'
import {Consumer} from '../layouts/Context'
import styled from 'styled-components'
import People from '../components/people/People'
import {staffCz,staffEn} from '../content/staff'
import {studentsCz, studentsEn} from '../content/students'

class Staff extends Component {
  render() {
    return (
      <Consumer>
        {context => (
          <Container>
            <People
              int={context.int}
              staffData={context.int === "en" ? staffEn : staffCz}
              studentsData={context.int === "en" ? studentsEn : studentsCz}
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
