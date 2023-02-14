import { Container } from './styles'
import logoImg from '../../assets/logo.png'
import sunImg from '../../assets/sun.svg'
import moonImg from '../../assets/moon.svg'
import projectsImg from '../../assets/projects.svg'
import curriculumImg from '../../assets/curriculum.svg'
import contactImg from '../../assets/contact.svg'
import { useState } from 'react';

export function Header () {
  const [activeTab, setActiveTab] = useState([0,1,0]);

  function selectTab(id: number) {
    let newActiveTab = [0,0,0];
    newActiveTab[id] = 1;
    setActiveTab(newActiveTab);
  }

  return (
    <Container> 
        <img src={logoImg} alt="Gabriel Barbosa"/>

        <nav>
          <a onClick={() => selectTab(0)} className={activeTab[0] === 1 ? "active" : "inactive" }>
            <img src={curriculumImg} alt="" />
          </a>
          <a onClick={() => selectTab(1)} className={activeTab[1] === 1 ? "active" : "inactive" }>
            <img src={projectsImg} alt="" />
          </a>
          <a onClick={() => selectTab(2)} className={activeTab[2] === 1 ? "active" : "inactive" }>
            <img src={contactImg} alt="" />
          </a>
        </nav>

        <div id='switchers-container'>
          <div className='switcher' >
            <img src={sunImg} alt="" />

            <input type="checkbox" id="mode" />
            <label htmlFor="mode"></label>

            <img src={moonImg} id="moon" alt="" />
          </div>

          <div className='switcher'>
            <p>PT</p>

            <input type="checkbox" id="lang" />
            <label htmlFor="lang"></label>
            
            <p id='en'>EN</p>
          </div>
        </div>
    </Container>
  );
}