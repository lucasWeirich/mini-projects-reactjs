import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  border-radius: 10px;
  padding: 20px;
  background-color: var(--colorSubDark);
  display: flex;
  flex-direction: column;
  gap: 30px;

  & h3 {
    text-align: center;
    color: var(--colorEmphasisSubLight);
  }
`

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
`

export const InputText = styled.textarea`
  width: 100%;
  height: 200px;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 0 2px var(--colorBorder);
  resize: none;
  transition: all 0.3s;

  &:focus {
    box-shadow: 0 0 0 2px var(--colorEmphasisLight);
  }
`

export const Grid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  &>div {
    flex-grow: 1;
    background-color: var(--colorEmphasisDark);
    border-radius: 5px;
    padding: 5px 20px;
    text-align: center;
    transition: all 0.3s;

    &.active {
      background-color: var(--colorEmphasisLight);
      box-shadow: 5px 5px 10px -4px var(--colorEmphasisSubLight);
    }
  }
  &>span {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #777;
    margin: 0 auto;
  }
`