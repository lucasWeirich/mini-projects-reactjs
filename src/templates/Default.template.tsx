import styled from "styled-components"
import NavBar from "../components/NavBar/NavBar"

interface TemplateDefaultProps {
  title?: string
  children: React.ReactNode
}

export default function TemplateDefault({ children, title }: TemplateDefaultProps) {
  return <Wrapper>
    <NavBar />

    <div className="Container">
      <Title>{title}</Title>

      {children}
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: hidden;

  @media (max-width: 1024px) {
    gap: 20px;
  }
`

const Title = styled.h1`
  font-size: 25px;
  font-weight: 600;
  text-align: end;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  

  &::after {
    content: '< Lucas Weirich />';
    font-size: 14px;
    font-weight: 600;
    animation: authorVisible 5s infinite alternate-reverse;
  }

  @keyframes authorVisible {  
    from {
      color: var(--colorSubDark);
      opacity: 1;
    }

    to {
      color: var(--colorEmphasisSubLight);
      opacity: 0.5;
    }
  }

  @media (max-width: 1024px) {
      font-size: 18px;
      margin-bottom: 20px;
  }
`