import styled from "styled-components"
import TemplateDefault from "../../templates/Default.template"
import usePageTitle from "../../hook/usePageTitle"
interface NotFound404Props {
  title: string
}

export default function NotFound404({ title }: NotFound404Props ) {
  usePageTitle('Not Found');

  return <TemplateDefault title={title}>
    <Wrapper>
      <h1>Opss! I'm sorry, but the page you are trying to access does not exist. Please check the URL and try again!</h1>

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
    max-width: 600px;
    font-size: 40px;
    text-align: center;
    margin: 0 auto;
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