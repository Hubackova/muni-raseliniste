import React, {Component} from 'react'
import {injectGlobal} from 'styled-components'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.min.css'
import ContainerWrapper from '../components/atoms/ContainerWrapper'
import Homepage from '../components/homepage/Homepage'
import Databases from '../components/homepage/Databases'
import {Consumer} from '../layouts/Context'
import {cz, en} from '../content/general'

class Index extends Component {
  state = {
    showAll: false,
    selectedTopic: 'home'
  }

  toggleShowFulltext = () => {
    this.setState(prevState => ({
      showAll: !prevState.showAll
    }))
  }

  render() {
    const {showAll} = this.state
    return (
      <Consumer>
        {({int}) => (
          <ContainerWrapper isHome={true}>
            <Homepage
              data={int === 'en' ? en : cz}
              toggleShowFulltext={this.toggleShowFulltext}
              selectTopic={this.selectTopic}
              showAll={showAll}
            />
            <Databases text={int === 'en' ? en : cz} isHome={true}/>
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

// TODO: move this section to gatsby-browser after solving the issue with global styles: https://github.com/gatsbyjs/gatsby/issues/7447
injectGlobal`
html, body, #___gatsby, #___gatsby>div {
    width: 100%;
    margin: 0;
}

* {
    box-sizing: border-box
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

.carousel .slide {
  background: linear-gradient(#3E7404, #778F55, #A4AF8D, white) !important;
}
`
