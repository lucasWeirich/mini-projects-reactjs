import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 700px) {
    gap: 20px;
  }
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--colorSubDark);
  text-align: center;
  transition: all 0.5s;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`

export const Joker = styled.span`
  max-width: 1000px;
  font-size: 25px;
  letter-spacing: 0px;

  color: var(--colorLight);
  text-align: center;
  transition: all 0.5s;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`

export const NoJoker = styled(Joker)`
  color: #444!important;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px 50px;
`

export const ButtonLike = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  & svg path {
    transition: all 0.2s;
  }

  &:active {
    scale: 0.9;
  }
`

export const CardJoker = styled.div`
  min-height: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px #444;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  transition: all 0.5s;

  &:hover {
    background-color: var(--colorSubDark);

    & ${Title} {
      color: var(--colorLight);
    }
    
    & ${Joker} {
      color: var(--colorEmphasisSubLight);
    }
  }
`

export const Favorite = styled.div`
  width: 100%;
  
  & h2 {
    font-size: 25px;
    text-align: center;
    margin-bottom: 30px;
  }

  @media (max-width: 700px) {
    & h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
`

export const AllFavorites = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
  padding-bottom: 50px;
`

export const ButtonRemoveFavorite = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    & svg path {
      fill: var(--colorEmphasisSubLight)!important;
    }
  }

  & svg path {
    transition: all 0.3s;
  }
`

export const CardFavorite = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: end;
  border-radius: 10px;
  padding: 20px;
  background-color: var(--colorSubDark);
  transition: all 0.5s;
  transform: translateX(100px);
  opacity: 0;

  &.show {
    transform: translateX(0px);
    opacity: 1;
  }

  @media (max-width: 700px) {
    padding: 10px;
    flex-direction: column;
    text-align: center;
  }
` 