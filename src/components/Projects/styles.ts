import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 64vh;
  margin-top: 4rem;
  display: flex;

  main {
    width: 64vw;
    background: rgba(255, 255, 255, 0.33);
  }

  aside {
    background: rgba(0, 0, 0, 0.33);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .aside-icon {
      padding: 3rem;
      display: flex;
      width: 100%;
      max-height: 5rem;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.33);
    }

    .aside-content {
      padding: 6rem 4.4rem;
      overflow-y:auto;
      display: flex;
      flex-direction: column;
    }

    .aside-content.text {
      text-align: justify;
    }
  }

`