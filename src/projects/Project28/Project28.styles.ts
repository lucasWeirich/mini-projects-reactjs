import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`

export const Phone = styled.div`
  width: 100%;
  max-width: 350px;
  height: 100vh;
  max-height: 550px;
  border-radius: 10px;
  box-shadow: 0 0 0 2px var(--colorBorder);
  overflow: hidden;
`

export const Header = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--colorEmphasisDark);
  padding: 0 10px;

  & input {
    width: 100%;
    max-width: 250px;
    height: 30px;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 15px;
    padding: 0 10px;
    box-shadow: 0 0 0 2px var(--colorBorder);
    transition: all 0.3s;

    &:focus {
      box-shadow: 0 0 0 2px var(--colorEmphasisLight);
      background-color: #444;
    }
  }
`

export const Screen = styled.ul`
  height: calc(100% - 150px);
  list-style: none;
  overflow: auto;

  & li {
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 15px;
    padding: 30px 20px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background-color: #333;
    }
    
    &:not(:last-child) {
      border-bottom: solid 1px var(--colorBorder);
    }

    & img {
      border-radius: 50%;
    }
  }
`