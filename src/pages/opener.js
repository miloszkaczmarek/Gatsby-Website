import React from 'react'
import Slide from '../components/Slide'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import backgroundImage from '../images/applause.jpg'
import Description from '../components/Description'
import Button from '../components/Button'

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

const IndexPage = () => (
  <>
      <GlobalStyle/>
    <StyledWrapper>
      <Slide><Header>Open'er Festiwal</Header></Slide>
    </StyledWrapper>
    <Description>
      <p>Festiwal muzyczny odbywający się na terenie Gdyni oraz gminy Kosakowo od roku 2003. Pierwsza edycja festiwalu odbyła się w Warszawie w 2002 jako Open Air Festival. Organizatorem imprezy jest agencja koncertowa Alter Art. Pierwsza, jednodniowa edycja odbyła się w Warszawie na torze Stegny, kolejne (2003–2005) na gdyńskim skwerze Kościuszki. W 2004 roku festiwal trwał dwa dni. W 2006 r. skwer Kościuszki zaczął robić się zbyt ciasny, więc festiwal został przeniesiony na lotnisko Babie Doły – Kosakowo (obecnie lotnisko Gdynia-Kosakowo). Organizatorzy wydłużyli także festiwal do trzech dni. W 2005 r. dla 25 tysięcy festiwalowiczów zagrali m.in. Snoop Dogg, Faithless, Fatboy Slim, Lauryn Hill, The White Stripes i Underworld. Pierwszego dnia sprzedano wszystkie bilety jednodniowe. Jubileuszowa, dziesiąta edycja odbyła się w 2011 r., a urodziny świętowano m.in. wydaniem okolicznościowego albumu „Open’er Dekada”, koncertami Prince’a i Coldplay, pokazem fajerwerków, wspólnym jedzeniem tortu. W 2012 r. festiwal przyjął nową formułę: Music & Arts. Do 2013 roku sponsorem tytularnym festiwalu była marka Heineken.</p>
      <Button>zamów bilety</Button>
    </Description>


  </>
);

export default IndexPage;