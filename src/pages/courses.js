import React from 'react'
import MainContainer from '../components/MainContainer'
import {courses} from '../content/courses'

const Courses = () => {
  const coursesList = courses.map(i => {
    return (<li key={i.name}>
      <a  target="_blank" rel="noopener noreferrer" href={i.link}>{i.name}</a>
    </li>);
  });

  return (
      <MainContainer>
        {coursesList}
      </MainContainer>
  )
}

export default Courses