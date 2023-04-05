import styled from "styled-components";

export const ButtonRandon = styled.button`
  margin: 0 auto 30px;
  display: flex;
  padding: 10px 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: var(--colorEmphasisDark);
  color: var(--colorLight);
  font-size: 16px;
  font-weight: 300;
  font-style: italic;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 14px -2px var(--colorEmphasisSubLight);
    color: var(--colorEmphasisSubLight);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Wrapper = styled.div<{
  positionColumn: boolean
}>`
  width: 100%;
  display: flex;
  gap: 30px;
  ${p => p.positionColumn ? 'flex-direction: column;height: 800px;' : 'height: 500px;'}
  transition: all 1s;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    height: 800px;
    gap: 20px;
  }
`

export const Cards = styled.div<{
  image: string
  active: boolean
}>`
  height: 100%;
  ${p => p.active ? `flex: 5;` : `flex: 0.5;`}
  ${p => p.image && `background: url('${p.image}') center`};
  background-size: cover;
  border-radius: 50px;
  overflow:  hidden;
  position: relative;
  transition: all 0.8s;
  cursor: pointer;

  &:active {
    transition-delay: 0.3s;
    box-shadow: 0 0 1px 4px var(--colorEmphasisSubLight);
    scale: 0.9;
    opacity: 0.5;
  }

  & h1 {
    position: absolute;
    left: 30px;
    ${p => p.active ? `
      visibility: visible;
      opacity: 1;
      bottom: 30px;
      transition: all 0.5s;
      ` : `
      visibility: collapse;
      opacity: 0;
      bottom: 0px;
      transition: all 0.2s;
    `}
  }
`