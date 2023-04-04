import styled from "styled-components"
import TemplateDefault from "../../templates/Default.template"

export default function NotFound404() {
  return <TemplateDefault>
    <Wrapper>
      <h1>Not Found - 404</h1>

      <a href="/">Back HOME</a>
    </Wrapper>
  </TemplateDefault>
}

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 50px;

  & h1 {
    font-size: 40px;
    text-align: center;
  }

  & a {
    text-align: center;
    padding: 10px 45px;
    background-color: var(--colorEmphasisLight);
    color: #fff;
    border-radius: 10px;
    margin: 0 auto;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      background-color: var(--colorEmphasisDark);
      box-shadow: 4px 4px 10px -2px var(--colorEmphasisSubLight);
    }
  }
`