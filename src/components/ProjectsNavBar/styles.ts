import styled from 'styled-components'

export const Content = styled.nav`
 //* {outline: 1px green solid}
  padding: 3.5rem 4.5rem;
  margin-top: 3.2rem;
  border-radius: 1.6rem 1.6rem 0 0;
  background: rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 5rem;

    li {
      transition: all .1s ease-out;
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
        transition: all .1s ease-in;
        transform: translate(0, -20%);
        background-color: rgba(255, 255, 255, 0.66);

        a {
          color: black;
        }
      }
  }
`