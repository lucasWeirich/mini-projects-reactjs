import { Link } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

export const Card = styled(Link)`
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  border: solid 2px var(--colorBorder);
  position: relative;
  text-decoration: none;
  color: var(--colorLight);
  transition: all 0.3s;
  min-height: 300px;

  &:hover {
    background-color: var(--colorSubDark);
    box-shadow: 10px 10px 10px -5px var(--colorBorder);

    & h3 {
      color: var(--colorEmphasisSubLight);
    }
    & p {
      display: initial;
      opacity: 1;
    }
    & img {
      display: none;
    }
  }

  & .Id {
    position: absolute;
    top: 0px;
    right: 5px;
    font-size: 12px;
    font-weight: 600;
    color: var(--colorEmphasisSubLight);
  }

  & h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    transition: all 0.3s;
  }

  & p {
    font-size: 14px;
    display: none;
    opacity: 0;
    transition: opacity 0.5s;
    
  }

  & img {
    width: 100%;
    margin: auto;
    display: flex;
    border-radius: 5px;
    object-fit: contain;
  }

  @media (max-width: 1000px) {
    &:hover {
      background-color: var(--colorSubDark);
      box-shadow: 10px 10px 10px -5px var(--colorBorder);
      
      & img {
        display: initial!important;
      }
    }

    & p {
      display: initial;
      opacity: 1;
    }
  }
`