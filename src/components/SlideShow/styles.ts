import styled from 'styled-components';

export const Container = styled.div`
  
  * {
    :hover {
     // background-color:rgba(0,0,0, 0.33) ;
    }
    //outline: 1px solid white;
  }
  position: relative;
  grid-area: slides;

  width: inherit;
  height: inherit;

  background: rgba(255, 255, 255, 0.33);

  display: grid;
  grid-template-columns: 1fr 10fr 1fr; 
  grid-template-rows: 1fr 7fr 1fr;

  grid-template-areas:
    "title title title"
    "left slides right"
    "github . indicator";

  #project-title {
    grid-area: title;
    text-decoration: none;
    padding-top: 1rem;

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 2.4rem;
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
    background-color: transparent;

    @media (hover: hover) {
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
    padding-bottom: 1rem;
    padding-top: .25rem;
    border-radius: 50%;
    margin-left: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 5vw;
      max-height: 5vw;
      
      border-radius: 50%;
      background-color: rgba(0,0,0, 0.33);
    }

    transition: all .2s ease-out;
    :hover {
      transition: all .2s ease-in;
      img {
        border-radius: 50%;
        background-color: rgba(0,0,0, 0.66);
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

 /*  ======================   MOBILE   ====================== */
  @media (max-width: 750px) {
    width: 100vw;
    .slider, #slide-indicator{
      display: none;
    }

    #project-title > h1{
      font-size: 2rem;
    }

    .slides-container{
     
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      .slide {
        padding: 0 2rem 0;
        scroll-snap-align: center;
      }
    }

    #github-link {
      position: absolute;
      bottom: 5%;
      left: 1%;
      padding: 0;
      outline: 1px solid black;

      img {
        max-width: 8vw;
        max-height: 8vw;
      }
    }
    
    grid-template-areas:
    "title title title"
    "slides slides slides"
    "slides slides slides";
  }
`