import React from 'react';
import MainContainer from '../MainContainer'

const Homepage = ({data, toggleShowFulltext, showAll}) => {
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
                      <li>{data.mireEcology}</li>
                      <li>{data.palaeoecology}</li>
                      <li>{data.relictEcosystems}</li>
                      <li>{data.cryptogamology}</li>
                    </ul>
                  </div>
          </MainContainer>
    );
};

export default Homepage;