import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import {StyledLink} from '../atoms'
import researchgate from '../../images/social-researchgate.png'
import is from '../../images/social-is.png'

class PersonBox extends Component {
  state = {showDetail: false}

  toggleShowDetail = () => {
    this.setState(prevState => ({
      showDetail: !prevState.showDetail
    }))
  }

  render() {
    const {personInfo} = this.props
    const {showDetail} = this.state
    const hasDetail = personInfo.description.length > 0
    return (
      <Fragment>
        <Box>
          <BoxPart style={{flex: 1, paddingLeft: 0}}>
            <div>{personInfo.img ? <img src={personInfo.img} alt={personInfo.name} height="265px" /> : <div style={{height: 265, width: 177, border: "1px solid black"}}></div>}</div>
          </BoxPart>
          <BoxPart style={{flex: 6, minWidth: 260}}>
            <Name>
              {personInfo.name}
              <div style={{fontSize: '0.7em', color: '#778899'}}>{personInfo.position}</div>
            </Name>
            <div>
              <P>
                <i className="fa fa-envelope fa-lg" style={{color: 'black', marginRight: 15}} />
                <StyledLink href={`mailto:${personInfo.email}` || '#'} to="#">
                  {' '}
                  {/*todo: make another type of Link instead of StyledLink*/}
                  <span>{personInfo.email}</span>
                </StyledLink>
              </P>
              {personInfo.phoneNumber && <P>
                <i className="fa fa-phone fa-lg" style={{marginRight: 15}} />
                {personInfo.phoneNumber}
              </P>}
              <P>
                <a href={personInfo.researchgate || '#'}>
                  <img src={researchgate} alt="researchgate" height="40px" />
                </a>
                <a href={personInfo.is || '#'}>
                  <img src={is} alt="is" height="40px" />
                </a>
              </P>
            </div>
            {!showDetail &&
              hasDetail && (
                <ArrowIcon onClick={() => this.toggleShowDetail()}>
                  <i className="fa fa-arrow-down" />
                  <ArrowText style={{color: 'red', cursor: 'pointer'}}> Show more...</ArrowText>
                </ArrowIcon>
              )}
          </BoxPart>
        </Box>
        {showDetail &&
          hasDetail && (
            <div style={{padding: '0 1em 1em 1em'}}>
              <div>{personInfo.description}</div>
              <ArrowIcon onClick={() => this.toggleShowDetail()}>
                <i className="fa fa-arrow-up" />
                <ArrowText style={{color: 'red', cursor: 'pointer'}}> Show less...</ArrowText>
              </ArrowIcon>
            </div>
          )}
      </Fragment>
    )
  }
}
export default PersonBox

PersonBox.propTypes = {
  personInfo: PropTypes.object
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
  @media (max-width: ${props => props.theme.largeDevice}) {
    padding: 0;
  }
`

const Name = styled.h3`
  color: ${props => props.theme.main};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 20px;
  border-bottom: 0.08em solid rgb(229, 229, 229);
`

const BoxPart = styled.div`
  padding: 0 1em;
`

const P = styled.p`
  margin: 10px 0px;
`

const ArrowIcon = styled.div`
  color: ${props => props.theme.grey};
  text-decoration: none;
  cursor: 'pointer'
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`

const ArrowText = styled.span`
  color: 'red',
  cursor: 'pointer';
`
