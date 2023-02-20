import { Container } from './styles'
import logoImg from '../../assets/logo.png'
import sunImg from '../../assets/sun.svg'
import moonImg from '../../assets/moon.svg'

export function Header () {
  return (
    <Container> 
        <img id='gb-logo' src={logoImg} alt="Gabriel Barbosa"/>

        <h1>MY PROJECTS</h1>

        <div className='switcher' >
          <img src={sunImg} alt="" />

          <input type="checkbox" id="mode" />
          <label htmlFor="mode"></label>

          <img src={moonImg} alt="" />
        </div>
        
    </Container>
  );
}