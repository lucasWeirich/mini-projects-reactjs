import styled from "styled-components";

const ButtonDefault = styled.button`
  display: flex;
  padding: 10px 30px;
  border-radius: 5px;
  outline: none;
  border: solid 2px transparent;
  background-color: var(--colorEmphasisDark);
  color: var(--colorLight);
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
  transition: all 0.5s;
  cursor: pointer;

  &:hover:not(:disabled) {
    box-shadow: 5px 5px 14px -2px var(--colorEmphasisSubLight);
    color: var(--colorEmphasisSubLight);
  }

  &:disabled {
    background-color: var(--colorEmphasisSubLight);
    color: var(--colorDark);
    cursor: no-drop;
  }
`

export default ButtonDefault;