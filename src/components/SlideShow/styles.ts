import styled from 'styled-components';

export const Container = styled.div`
  
  * {
    :hover {
     // background-color:rgba(0,0,0, 0.33) ;
    }
    //outline: 1px solid white;
  }

  width: 64vw;
  height: inherit;

  background: rgba(255, 255, 255, 0.33);

  display: grid;
  grid-template-columns: 0.3fr 3fr 0.3fr; 
  grid-template-rows: 0.3fr 3fr 0.3fr;

  grid-template-areas:
    "title title title"
    "left slides right"
    "github . indicator";

  #project-title {
    grid-area: title;
    text-decoration: none;
    padding: 1rem 0;

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 3.2rem;
      text-transform: uppercase;
      text-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
    }

    transition: all .2s ease-out;
    :hover {
      transition: all .2s ease-in;
      background-color: rgba(0,0,0, 0.33);
    }
  }

  .slides-container {
    grid-area: slides;
    list-style: none;
    overflow: hidden;

    display: flex;

    .slide {
      transition: all 1s ease-out;
      flex: 0 0 100%;

      img {
        object-fit:contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  .slider {
    cursor: pointer;
    border-radius: .8rem;
    transition: all .2s ease-out;

    :hover {
      transition: all .2s ease-in;
      background-color: rgba(0,0,0, 0.33);
    }
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .slider#left{
    grid-area: left;
  }

  .slider#right{
    grid-area: right;
    img {
      transform: scaleX(-1);
    }
  }

  #github-link {
    grid-area: github;
    height: 90%;
    border-radius: 50%;
    padding-top: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: all .2s ease-out;
    :hover {
      transition: all .2s ease-in;
      img {
        border-radius: 50%;
        background-color: rgba(0,0,0, 0.33);
      }
    }
  }
  
  #slide-indicator {
    grid-area: indicator;
    list-style: none;
    margin-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    li {
      width: 2rem;
      height: 2rem;
      border: 1px solid black;
      border-radius: 50%;
    }
  }
`