import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;

  & .Title {
    text-align: center;

    & h1 {
      font-size: 20px;
      font-family: cursive;
      letter-spacing: 2px;
    }

    & span {
      text-align: center;
    }
 }
`

export const Card = styled.div<{
  positionHeart: { x: number, y: number }
}>`
  width: 280px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 4px 4px 10px -2px var(--colorBorder);
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  user-select: none;

  & img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    transition: all 0.3s;
    z-index: -1;
  }

  &> svg {
    z-index: 1;
    position: absolute;
    animation: grow 0.6s linear;
    transform: translate(-50%, -50%) scale(0);

    @keyframes grow {
      to {
        transform: translate(-50%, -50%) scale(10);
        opacity: 0;
      }
    }
  }

  &:hover {    
    & img {
      scale: 1.2;
      transform: rotate(-5deg);
    }
  }
  
  &:active {
    & img {
      animation: clickActive 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) infinite 0.2s;
    }
  }

  @keyframes clickActive {
    from {
      scale: 1.1;
    }
    to {
      scale: 1.2;
    }
  }
`