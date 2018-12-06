import React from 'react'
import snail from '../../images/snail.png'
import plant from '../../images/plant.png'
import styled from 'styled-components'

const Databases = () => {
  return (
    <Section>
            <p>
          <strong>Databases</strong>
        </p>
        <p>
          <img src={plant} alt="plant" height="30em" />
          <StyledLink href="http://is.muni.cz">Macrofossils</StyledLink>
        </p>
        <p>
          <img src={snail} alt="snail" height="30em" />
          <StyledLink href="http://is.muni.cz">Palaeo-profiles</StyledLink>
        </p>
        <p>
          <img src={plant} alt="plant" height="30em" />
          <StyledLink href="http://is.muni.cz">Vegetation</StyledLink>
        </p>
    </Section>
  )
}

export default Databases

  const StyledLink = styled.a`
  color: ${props => props.theme.main};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`

const Section = styled.section`
  flex: 1;
  border-left: 1px solid ${props => props.theme.grey};
  padding-left: 1em;
  padding-right: 1em;
  margin-left: 2em;
  line-height: 1em;
  min-width: 250px;
  @media (max-width: ${props => props.theme.largeDevice}) {
    margin: 0;
    border: 0;
    border-top: 1px solid ${props => props.theme.grey};
  }
`
