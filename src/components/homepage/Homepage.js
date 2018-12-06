import React from 'react';
import MainContainer from '../MainContainer'
import styled from 'styled-components'

const Homepage = ({data, toggleShowFulltext, selectTopic, showAll}) => {
    return (
        <MainContainer isText>
                  <h2>{data.introHeader}</h2>
                  <div>
                    <p>
                      {showAll
                        ? data.introText
                        : data.introTextShort}
                      {!showAll && (
                        <span style={{color: 'red', cursor: 'pointer'}} onClick={toggleShowFulltext}>
                          {data.fullText}
                        </span>
                      )}
                    </p>

                    <span style={{color: 'green'}}>{data.mainTopics}</span>
                    <ul style={{fontWeight: 'bold'}}>
                      <Li name="mire" onClick={(e) => selectTopic(e)}>{data.mireEcology}</Li>
                      <Li name="palaeo" onClick={(e) => selectTopic(e)}>{data.palaeoEcology}</Li>
                      <Li name="relict" onClick={(e) => selectTopic(e)}>{data.relictEcosystems}</Li>
                      <Li name="crypto" onClick={(e) => selectTopic(e)}>{data.cryptogamology}</Li>
                    </ul>
                  </div>
          </MainContainer>
    );
};

export default Homepage;

const Li = styled.li`
  cursor: pointer
`