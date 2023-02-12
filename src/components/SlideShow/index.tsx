import { Container } from './styles';

type slideShowProps = {
  projectName: string;
}

export function SlideShow({projectName}: slideShowProps) {
  return (
    <Container>
      <a href="" id='project-title'>
        <h1>{projectName}</h1>
      </a>
      <ol className="carousel__viewport">
        <li className="carousel__slide">
          <img src={`/projects/${projectName}/1.png`} alt="" />
          <div className="carousel__snapper"></div>
        </li>

        <li className="carousel__slide">
          <img src={`/projects/${projectName}/2.png`} alt="" />
          <div className="carousel__snapper"></div>
        </li>

        <li className="carousel__slide">
          <img src={`/projects/${projectName}/3.png`} alt="" />
          <div className="carousel__snapper"></div>
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