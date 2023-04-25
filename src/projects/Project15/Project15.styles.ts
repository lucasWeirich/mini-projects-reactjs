import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Capa = styled.img`
  border-radius: 5px;
  transition: all 0.4s ease;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.4s ease;
`

export const Title = styled.h1`
  font-size: 18px;

`

export const Description = styled.p`
  font-size: 14px;
  max-height: 45px;
  overflow: hidden;
  transition: all 0.4s ease;
`

export const User = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50px auto;
  gap: 10px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px var(--colorBorder);
  transition: all 0.4s ease;

  & img {
    width: 100%;
    border-radius: 50%;
  }

  &>div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & h3 {
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 14px;
  }

  & span {
    font-size: 12px;
    font-weight: 400;
    color: #888;
    line-height: 14px;
  }
`

export const Card = styled.div`
  width: 100%;
  max-width: 330px;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px var(--colorSubDark);
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  padding: 10px;
  height: 400px;
  position: relative;

  &:hover {
    & ${Capa} {
      scale: 1.2;
      transform: translateY(-80px);
    }

    & ${Text} {
      transform: translateY(-80px);

      & ${Description} {
        max-height: 150px;
      }
    }

    & ${User} {
      box-shadow: 0 0 0px 1px var(--colorEmphasisDark);
      padding: 5px 10px;
      grid-template-columns: 40px auto;
      border-radius: 0;
    }
  }
`