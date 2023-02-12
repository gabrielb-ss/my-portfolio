import styled from 'styled-components';

export const Container = styled.div`
  * {border: 0px solid white;}
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
    text-decoration: none;
    
    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 3.2rem;
      text-transform: uppercase;
    }
  }

  ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes tonext {
    75% {
      left: 0;
    }
    95% {
      left: 100%;
    }
    98% {
      left: 100%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes tostart {
    75% {
      left: 0;
    }
    95% {
      left: -300%;
    }
    98% {
      left: -300%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes snap {
    96% {
      scroll-snap-align: center;
    }
    97% {
      scroll-snap-align: none;
    }
    99% {
      scroll-snap-align: none;
    }
    100% {
      scroll-snap-align: center;
    }
  }

  .carousel__viewport {
    grid-area: "slides";
    list-style: none;

    display: flex;

    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;

    .carousel__slide {
      position: relative;
      flex: 0 0 100%;

      img {
        object-fit:contain;
        width: 100%;
        height: 100%;
      }
    }
   
  }

  .carousel__snapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }


  .carousel__snapper {
    animation-name: tonext, snap;
    animation-timing-function: ease;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  .carousel__slide:last-child .carousel__snapper {
    animation-name: tostart, snap;
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