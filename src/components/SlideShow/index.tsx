import { useState } from 'react';
import { Container } from './styles';
import arrowImg from '../../assets/slideArrow.png';

type slideShowProps = {
  projectName: string;
}

export function SlideShow({projectName}: slideShowProps) {
  const [currentSlide, setCurrentSlide] = useState(0); 

  function changeSlide(side: string){
    const lastSlide = 2;
    const firstSlide = 0;

    if (side === 'left') {
      if (currentSlide > firstSlide){
        setCurrentSlide(currentSlide-1)
      }else {
        setCurrentSlide(lastSlide) //
      }
    } else if (side === 'right') {
      if (currentSlide < lastSlide){
        setCurrentSlide(currentSlide+1)
      }else {
        setCurrentSlide(firstSlide) //
      }
    }
    
  }

  return (
    <Container>
      <a href="" id='project-title'>
        <h1>{projectName}</h1>
      </a>

      <ol className="slides-container">
        <li className="slide" style={{transform: `translate(${currentSlide*-100}%)`}}>
          <img src={`/projects/${projectName}/1.png`} alt="" />
        </li>

        <li className="slide" style={{transform: `translate(${currentSlide*-100}%)`}}>
          <img src={`/projects/${projectName}/2.png`} alt="" />
        </li>

        <li className="slide"style={{transform: `translate(${currentSlide*-100}%)`}}>
          <img src={`/projects/${projectName}/3.png`} alt="" />
        </li>
      </ol>
      
      <a role="button" 
        className='slider' 
        id='left' 
        onClick={() => changeSlide("left")}
      >
        <img src={arrowImg} alt="" />
      </a>

      <a role="button" 
        className='slider' 
        id='right' 
        onClick={() => changeSlide("right")}
      >
        <img src={arrowImg} alt="" />
      </a>

      <ol id="slide-indicator">
        <li style={{backgroundColor: currentSlide === 0 ? "white" : "transparent"  }}></li>
        <li style={{backgroundColor: currentSlide === 1 ? "white" : "transparent"  }}></li>
        <li style={{backgroundColor: currentSlide === 2 ? "white" : "transparent"  }}></li>
      </ol>

      <a href={`https://github.com/gabrielb-ss/${projectName}`} target="_blank" id='github-link'>
        <img src="/icons/github.svg" alt="githubIcon" />
      </a>
    </Container>
  )
}