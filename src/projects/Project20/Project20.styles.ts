import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`

export const TextEffect = styled.span`
  text-align: center;
  font-size: 35px;
  font-family: 'Lobster Two', cursive;
  color: var(--colorEmphasisDark);
  text-shadow: 2px 2px 10px #000;
  transition: all 0.5s ;
  position: relative;

  &::after {
    content: '';
    width: 2px;
    height: 35px;
    background-color: var(--colorEmphasisLight);
    position: absolute;
    bottom: 10px;
    margin-left: 5px;
    animation: cursorEffect 1s linear infinite;

    @keyframes cursorEffect {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`