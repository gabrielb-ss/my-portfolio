import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 10vh;
  
  display: flex;
  align-items: center;
  padding: 6rem 2rem 6rem;
  
  h1 {
    position: absolute;
    font-size: 3rem;
    font-weight: 700;
    top: 50%;
    left: 50%;

    text-align: center;
    text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.5);
    transform: translate(-50%, -50%);
  }

  #gb-logo {
    height: 8rem;
  }
  
  // Switch
  .switcher {
    position: absolute;
    right: 0;
    margin-right: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .8rem 1.4rem;

    width: 12rem;

    background: rgba(255, 255, 255, 0.38);
    box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
    border-radius: 1.2rem;
  }

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

  
  @media (max-width: 750px) {
    padding:5rem 2rem 5rem;

    h1 {
      font-size: 2rem;
    }

    #gb-logo {
      height: 5rem;
    }

    .switcher {
      padding: .4rem .7rem;
      width: 9rem;
    }
  }

  @media (max-width: 400px) {
    .switcher {
      width: fit-content;

      img {
        display: none;
      }
    }
  }
`;