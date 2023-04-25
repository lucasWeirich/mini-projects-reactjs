import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`

export const Loader = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000082;
  z-index: 9999;
  transition: all 0.5s;

  position: fixed;
  top: 0;
  left: 0;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom-color: #fff;
  }

  &::before {
    transform: rotate(90deg);
    animation: animation-loader-beffore 2s linear infinite;
  }

  &::after {
    animation: animation-loader-after 2s linear infinite 0.5s;
  }

  @keyframes animation-loader-beffore {
    0%,
    25% {
      transform: rotate(90deg);
    }
  
    50%,
    75% {
      transform: rotate(270deg);
    }

    100% {
      transform: rotate(450deg);
    }
  }
  
  @keyframes animation-loader-after {
    0%,
    25% {
      transform: rotate(0deg);
    }

    50%,
    75% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`