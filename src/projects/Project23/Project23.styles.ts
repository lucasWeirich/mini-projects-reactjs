import styled from "styled-components";
import ButtonDefault from "../../assets/css/ButtonDefault";
import { Wrapper as Note } from "./Note";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & ${ButtonDefault} {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
  }
`

export const GridAllNotes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: dense;
  gap: 30px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    &:hover {
      ${Note} {
        opacity: 0.4;
      }
    }
  }
`