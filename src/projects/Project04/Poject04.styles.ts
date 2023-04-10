import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 50px;
  overflow: hidden;
  scroll-behavior: smooth;
`

export const Card = styled.div`
  width: 98%;
  max-width: 400px;
  min-height: 200px;
  background-color: var(--colorSubDark);
  border-radius: 10px;
  padding: 20px;
  opacity: 0;
  transition: all 1s;

  &:nth-child(even) {
    transform: translateX(-1000px);
  }
  &:nth-child(odd) {
    transform: translateX(+1000px);
  }

  &.show {
    opacity: 1;
    transform: translateX(0px);
  }
`