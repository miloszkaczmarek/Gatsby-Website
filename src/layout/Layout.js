import React from 'react';
import Countdown from '../components/Countdown'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'

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
  
`;


const Layout = ({children}) => (
  <>
    <GlobalStyle/>
      <StyledWrapper>
        {children}
      </StyledWrapper>
  </>
);

export default Layout