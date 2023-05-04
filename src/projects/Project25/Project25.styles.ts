import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`

export const Block = styled.div<{
  bgHover: string
}>`
  width: 15px;
  height: 15px;
  background-color: var(--colorSubDark);
  border-radius: 2px;
  box-shadow: 0 0 2px #000;
  opacity: 0.8;
  transition: all 2.5s;
  
  &:hover {
    transition: all 0s;
    background-color: ${p => p.bgHover ? p.bgHover : '#8e44ad'};
    box-shadow: 0 0 2px ${p => p.bgHover ? p.bgHover : '#8e44ad'}, 0 0 10px ${p => p.bgHover ? p.bgHover : '#8e44ad'};
    opacity: 1;
  }
`

export const Board = styled.div`
  width: 100%;
  max-width: 390px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;

  & div {
    
  }
`