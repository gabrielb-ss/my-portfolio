import styled from 'styled-components';

export const Container = styled.div`
 
  width: 100%;
  height: 66vh;
  display: grid;
  grid-template-columns: 1.8fr 6.4fr 1.8fr;
  grid-template-areas: 
  "features slides tools";

  @media (max-width:750px){
    height: 100%;
    padding-bottom: 2rem;
    position: relative;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    > :nth-child(2) {
      order: -1;
    }

    > :last-child {
      order: -1;
    }
  }

`