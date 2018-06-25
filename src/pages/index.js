import React, {Component, Fragment} from "react"
import styled from "styled-components";
import { injectGlobal } from 'styled-components'
import Images from "../components/images";
import Container from "../components/container";
import Layout from "../components/layout";
import 'font-awesome/css/font-awesome.min.css';
import { LocalizationConsumer, withLocalization } from '../components/localization.context';

function MainText({language}) {
  return <p>{JSON.stringify(language.language.mainPage.introHeader)}</p>
}
const LocalizedText = withLocalization(MainText);


export default () => <Layout><Container>
  <h2>In our group we focus on </h2>
  <div>
        <LocalizationConsumer>
        {context => <p>{context.language.mainPage.introText}</p>}
        </LocalizationConsumer>
    </div>
</Container></Layout>

injectGlobal`
html, body, #___gatsby, #___gatsby>div {
    width: 100%;
    margin: 0;
}

body {
    font-family: Elena, sans-serif;
    font-size: calc(18px + .25vw);
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

* {
    box-sizing: border-box
}
`

