import { Container } from './styles';

export function SlideShow() {
  return (
    <Container>
      <a href="" id='project-title'>
        <h1>Titulo do projeto</h1>
      </a>

      <ol id="slides">
        <li>
          <img src="" alt="slide1" />
        </li>
   
      </ol>

      <a href="" role="button" className='slider' id='left'>
        <img src="" alt="esquerda" />
      </a>
      <a href="" role="button" className='slider' id='right'>
        <img src="" alt="direita" />
      </a>

      <ol id="slide-indicator">
        <li>
          <img src="" alt="indicators" />
        </li>
      </ol>

      <a href="github.com/gabrielb-ss" id='github-link'>
        <img src="" alt="githubIcon" />
      </a>
    </Container>
  )
}