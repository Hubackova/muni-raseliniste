import React from 'react'
import styled from 'styled-components'
import {ThemeProvider} from 'styled-components'

import Header from '../components/header/Header'
import FooterContent from '../components/footer/Footer'
import {IntProvider} from './Context'

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

const Layout = props => {
  const {location: {pathname}} = props
  const isIndex = pathname === "/"
  return (
    <IntProvider>
      <ThemeProvider theme={blueTheme}>
        <Container>
          <Header isIndex={isIndex} />
          <Main>{props.children}</Main>
          <footer>
            <FooterContent />
          </footer>
        </Container>
      </ThemeProvider>
    </IntProvider>
  )
}

export default Layout

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
`
