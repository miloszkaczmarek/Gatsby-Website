import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import backgroundImage from '../images/applause.jpg'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Navigation from '../components/Navigation'

const GlobalStyle = createGlobalStyle`
body{
    padding:0;
    margin:0;
    @import url('https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700&subset=latin-ext');
    font-family: 'Titillium Web';
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
        <Header>Wybierz interesujący Cię</Header>
            <Subheader>festiwal</Subheader>
            <Navigation/>
      </StyledWrapper>
  </>
)

export default IndexPage
