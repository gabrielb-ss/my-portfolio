import styled from 'styled-components'

export const Content = styled.nav`
  * {outline: 1px green solid}
  
  height: 14rem;
  padding: 3.5rem 4.5rem;
  margin-top: 3.2rem;
  border-radius: 1.6rem 1.6rem 0 0;
  background: rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;


  #menuIcon {
    width: 6.7rem;
    margin-right: 8.3rem;
  }

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 5rem;

    li {
      width: 5.7rem;
      height: 5.7rem;
      border-radius: 1.6rem;
      background: rgba(255, 255, 255, 0.33);

      display: flex;
      justify-content: center;
      align-items: center;

      a {
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
`