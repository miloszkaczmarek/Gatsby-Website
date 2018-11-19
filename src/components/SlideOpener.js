import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../images/opener.jpg'


const SlideOpener = styled.div`
  width:100%;
  height:500px;
  background-image:url(${backgroundImage});
  background-position:center;
  background-size:cover;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export default SlideOpener;