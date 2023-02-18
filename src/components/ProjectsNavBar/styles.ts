import styled from 'styled-components'

export const Content = styled.nav`
  min-width: 33vw;
  height:12vh;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  right: 18vw;
  
  padding: 0 4.5rem;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 1.6rem 1.6rem 0 0;

  display: flex;
  align-items: center;
  
  #menuIcon {
    height: 50%;
  }

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;

    li {
      transition: all .2s ease-out;
      border-radius: .8rem;
      background: rgba(255, 255, 255, 0.33);

      display: flex;
      justify-content: center;
      align-items: center;

      a {
        padding: 1rem;
        cursor: pointer;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
      }
    }

    .active {
        transition: all .2s ease-in;
        transform: translate(0, -10%);
        background-color: rgba(255, 255, 255, 0.66);

        a {
          color: black;
        }
      }
  }
`