import { mdiEye } from "@mdi/js";
import { Icon } from "@mdi/react";
import { useState } from "react";
import styled from "styled-components"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export default function Input({ label, name, value, type, ...props }: InputProps) {

  const [viewPassword, setViewPassword] = useState(false);
  const labelUnstructured = label.split('');

  return <Wrapper>

    {
      type === 'password' &&
      <ButtonViewPassword onClick={() => setViewPassword(!viewPassword)}>
        <Icon
          path={mdiEye}
          color={viewPassword ? 'var(--colorLight)' : 'var(--colorDark)'}
          size='20px'
        />
      </ButtonViewPassword>
    }

    <input
      name={name}
      type={type === 'password' && viewPassword ? 'text' : type}
      {...props}
    />
    <label
      className={value ? 'active' : ''}
      htmlFor={name}
    >
      {
        labelUnstructured.map((string, index) => (
          <span
            key={index}
            style={{
              transitionDelay: `0.${index}s`
            }}
          >
            {string}
          </span>
        ))
      }
    </label>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: var(--colorSubDark);
  margin: 40px 0;
  position: relative;
  border-radius: 5px;
  transition: all 0.3s;

  & label {
    display: flex;
    margin-left: 10px;
    position: absolute;

    &.active {
      & span {
        transform: translatey(-35px);
      color: var(--colorEmphasisLight);
      }
    }

    & span {
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }

  & input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    color: var(--colorEmphasisSubLight);
    z-index: 2;
    padding: 0 10px;
    border-radius: 5px;
    transition: all 0.3s;
    &:focus {
      box-shadow: 0 0 0px 2px var(--colorEmphasisDark);
    }

    &:focus + label > span {
      transform: translatey(-35px);
      color: var(--colorEmphasisLight);
    }
  }
`

const ButtonViewPassword = styled.span`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  right: 10px;
  cursor: pointer;
  z-index: 9;
`