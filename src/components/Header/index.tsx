import { Container } from './styles'
import logoImg from '../../assets/logo.png'
import sunImg from '../../assets/sun.svg'
import moonImg from '../../assets/moon.svg'

import tabsImg from '../../assets/tabs.png'
import selectorsImg from '../../assets/selectors.png'

export function Header () {
  return (
    <Container> 
        <img src={logoImg} alt="Gabriel Barbosa"/>

        <nav>
          <a href="#">user</a>
          <a className='selected' href="#">projects</a>
          <a href="#">contact</a>
        </nav>

        <div id='switchers-container'>
          <div className='switcher' id='light-mode'>
            <img src={sunImg} alt="" />
            <input type="checkbox" id="mode" />
            <label htmlFor="mode"></label>
            <img src={moonImg} id="moon" alt="" />
          </div>

          <div className='switcher' id='language'>
            <p>PT</p>
            <input type="checkbox" id="lang" />
            <label htmlFor="lang"></label>
            <p id='en'>EN</p>
          </div>
        </div>
        
        
    </Container>
  );
}