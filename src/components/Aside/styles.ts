import styled from 'styled-components'

export const Content = styled.div`
  width: 18vw;
  background: rgba(0, 0, 0, 0.33);
  
  display: flex;
  flex-direction: column;
  align-items: center;

  .aside-icon {
    width: 100%;
    max-height: 5rem;
    padding: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid rgba(255, 255, 255, 0.33);
  }

  .aside-content {
    width: 100%;
    padding: 6rem 4.4rem;
    overflow-y:auto;
  }

  .aside-content.features {
    p {
     margin-bottom: 3rem;
    }

    * {
      font-weight: 700;
      font-size: 2.4rem;
    }

    text-align: justify;
    font-size: 3rem;
  }

  .aside-content.tools {
    ul {
      list-style: none;

      li {
        display: flex;
        justify-content: center;
        
        img {
          width: 6.5rem;
        }
      }

      li + li {
        margin-top: 5.5rem;
      }
    }
  }
`

  