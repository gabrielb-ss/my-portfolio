import styled from 'styled-components';

export const Container = styled.header`
  background-color: transparent;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.3rem 10rem 0;

  nav {
    display: flex;
    gap: 4.2rem;
    align-items: center;

    a {
      background: rgba(255, 255, 255, 0.33);
      border-radius: .8rem;
      width: 7.5rem;
      height: 7.5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }

    .selected {
      width: 10rem;
      height: 10rem;
    }
    
  }
  // Switch
  #switchers-container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
    }

    label {
      cursor: pointer;
      color: transparent;
      border: 2px solid white;
      width: 3.7rem;
      height: 2.4rem;
      display: block;
      border-radius: 100px;
      position: relative;
    }

    .switcher {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .8rem 1.4rem;

      width: 120px;
      height: 40px;

      background: rgba(255, 255, 255, 0.38);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 16px;
    }

    label:after {
      content: '';
      position: absolute;
      top: .5rem;
      left: .5rem;
      width: 1rem;
      height: 1rem;
      background: #fff;
      border-radius: 9rem;
      transition: 0.3s;
    }

    input:checked + label:after {
      left: calc(100% - 5px);
      transform: translateX(-100%);
    }

    label:active:after {
      width: 1.5rem;
    }

    #moon, #en{
      margin-left: .5rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
  
`;