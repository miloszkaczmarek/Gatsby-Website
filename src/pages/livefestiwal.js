import React from 'react'
import Slide from '../components/Slide'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Description from '../components/Description'
import Button from '../components/Button'
import { Link } from 'gatsby'
import backgroundImage from '../images/livefestival.jpg'
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
        <Header>Live Festival</Header>
        <Subheader style={{fontSize: "35px"}}>17-18 SIERPNIA 2019</Subheader>
      </Slide>

    <Description>
      <h3>DO FESTIWALU POZOSTAŁO:</h3>
      <Countdown date={`${year}-08-17`}/>
      <p>Kraków Live Festival to dwudniowy festiwal muzyczny w Krakowie organizowany przez Alter Art. W przestrzeni przeznaczonej na festiwal co roku powstają dwie sceny muzyczne, miasteczko gastronomiczne oraz miejsce działań około-muzycznych. Line-up festiwalu opiera się na wykonawcach światowego formatu, jak i starannie wyselekcjonowanej grupie polskich artystów. Festiwal co roku przyciąga kilkadziesiąt tysięcy fanów muzyki i jest swoistym zakończeniem sezonu festiwalowego w Polsce. Duży nacisk w pozamuzycznej ofercie festiwalu położony jest na umożliwienie festiwalowiczom korzystania z bogatej oferty kulturalnej miasta Kraków. W ramach działań około-festiwalowych co roku podejmowana jest współpraca z lokalnymi instytucjami kultury takimi jak: Muzeum Narodowe w Krakowie, MOCAK - Muzeum Sztuki Współczesnej, Muzeum Historyczne, Cricoteka.</p>
      <a href='http://livefestival.pl/pl' target='_blank'><Button>zamów bilety</Button></a>
      <StyledLink to={'/'}>powrót</StyledLink>
    </Description>
    </Layout>
  </>
);

export default IndexPage;
