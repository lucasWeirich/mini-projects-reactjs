import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Search = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  transition: all 0.3s;
  font-size: 14px;
  letter-spacing: 5px;
  text-align: center;

  &:focus {
    box-shadow: 0 0 0 2px var(--colorEmphasisDark);
  }
`

export const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const User = styled.div`
  height: min-content;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  position: sticky;
  top: 0;

  & img {
    border-radius: 50%;
    box-shadow: 0 0 0 5px var(--colorEmphasisLight);
    transition: all 0.4s;

    &:hover {
      transform: skewX(10deg);
    }
  }

  & h5 {
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 2px;
    color: var(--colorBorder);
  }

  & p {
    margin-top: 10px;
  }

  & a {
    padding: 5px 30px;
    background-color: var(--colorEmphasisLight);
    text-decoration: none;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    transition: all 0.5s;

    &:hover {
      background-color: var(--colorEmphasisDark);
      box-shadow: 0 0 10px var(--colorEmphasisDark);
    }
  }

  & .--group {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 20px 0;
  }

  @media (max-width: 650px) {
    flex-direction: row;
    justify-content: center;
    position: static;
    flex-wrap: wrap;

    & img {
      width: 200px;
    }

    & h2 {
      font-size: 15px;
    }

    & h5 {
      font-size: 13px;
      letter-spacing: 0px;
    }

    & p {
      margin-top: 0px;
    }

    & a {
      padding: 5px 30px;
      background-color: var(--colorEmphasisLight);
      text-decoration: none;
      color: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }

    & .--group {
      gap: 10px;
      margin: 0;
    }
  }
`

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  gap: 20px;
  padding-bottom: 40px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`

export const Project = styled.div`
  min-height: 200px;
  border-radius: 10px;
  background-color: var(--colorSubDark);
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: all 0.5s ;
  
  &:nth-child(odd) {
    transform: translateX(-100px);
  }

  &:nth-child(even) {
    transform: translateX(+100px);
  }
    
  &.--show {
    opacity: 1;
    transform: translateX(0px);
  }

  & h3 {
    color: var(--colorEmphasisLight);
    text-shadow: 2px 2px 2px #000;
  }

  & .--language {
    height: 25px;
    font-size: 12px;
    font-weight: 600;
    background-color: var(--colorBorder);
    box-shadow: 0 0 5px #222;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 4px;
    padding: 0 10px;
  }

  & a {
    padding: 5px 30px;
    background-color: var(--colorEmphasisLight);
    text-decoration: none;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    transition: all 0.5s;

    &:hover {
      background-color: var(--colorEmphasisDark);
      box-shadow: 0 0 10px var(--colorEmphasisDark);
    }
  }
`