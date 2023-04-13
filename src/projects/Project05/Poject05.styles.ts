import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`

export const Error = styled.span`
  font-size: 15px;
  color: #b92929;
  font-weight: bold;
  text-align: center;
  transition: all 0.4s;
`

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  min-height: 500px;
  background-color: var(--colorDark);
  box-shadow: 0px 0px 15px var(--colorSubDark);
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`

