import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavigationWrapper = styled.ul`
  padding:0;
  list-style:none;
  display:flex;
`;

const NavigationItem = styled.li`
  margin-right: 15px;
  color:white;
  font-size:1.5em;
  transition:1s;
  
  &:hover{
    font-size: 1.6em;
  }
`;

const StyledLink = styled(Link)`
  color:white;
  text-decoration:none;
`;

const Navigation = () => (
  <NavigationWrapper>
      <NavigationItem>
        <StyledLink to={'/opener'}>Open'er</StyledLink>
      </NavigationItem>
      <NavigationItem>
        <StyledLink to={'/kemp'}>Kemp</StyledLink>
      </NavigationItem>
      <NavigationItem>
        <StyledLink to={'/livefestiwal'}>Live Festiwal</StyledLink>
      </NavigationItem>
  </NavigationWrapper>
);

export default Navigation;