import styled from 'styled-components';

export const Container = styled.div`
  * {border: 1px solid white;}
  width: 64vw;
  background: rgba(255, 255, 255, 0.33);

  display: grid;
  grid-template-columns: 0.3fr 2.4fr 0.3fr; 
  grid-template-rows: 0.2fr 3.2fr 0.5fr;

  grid-template-areas:
    "left title right"
    "left slides right"
    "github slides indicator";

  #project-title {
    grid-area: title;
  }

  #slides {
    border: 2px solid red;
    grid-area: slides;
    list-style: none;
    display: flex;
    

    li {
      border: 2px solid blue;
      flex: 1;
    }
    
  }

  .slider#left{
    grid-area: left;
  }

  .slider#right{
    grid-area: right;
  }

  #github-link {
    grid-area: github;
  }

  #slide-indicator {
    list-style: none;
    grid-area: indicator;
  }
`