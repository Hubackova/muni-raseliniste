import React from 'react'
import styled from 'styled-components'
import {ThemeProvider} from 'styled-components'

import Header from './header/Header'
import FooterContent from './footer/Footer'
import {LocalizationProvider, withLocalization} from './localization.context'

const blueTheme = {
  main: '#0868ac',
  secondary: '#43a2ca',
  terciary: 'green',
  green: '#3E7404',
  lightGreen: '#578724',
  grey: '#969696',
  white: 'white',
  black: 'black',
  mediumDevice: '768px',
  largeDevice: '1024px',
  extraLargeDevice: '1600px'
}

export default withLocalization(({children, isIndex}) => (
  <ThemeProvider theme={blueTheme}>
    <LocalizationProvider>
      <Container>
        <Header isIndex={isIndex} />
        <Main>{children}</Main>
        <footer>
          <FooterContent />
        </footer>
      </Container>
    </LocalizationProvider>
  </ThemeProvider>
))

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
`
