import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import MainContainer from '../components/MainContainer'
import {H2} from '../components/atoms'


const Courses = ({data}) => {
  if (!data && !data.markdownRemark) return <div>...loading</div>
  const {markdownRemark: courses} = data

  return (
      <MainContainer>
        <H2>Předměty</H2>
        <MarkdownStyles dangerouslySetInnerHTML={{__html: courses.html}} />
      </MainContainer>
  )
}

export default Courses

export const coursesQuery = graphql`
  query coursesQuery {
    markdownRemark(frontmatter: {title: {eq: "courses"}}) {
      html
      frontmatter {
        title
      }
    }
  }
`

const MarkdownStyles = styled.div`
`