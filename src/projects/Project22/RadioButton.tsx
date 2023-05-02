import { useState } from "react"
import styled from "styled-components"

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  checked: boolean
  updateData: (e: React.ChangeEvent<HTMLInputElement>) => any
}

export default function RadioButton({ label, name, checked, updateData, ...props }: RadioButtonProps) {

  return <Wrapper>
    <label htmlFor={name}>
      <input
        {...props}
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={(e) => updateData(e)}
      />

      <Radio
        checked={checked}
      />
    </label>

    <span>{label}</span>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & span {
    font-size: 20px;
    font-weight: 600;
  }

  & input {
    visibility: hidden;
    position: absolute;
    z-index: -999;
  }
`

export const Radio = styled.div<{
  checked?: boolean
}>`
  width: 80px;
  height: 40px;
  background-color: ${p => p.checked ? 'var(--colorEmphasisDark)' : 'var(--colorSubDark)'};
  border-radius: 20px;
  display: flex;
  padding: 5px;
  cursor: pointer;
  transition: all 0.5s;

  &::before {
    content: '';
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 25px;
    background-color: ${p => p.checked ? '#fff' : '#444'};
    margin-left: ${p => p.checked ? 'calc(100% - 30px)' : '0px'};
    transition: all 0.5s;
    animation: ${p => p.checked ? 'animationCheckedTrue' : 'animationCheckedFalse'} 1s;;

    @keyframes animationCheckedTrue {
      from {
        width: 60px;
      }
      to {
        width: 30px;
      }
    }
    @keyframes animationCheckedFalse {
      from {
        width: 60px;
      }
      to {
        width: 30px;
      }
    }
  }
`