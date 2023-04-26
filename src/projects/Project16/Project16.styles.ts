import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`

export const SlideGroup = styled.div`
  width: 100%;
  height: 100%;
`

export const Text = styled.div<{
  bgColor: string,
  positionSlide: number
}>`
  width: 100%;
  height: 100%;
  background-color: ${p => p.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  
  transform: translateY(${p => p.positionSlide}%);
  transition: all 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  & h3 {
    font-size: 30px;
    font-family: cursive;
    letter-spacing: 1px;
    text-align: center;
  }

  & span {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 4px;
    text-align: center;
    text-shadow: 1px 1px 2px #333;
  }
`

export const Image = styled.div<{
  bgColor: string,
  positionSlide: number
}>`
  width: 100%;
  height: 100%;
  background-color: ${p => p.bgColor};
  transform: translateY(${p => p.positionSlide}%);
  transition: all 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`

export const DisplayButton = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 350px;
  z-index: -1;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  & button {
    width: 50%;
    height: 50%;
    border: none;
    outline: none;
    border-radius: 10px 0 0 10px;
    background-color: #00000066;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      background-color: #000000a6;
      color: var(--colorEmphasisSubLight);
    }

    &:last-child {
      margin-left: auto;
      border-radius: 0px 10px 10px 0px;
    }
  }
`

export const Slider = styled.div`
  width: 100%;
  height: 60vh;
  border-radius: 10px;
  overflow: hidden;  
  display: grid;
  align-items: center;
  grid-template-columns: 400px auto;
  box-shadow: 0 0 0 3px var(--colorBorder);
  position: relative;

  &:hover {
    & ${DisplayButton} {
      z-index: 99;
      opacity: 1;
    }
  }
  
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    & ${SlideGroup} {
      height: 50%;
      overflow: hidden;
    }

    & ${DisplayButton} {
      width: 100%;
      z-index: 99;
      opacity: 1;
      flex-direction: row;
      justify-content: center;
      left: 0;
      top: calc(50% - 25px);

      & button {
        width: 50px;
        height: 50px;
        border-radius: 0 10px 10px 0;

        &:last-child {
          border-radius: 10px 0 0 10px;
        }
      }
    }
  }
`

export const Info = styled.span`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 5px;
  text-align: center;
  color: #555;
  transition: all 0.3s;

  &:hover {
    text-shadow: 2px 2px #000;
  }
`