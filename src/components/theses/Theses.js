import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import MainContainer from '../MainContainer'
import {H2} from '../atoms.js'

const Theses = ({thesesData}) => {
    const bachelorThesesList = thesesData.bachelorThesesList.map(i => {
        return (<li key={i.name}>
          <A target="_blank" rel="noopener noreferrer" href={i.link}>{i.name}</A>
        </li>);
      });
  const masterThesesList = thesesData.masterThesesList.map(i => {
    return (<li key={i.name}>
      <A target="_blank" rel="noopener noreferrer" href={i.link}>{i.name}</A>
    </li>);
  });

  return (
    <MainContainer>
        <div>{thesesData.mainText}</div>
        <br/>
        <div><a target="_blank" rel="noopener noreferrer" href={thesesData.bachelorBotanyLink}> {thesesData.bachelorBotany}</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href={thesesData.bachelorZoologyLink}> {thesesData.bachelorZoology}</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href={thesesData.masterBotanyLink}> {thesesData.masterBotany}</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href={thesesData.masterZoologyLink}> {thesesData.masterZoology}</a></div>
        <br/>
      <H2> {thesesData.thesesExample} </H2>
      <b>{thesesData.bachelorTheses}</b>
     {bachelorThesesList}
     <br />
     <b>{thesesData.masterTheses}</b>
     {masterThesesList}
    </MainContainer>
  );
}

Theses.propTypes = {
  thesesData: PropTypes.object
}

export default Theses

const A = styled.a`
  color: #333;
  text-decoration: none;
`
