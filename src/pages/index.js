import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import backgroundImage from '../images/buildings.jpg'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Navigation from '../components/Navigation'

const GlobalStyle = createGlobalStyle`
body{
    padding:0;
    margin:0;
}

*, *::before, *::after{
    box-sizing: border-box;
}

`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100vh;
    background-image:url(${backgroundImage});
    background-size: cover;
    background-position:center;
`;

const IndexPage = () => (
  <>
      <GlobalStyle/>
      <StyledWrapper>
            <Header>hello milosz</Header>
            <Subheader>kaczmarek</Subheader>
            <Navigation/>
      </StyledWrapper>
  </>
)

export default IndexPage
