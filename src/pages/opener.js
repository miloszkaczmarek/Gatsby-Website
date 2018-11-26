import React from 'react'
import Slide from '../components/Slide'
import styled from 'styled-components'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Description from '../components/Description'
import Button from '../components/Button'
import { Link } from 'gatsby'
import backgroundImage from '../images/opener.jpg'
import Countdown from '../components/Countdown'
import Layout from '../layout/Layout'

const StyledLink = styled(Link)`
  color:black;
  text-decoration:none;
  
  ::before, ::after{
    content:' | ';
  }
 
`;

const year = new Date().getFullYear() + 1;

const IndexPage = () => (
  <>
    <Layout>
      <Slide source={backgroundImage}>
        <Header>Open'er Festiwal</Header>
        <Subheader style={{fontSize: "35px"}}>3-6 LIPCA 2019</Subheader>
      </Slide>
    <Description>
      <h3>DO FESTIWALU POZOSTAŁO:</h3>
      <Countdown date={`${year}-07-03`}/>
      <p>Festiwal muzyczny odbywający się na terenie Gdyni oraz gminy Kosakowo od roku 2003. Pierwsza edycja festiwalu odbyła się w Warszawie w 2002 jako Open Air Festival. Organizatorem imprezy jest agencja koncertowa Alter Art. Pierwsza, jednodniowa edycja odbyła się w Warszawie na torze Stegny, kolejne (2003–2005) na gdyńskim skwerze Kościuszki. W 2004 roku festiwal trwał dwa dni. W 2006 r. skwer Kościuszki zaczął robić się zbyt ciasny, więc festiwal został przeniesiony na lotnisko Babie Doły – Kosakowo (obecnie lotnisko Gdynia-Kosakowo). Organizatorzy wydłużyli także festiwal do trzech dni. W 2005 r. dla 25 tysięcy festiwalowiczów zagrali m.in. Snoop Dogg, Faithless, Fatboy Slim, Lauryn Hill, The White Stripes i Underworld. Pierwszego dnia sprzedano wszystkie bilety jednodniowe. Jubileuszowa, dziesiąta edycja odbyła się w 2011 r., a urodziny świętowano m.in. wydaniem okolicznościowego albumu „Open’er Dekada”, koncertami Prince’a i Coldplay, pokazem fajerwerków, wspólnym jedzeniem tortu. W 2012 r. festiwal przyjął nową formułę: Music & Arts. Do 2013 roku sponsorem tytularnym festiwalu była marka Heineken.</p>
      <a href='https://www.alterart.pl/shop/sklep.php?cat=2' target='_blank'><Button>zamów bilety</Button></a>
      <StyledLink to={'/'}>powrót</StyledLink>
    </Description>
    </Layout>

  </>
);

export default IndexPage;
