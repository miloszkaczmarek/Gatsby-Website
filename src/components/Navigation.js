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
`;

const StyledLink = styled(Link)`
  color:white;
  text-decoration:none;
`;

const Navigation = () => (
  <NavigationWrapper>
      <NavigationItem>
        <StyledLink to={'/first'}>First</StyledLink>
      </NavigationItem>
      <NavigationItem>
        <StyledLink to={'#'}>Second</StyledLink>
      </NavigationItem>
      <NavigationItem>
        <StyledLink to={'#'}>Third</StyledLink>
      </NavigationItem>
  </NavigationWrapper>
);

export default Navigation;