import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Counter = styled.span`
  width: 250px;
  height: 50px;
  position: relative;
  overflow: hidden;
  color: var(--colorEmphasisDark);
  text-shadow: 1px 2px #fff;
  font-weight: 600;
  font-size: 50px;

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(120deg);
    transform-origin: bottom center;

    &.in {
      transform: translate(-50%, -50%) rotate(0deg);
      animation: goIn 0.5s ease-in-out;
    }
  }

  @keyframes goIn {
    0% {
      transform: translate(-50%, -50%) rotate(120deg);
    }

    30% {
      transform: translate(-50%, -50%) rotate(-20deg);
    }

    60% {
      transform: translate(-50%, -50%) rotate(10deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
`

export const Text = styled.span`
  font-size: 20px;
  font-weight: 600;
  
  &.go {
    font-size: 40px;
    color: var(--colorEmphasisSubLight);
    animation: finalized 0.3s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }

  @keyframes finalized {
    0% {
      scale: 0.6;
    }
    70% {
      scale: 1;
    }
    80% {
      scale: 1.4;
    }
    100% {
      scale: 1;
    }
  }
`

export const Countdown = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`