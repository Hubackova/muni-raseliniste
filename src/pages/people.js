import React, {Component} from 'react'
import {Consumer} from "../layouts/Context";
import styled from 'styled-components'
import {graphql} from 'gatsby'
import Layout from '../layouts'
import People from '../components/people/People'


class Staff extends Component {
  render() {
    const {data} = this.props
    if (!data || !data.allPeopleJson) return <div>...loading</div>

    return (
        <Consumer>{context =>
        <Container>
          <People int={context.int} data={data} />
        </Container>
        }</Consumer>
    )
  }
}

export default Staff

export const IndexQuery = graphql`
  query PeopleQuery {
    allPeopleJson {
      edges {
        node {
          language
          hajek {
            id
            position
            title
            email
            description
            phone
          }
        }
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
