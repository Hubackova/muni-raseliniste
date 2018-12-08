import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import MainContainer from '../components/MainContainer'
import {H2} from '../components/atoms'
import {courses} from '../content/courses'

const Courses = () => {
  const coursesList = courses.map(i => {
    return (<li key={i.name}>
      <a href={i.link}>{i.name}</a>
    </li>);
  });

  return (
      <MainContainer>
        {coursesList}
        
      </MainContainer>
  )
}

export default Courses