import styled from 'styled-components';

export const Container = styled.header`
  background-color: transparent;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 8rem 0;

 #gb-logo {
  height: 10vh;
 }

  nav {
    display: flex;
    gap: 4.2rem;
    align-items: center;

    a {
      width: 6vh;
      height: 6vh;
      
      cursor: pointer;
      background: rgba(255, 255, 255, 0.33);
      border-radius: .8rem;
      padding: 2rem;
   
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      transition: all .1s ease-out;
    }

    .active {
      transition: all .1s ease-in;
      padding: 2.5rem;
      width: 8vh;
      height: 8vh;
    }
  }
  // Switch
  #switchers-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input[type=checkbox]{
     display: none;
    }

    label {
      cursor: pointer;
      color: transparent;
      border: .2rem solid white;
      width: 3.7rem;
      height: 2.4rem;
      display: block;
      border-radius: 10rem;
      position: relative;
    }

    .switcher {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .8rem 1.4rem;

      width: 12rem;
      height: 3.75vh;

      background: rgba(255, 255, 255, 0.38);
      box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
      border-radius: 1.2rem;
    }

    label:after {
      content: '';
      position: absolute;
      top: .5rem;
      left: .5rem;
      width: 1rem;
      height: 1rem;
      background: #fff;
      border-radius: 50%;
      transition: 0.3s;
    }

    input:checked + label:after {
      left: calc(100% - .5rem);
      transform: translateX(-100%);
    }

    p {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
  
`;