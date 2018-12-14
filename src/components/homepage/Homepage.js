import React from 'react';
import MainContainer from '../MainContainer'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import {Link} from 'gatsby'

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

                    <span><u>{data.mainTopics}</u></span>
                    <ul style={{fontWeight: 'bold'}}>
                      <li><TopicLink to="topic-mires">{data.mireEcology}</TopicLink></li>
                      <li><TopicLink to="topic-paleo">{data.palaeoEcology}</TopicLink></li>
                      <li><TopicLink to="topic-relict">{data.relictEcosystems}</TopicLink></li>
                      <li><TopicLink to="topic-crypto">{data.cryptogamology}</TopicLink></li>
                    </ul>
                  </div>
          </MainContainer>
    );
};

export default Homepage;

Homepage.propTypes = {
  selectTopic: PropTypes.string,
  showAll: PropTypes.bool,
  toggleShowFulltext: PropTypes.func,
  data: PropTypes.object,
}

const TopicLink = styled(Link)`
  cursor: pointer,
  color: ${props => props.theme.grey};
  text-decoration: none;
  font-
  &:hover {
    text-decoration: ${props => (props.navigation ? 'underline' : 'none')};
    color: ${props => (props.navigation ? props.theme.grey : props.theme.secondary)};
  }
  &:focus {
    color: ${props => (props.navigation ? props.theme.secondary : props.theme.grey)};
  }
`