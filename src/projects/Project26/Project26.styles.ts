import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`

export const Phone = styled.div`
  width: 100%;
  max-width: 350px;
  height: 550px;
  border-radius: 35px;
  box-shadow: 0 0 0 1px #000;
  overflow: hidden;
`
export const Screen = styled.div`
  height: 88%;
  background-color: #333;
  padding: 20px;

  & img {
    animation: rotateImg 20s linear infinite;
  }

  @keyframes rotateImg {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const Navigation = styled.div`
  height: 12%;
  background: var(--colorDark);
  border-top: solid 1px var(--colorBorder);
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    & span {
      font-size: 14px;
      font-weight: 600;
    }

    &:hover,
    &.active {
      background: url('project26/effect.svg') no-repeat center;
      background-size: cover;
      background-size: 55px;

      & span {
        display: none;
      }

      & svg {
        scale: 1.2;

        & path {
          fill: var(--colorEmphasisDark)!important;
        }
      }
    }
  }
`