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
        <div><A href={thesesData.bachelorBotanyLink}>→ {thesesData.bachelorBotany}</A></div>
        <div><A href={thesesData.bachelorZoologyLink}>→ {thesesData.bachelorZoology}</A></div>
        <div><A href={thesesData.masterBotanyLink}>→ {thesesData.masterBotany}</A></div>
        <div><A href={thesesData.masterZoologyLink}>→ {thesesData.masterZoology}</A></div>
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
