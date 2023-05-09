import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`

export const Feedback = styled.div`
  width: 100%;
  max-width: 450px;
  min-height: 250px;
  border-radius: 10px;
  box-shadow: 0 0 0 2px var(--colorBorder);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;

  &:hover {
    & h4 {
      color: #f2f2f2;
    }
  }

  & h4 {
    max-width: 300px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 400;
    color: var(--colorBorder);
    text-align: center;
    transition: all 0.5s;
  }
  
  & h3 {
    max-width: 300px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 400;
    color: #f2f2f2;
    text-align: center;
  }
`

export const ItemOption = styled.div<{
  colorHover: string
  actived: boolean
}>`
  width: 25%;
  min-width: 100px;
  height: max-content;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 5px;
  background-color: var(--colorSubDark);
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  transition: all 0.3s;

  ${p => p.actived && `
    box-shadow: 0 0 10px var(--colorEmphasisSubLight);
    background: #222;
    scale: 1.06;

    & svg path {
      fill: ${p.colorHover}!important;
    }
    & span {
      color: ${p.colorHover}!important;
    }
  `}
  
  & span {
    font-size: 12px;
    font-weight: 500;
    color: #999;
    transition: all 0.3s;
  }

  &:hover {
    box-shadow: 0 0 10px var(--colorEmphasisSubLight);
    transform: rotateZ(15deg);
    z-index: 2;

    & svg path {
      fill: ${p => p.colorHover}!important;
    }
    & span {
      color: #fff;
    }
  }

  & svg path {
    transition: all 0.3s;
  }
`

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`