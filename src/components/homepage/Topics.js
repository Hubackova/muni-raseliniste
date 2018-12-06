import React from 'react'
import styled from 'styled-components'
import MainContainer from '../MainContainer'

const Topics = ({selectedTopic, selectTopic, data, results}) => {
    function getResults(results) {
        return results.map((i, index) => <li key={index}>{i}</li>)
    }
  return (
    <MainContainer>
      <div name="home" onClick={(e) => selectTopic(e)}>Back</div>
      {selectedTopic === 'mire' && (
        <React.Fragment>
          <h2>{data.mireEcology}</h2>
          <div>{data.mireEcologyText}</div>
          <h2>{data.mainResults}</h2>
          <div>{getResults(results.mireEcologyResults)}</div>
        </React.Fragment>
      )}
      {selectedTopic === 'palaeo' && (
        <React.Fragment>
          <h2>{data.palaeoEcology}</h2>
          <div>{data.palaeoEcologyText}</div>
          <h2>{data.mainResults}</h2>
          <div>{getResults(results.palaeoEcologyResults)}</div>
        </React.Fragment>
      )}
      {selectedTopic === 'relict' && (
        <React.Fragment>
          <h2>{data.relictEcosystems}</h2>
          <div>{data.relictEcosystemsText}</div>
          <h2>{data.mainResults}</h2>
          <div>{getResults(results.relictEcosystemsResults)}</div>
        </React.Fragment>
      )}
      {selectedTopic === 'crypto' && (
        <React.Fragment>
          <h2>{data.cryptogamology}</h2>
          <div>{data.cryptogamologyText}</div>
          <h2>{data.mainResults}</h2>
          <div>{getResults(results.cryptogamologyResults)}</div>
        </React.Fragment>
      )}
    </MainContainer>
  )
}

export default Topics


