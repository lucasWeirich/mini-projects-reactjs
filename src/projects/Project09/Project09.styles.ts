import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`

export const Display = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`

export const Item = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .--number {
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    color: #fff;
  }

  & h5 {
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
  }
`

export const SubTitle = styled.h2`
  margin-top: 50px;
  text-align: center;
  color: var(--colorSubDark);
`