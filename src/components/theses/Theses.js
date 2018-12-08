import React from 'react'
import styled from 'styled-components'
import MainContainer from '../MainContainer'
import {H2} from '../atoms.js'

const Theses = ({thesesData}) => {
    const bachelorThesesList = thesesData.bachelorThesesList.map(i => {
        return (<li key={i.name}>
          <A href={i.link}>{i.name}</A>
        </li>);
      });
  const masterThesesList = thesesData.masterThesesList.map(i => {
    return (<li key={i.name}>
      <A href={i.link}>{i.name}</A>
    </li>);
  });

  return (
    <MainContainer>
        <div>{thesesData.mainText}</div>
        <li><A href={thesesData.bachelorBotanyLink}>{thesesData.bachelorBotany}</A></li>
        <li><A href={thesesData.bachelorZoologyLink}>{thesesData.bachelorZoology}</A></li>
        <li><A href={thesesData.masterBotanyLink}>{thesesData.masterBotany}</A></li>
        <li><A href={thesesData.masterZoologyLink}>{thesesData.masterZoology}</A></li>
      <H2> {thesesData.thesesExample} </H2>
      <b>{thesesData.bachelorTheses}</b>
     {bachelorThesesList}
     <br />
     <b>{thesesData.masterTheses}</b>
     {masterThesesList}
    </MainContainer>
  );
}

Theses.propTypes = {}

export default Theses

const A = styled.a`
  color: #333;
  text-decoration: none;
`
