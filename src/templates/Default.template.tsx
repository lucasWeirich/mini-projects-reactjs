import styled from "styled-components"
import NavBar from "../components/NavBar/NavBar"

interface TemplateDefaultProps {
  children: React.ReactNode
}

export default function TemplateDefault({ children }: TemplateDefaultProps) {
  return <Wrapper>
    <NavBar />

    <div className="Container">
      {children}
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`