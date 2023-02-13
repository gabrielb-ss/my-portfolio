import styled from 'styled-components';
import { Content as NavBar } from '../ProjectsNavBar/styles';

export const Container = styled.div`
  width: 100vw;
  height: 64vh;
  margin-top: 4rem;
  display: grid;

  grid-template-columns: 1.8fr 6.4fr 1.8fr;
  grid-template-rows: 9fr 1fr;

  grid-template-areas: 
  "aside1 slide aside2"
  "aside1 slide aside2"
  "aside1 navbar aside2";
  
  ${NavBar} {
    grid-area: navbar;
  }
  
`