import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  & h2 {
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 1px;
    color: var(--colorEmphasisSubLight);
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 18px;
      letter-spacing: 0px;
    }
  }
`

export const GroupRadios = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`