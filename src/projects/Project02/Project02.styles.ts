import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const ProgressSteps = styled.div<{
  amountSteps: number
  progress: number
}>`
  display: grid;
  grid-template-columns: repeat(${p => p.amountSteps}, 1fr);
  gap: 100px;
  margin: 0 auto; 
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background-color: var(--colorLight);
    position: absolute;
    top: 18px;
  }
  &::after {
    content: '';
    width: ${p => p.progress}%;
    max-width: 100%;
    height: 4px;
    border-radius: 10px;
    background-color: var(--colorEmphasisDark);
    position: absolute;
    top: 18px;
    transition: all 0.5s;
  }
`

export const Circle = styled.div<{
  step: string
  active: boolean
}>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--colorSubDark);
  font-size: 15px;
  font-weight: 600;
  border-radius: 50%;
  border: solid 2px transparent;
  position: relative;
  z-index: 1;
  transition: all 0.3s;
  transition-delay: 0ms;

  ${p => p.active && `
    box-shadow: 0 0 15px 2px var(--colorEmphasisDark);
    background-color: var(--colorEmphasisLight);
    color: var(--colorLight);
    transition-delay: 0.3s;
  `}

  &::before {
    ${p => p.step && `content: '${p.step}'`};
    width: 130px;
    text-align: center;
    position: absolute;
    top: 40px;
  }
`

export const Content = styled.div`
  margin-top: 30px;
  transition: all 0.5s;
` 

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
`