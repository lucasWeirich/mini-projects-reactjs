import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
`

export const Card = styled.div`
  width: 100%;
  max-width: 400px;
`

export const DisplayPassword = styled.div`
  min-height: 40px;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: var(--colorSubDark);
  position: relative;

  & span {
    font-size: 15px;
    font-weight: 500;
    padding: 5px 0;
    overflow-wrap: anywhere;
  }
  
  & button {
    border: none;
    background-color: transparent;

    & span {
      width: 75px;
      text-align: center;
      padding: 2px 8px;
      border-radius: 5px;
      background-color: var(--colorSubDark);
      color: green;
      box-shadow: 0 0 4px #555;
      position: absolute;
      top: -25px;
      right: 0;
    }

    &:not(:disabled) {
      &:hover {
        cursor: pointer;
      }

      &:active {
        scale: 0.9;
      }
    }
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    color: #888;
    font-weight: 600;
  }

  & input:not(type="checkbox") {
    width: 100%;
  }

  &>div {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    transition: all 0.3s;

    &:hover {
      background-color: #333;
    }

    & label,
    & input[type="checkbox"] {
      cursor: pointer;
    }
  }
`