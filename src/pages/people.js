import React, {Component} from 'react'
import {Consumer} from '../layouts/Context'
import styled from 'styled-components'
import People from '../components/people/People'
import {cz, en} from '../content/people'

class Staff extends Component {
  render() {
    return (
      <Consumer>
        {context => (
          <Container>
            <People int={context.int} data={context.int === "en" ? en : cz} />
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
