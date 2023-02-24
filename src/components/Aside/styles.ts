import styled from 'styled-components'

export const Content = styled.div`
  height: inherit;
  width: 18vw;

  background: rgba(0, 0, 0, 0.33);
  
  display: flex;
  flex-direction: column;
  align-items: center;

  .aside-icon {
    width: 100%;
    height: 5rem;
    padding: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border-bottom: 1px solid rgba(255, 255, 255, 0.33);
  }

  .aside-content {
    width: 100%;
    padding: 6rem 4.4rem;
    overflow-y: auto;
  }

  .aside-content.features {
    p {
     margin-bottom: 3rem;
    }

    * {
      font-weight: 700;
      font-size: clamp(1.6rem, 1.5vw, 2.4rem);
    }

    text-align: justify;
    font-size: 2rem;
  }

  .aside-content.tools {
    p {
      width: 0;
      height: 0;
      display: none;
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      gap: 3rem;

      li {
        display: flex;
        justify-content: center;
        
        img {
          width: 6.5rem;
        }
      }     
    }
  }

  @media (max-width: 750px) {
    width: 100vw;
    height: fit-content;
    padding-bottom: 2rem;

    .aside-icon {
      padding: 0;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.33);

      img {
        height: 3rem;
        width: 3rem;
        object-fit: contain;
      }
    }

    .aside-content {
      padding: 0;
      margin: 0;

      align-items: center;
      justify-content: center;

      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
      }
    }
    
    .aside-content.features {
      p {
        font-size: medium;
        text-align: center;
        margin-top: 1rem;
      }

      li {
        font-size: medium;
      }
    }

    .aside-content.tools {
    
      ul {
        padding-top: 2rem;
        flex-direction: row;
        justify-content: space-around;
      }

      ul > li > img {
        width: 10vw;
        height: 10vw;
      }
    }
  }
`

  