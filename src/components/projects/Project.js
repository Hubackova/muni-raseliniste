import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

class Project extends Component {
  state = {showDetail: false}

  toggleShowDetail = () => {
    this.setState(prevState => ({
      showDetail: !prevState.showDetail
    }))
  }

  render() {
    const {
      project, projectsData
    } = this.props
    const {showDetail} = this.state
    const shortDescription = project.abstract.substring(0, 300)
    return (
      <Fragment>
        <Name>{project.title}</Name>
        <Box>
          <Img src={project.img} alt={project.title} />
          <RightWrapper>
            <div style={{color: '#778899'}}>{project.applicant || project.coapplicant}</div>
    
            <div>
              <u>{projectsData.identification}</u>: {project.identification}
            </div>
            <div>
              <u>{projectsData.duration}</u>: {project.duration}
            </div>
            <div>
              <u>{projectsData.investor}</u>: {project.investor}
            </div>
            <div style={{whiteSpace: 'pre-wrap', textAlign: 'justify'}}>
              <u>{projectsData.abstract}</u>: {showDetail ? project.abstract : shortDescription}
              {!showDetail && (
                <span style={{color: 'red', cursor: 'pointer'}} onClick={() => this.toggleShowDetail()}>
                  {projectsData.showMore}
                </span>
              )}
              {showDetail && (
                <div style={{color: 'red', cursor: 'pointer'}} onClick={() => this.toggleShowDetail()}>
                  {projectsData.showLess}
                </div>
              )}
            </div>
            <div>
              <u>{projectsData.link}</u>: <a href={project.link}>{project.link}</a>
            </div>
          </RightWrapper>
        </Box>
      </Fragment>
    )
  }
}
export default Project

Project.propTypes = {
  project: PropTypes.object
}

const Box = styled.div`
  line-height: 1.6em;
  margin-bottom: 1em;
  display: flex;
  max-width: 1400px;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    flex-wrap: wrap;
  }
`

const RightWrapper = styled.div`
  line-height: 1.6em;
  margin-bottom: 1em;
  max-height: ${props => (props.short ? '7em' : '')};
`

const Name = styled.h3`
  color: #46acc2;
  text-transform: uppercase;
  margin: 0;
  border-bottom: 0.08em solid rgb(229, 229, 229);
`

const Img = styled.img`
  float: left;
  height: 8em;
  margin: 1em 1em 1em 0;
`
