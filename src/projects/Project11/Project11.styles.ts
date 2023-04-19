import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Slider = styled.div<{
  slide_bg: string
}>`
  width: 100%;
  height: 65vh;
  background: ${p => p.slide_bg ? `url(${p.slide_bg})` : '#222'};
  background-size: cover;
  box-shadow: 0 0 5px 5px var(--colorBorder);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; 
  transition: all 1s;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #000000a6;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: '';
    width: 70%;
    height: 70%;
    background: url(${p => p.slide_bg}) no-repeat center;
    background-size: cover;
    position: absolute;
    border-radius: 10px;
    box-shadow: 0 0 10px 10px #000000a6;
    animation: showInitial 0.2s linear;
    transition: all 1s;
  }

  @media (max-width: 1024px) {
    &::after {
      width: 80%;
      height: 80%;
    }
  }
`

export const ButtonsActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  position: absolute;
  bottom: 4%;
  z-index: 99;
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  & .--divider {
    margin: 5px 0;
    width: 100%;
    height: 2px;
    max-width: 500px;
    background-color: var(--colorBorder);
  }

  & .--radio {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`