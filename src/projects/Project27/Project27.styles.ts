import styled from "styled-components";
import ButtonDefault from "../../assets/css/ButtonDefault";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`

export const Boxes = styled.div<{
  actived: boolean
}>`
  width: ${p => p.actived ? '600px' : '500px'};
  height: ${p => p.actived ? '600px' : '500px'};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  & div {
    background-image: url(https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif);
    background-repeat: no-repeat;
    background-size: 500px 500px;
    position: relative;
    height: 125px;
    width: 125px;
    transition: 0.4s ease;

    ${p => p.actived && 'transform: rotateZ(360deg);'}

    &::after {
      content: '';
      background-color: #f6e58d;
      position: absolute;
      top: 8px;
      right: -15px;
      height: 100%;
      width: 15px;
      transform: skewY(45deg);
    }

    &::before {
      content: '';
      background-color: #f9ca24;
      position: absolute;
      bottom: -15px;
      left: 8px;
      height: 15px;
      width: 100%;
      transform: skewX(45deg);
    }
  }
`