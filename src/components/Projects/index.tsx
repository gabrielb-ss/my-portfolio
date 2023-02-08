import { Container } from './styles';
import featuresImg from '../../assets/features.svg'
import toolsIconsImg from '../../assets/toolsIcons.svg'
import toolsImg from '../../assets/tools.svg'

export function Projects () {
  return (
    <Container>
      <aside id='features'>
        <div className="aside-icon">
          <img src={featuresImg} alt="" />
        </div>
       
        <div className="aside-content text">
          <p>This Project was made for blablabla and for blablabla here are some features:</p>
          <br />
          <ul>
            <li>Here are some features to test this font</li>
            <li>In this section there should be features</li>
            <li>of the site displayed on the right</li>
            <li>that’s it</li>
          </ul>
        </div>
      </aside>

      <main>
        main
      </main>

      <aside id='tools'> 
        <div className="aside-icon">
          <img src={toolsImg} alt="" />
        </div>

        <div className="aside-content icons">
          <img src={toolsIconsImg} alt="" />
        </div>
      </aside>
    </Container>
  );
}