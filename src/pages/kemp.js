import React from 'react'
import SlideKemp from '../components/SlideKemp'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Description from '../components/Description'
import Button from '../components/Button'
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

const StyledLink = styled(Link)`
  color:black;
  text-decoration:none;
  
  ::before, ::after{
    content:' | ';
  }
 
`;

const IndexPage = () => (
  <>
      <GlobalStyle/>
    <StyledWrapper>
      <SlideKemp>
        <Header>Hip-Hop Kemp</Header>
        <Subheader style={{fontSize: "35px"}}>14-18 SIERPNIA 2019</Subheader>
      </SlideKemp>
    </StyledWrapper>
    <Description>
      <p>Międzynarodowy festiwal, koncentrujący się głównie na kulturze hip-hopowej. Festiwal odbywa się corocznie w sierpniu w Czechach. Od pierwszej edycji oprócz koncertów odbywają się także pokazy oraz szkółki breakdance, graffiti, i beatboxu.

        Pomysł zorganizowania hiphopowego festiwalu undergroundowego należy do czeskiego magazynu BBaRáK. Ideą organizatorów było zaproszenie wielu gwiazd z podziemia, zamiast zapraszania jednego, za to bardzo znanego, rapera. Od 2004 roku organizowana jest jego kompleksowa promocja w polskich mediach, za którą odpowiada agencja Joytown. Pierwsza edycja festiwalu miała miejsce od 15 do 18 sierpnia 2002 roku, na terenie basenów Cihelna w Pardubicach. Wystąpili m.in. Yeshua da Poed z grupy Wee Be Foolish, Fat Jon i Pase z grupy Five Deez (USA), Task Force, Phi-Life Cypher (Wielka Brytania), oraz polski zespół Grammatik i Druh Sławek. Pierwsza edycja festiwalu - Hip Hop Kemp 2002 zgromadził 3000 osób.</p>
      <Button>zamów bilety</Button>
      <StyledLink to={'/'}>powrót</StyledLink>
    </Description>
  </>
);

export default IndexPage;
