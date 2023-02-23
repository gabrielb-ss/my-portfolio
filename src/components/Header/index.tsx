import { Container } from './styles'
import logoImg from '../../assets/logo.png'
import sunImg from '../../assets/sun.svg'
import moonImg from '../../assets/moon.svg'
import { ReactEventHandler, useState } from 'react'

type HeaderProps = {
  setLightMode: (mode: string) => void;
}

export function Header ({setLightMode}: HeaderProps) {

  function handleLightModeToggle (checked: boolean) {
    if (checked) {
      setLightMode("light")
    } else {
      setLightMode("dark")
    }
  }

  return (
    <Container> 
        <img id='gb-logo' src={logoImg} alt="Gabriel Barbosa"/>

        <h1>MY PROJECTS</h1>

        <div className='switcher' >
          <img src={moonImg} alt="" />

          <input 
            type="checkbox" 
            id="mode"
            
            onChange={event => handleLightModeToggle(event.target.checked)}
            />
          <label htmlFor="mode"></label>

          <img src={sunImg} alt="" />
        </div>
        
    </Container>
  );
}