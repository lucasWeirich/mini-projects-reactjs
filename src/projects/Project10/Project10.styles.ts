import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;


  & h3 {
    font-size: 25px;
    font-weight: 400;

    & span {
      background: var(--colorEmphasisSubLight);
      color: var(--colorEmphasisDark);
      padding: 0 5px 2px 5px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: 600;
    }
  }
`

export const Display = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 10px;
`

export const Details = styled.details`
  width: 100%;
  margin-bottom: 50px;
  text-align: center;

  &>div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0px;
    text-align: center;
    padding: 10px 0;
  }

  & label {
    color: var(--colorEmphasisLight);
  }

  & input {
    width: 100%;
    max-width: 500px;
    height: 35px;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    padding: 0 10px;
  }
`