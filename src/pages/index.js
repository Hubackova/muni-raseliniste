import React, {Component} from 'react'
import styled, {injectGlobal} from 'styled-components'
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css'

import Homepage from '../components/homepage/Homepage'
import Databases from '../components/homepage/Databases'
import Topics from '../components/homepage/Topics'
import {Consumer} from '../layouts/Context'
import {cz, en, results} from '../content/general'

class Index extends Component {
  state = {
    showAll: false,
    selectedTopic: "home"
  }

  toggleShowFulltext = () => {
    this.setState(prevState => ({
      showAll: !prevState.showAll
    }))
  }

  selectTopic = e => {
    this.setState({
      selectedTopic: e.target.getAttribute('name')
    })
  }

  render() {
    const {selectedTopic, showAll} = this.state
    return (
      <Consumer>
        {context => (
        <ContainerWrapper>
          {selectedTopic === "home" ? <Homepage
            data={context.int === "en" ? en : cz}
            toggleShowFulltext={this.toggleShowFulltext}
            selectTopic={this.selectTopic}
            showAll={showAll}
            style={{flex: 1}}
          />
          : <Topics
            data={context.int === "en" ? en : cz}
            selectedTopic={selectedTopic}
            results={results}
            selectTopic={this.selectTopic}
          />}
          <Databases 
            data={context.int === "en" ? en : cz}
          />
        </ContainerWrapper>
        )}
        </Consumer>
    )
  }
}

export default Index

Index.propTypes = {
  location: PropTypes.object
}

const ContainerWrapper = styled.div`
  display: flex;
  margin: 0 50px;
  @media (max-width: ${props => props.theme.largeDevice}) {
    margin: 0 15px;
    flex-wrap: wrap;
  }
`

// TODO: move this section to gatsby-browser after solving the issue with global styles: https://github.com/gatsbyjs/gatsby/issues/7447
injectGlobal`
html, body, #___gatsby, #___gatsby>div {
    width: 100%;
    margin: 0;
}

body {
    font-family: Calibri, sans-serif;
    font-size: calc(17px + .25vw);
    letter-spacing: -.25px;
    line-height: calc(1.5em + .2vw);
    color: #333;
}

body h1, body h2 {
  line-height: 1.2;
}

h1 {
  font-size: calc(22px + 1.6vw);
}

h2 {
  font-size: calc(24px + .25vw);
  font-weight: bold;
}

h2 + ul {
  list-style-type:none;
  padding: 0;
  line-height: 1.2em;
}

h2 + ul > li {
  margin-bottom: 1em;
}

a {
  color: green;
}

* {
    box-sizing: border-box
}

.carousel .slide {
  background: linear-gradient(#3E7404, #778F55, #A4AF8D, white) !important;
}
`
