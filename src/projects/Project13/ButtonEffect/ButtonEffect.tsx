import { useEffect, useState } from "react"
import styled from "styled-components"

interface ButtonEffectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
  label: string
  onClick: () => any
}

export default function ButtonEffect({ id, label, ...props }: ButtonEffectProps) {
  const [positionEffect, setPositionEffect] = useState({ x: 0, y: 0 });
  const [effectActive, setEffectActive] = useState(false);

  function handleEffectClick(e: any) {
    const {
      clientX: x,
      clientY: y,
      target: {
        offsetTop: top,
        offsetLeft: left
      }
    } = e;

    const xInside = x - left;
    const yInside = y - top;

    setPositionEffect({
      x: xInside,
      y: yInside
    })

    setEffectActive(true);
    setTimeout(() => {
      setEffectActive(false)
    }, 500)
  }

  useEffect(() => {
    document.querySelector(`.effect-ripple#${id}`)
      ?.addEventListener("click", handleEffectClick);
  }, [])

  return <Wrapper
    {...props}
    className="effect-ripple"
    id={id}
  >
    {label}
    {
      effectActive &&
      <span
        className="--circle"
        style={{
          top: positionEffect.y,
          left: positionEffect.x
        }}
      />
    }
  </Wrapper>
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 60px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: var(--colorEmphasisDark);
  font-size: 16px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--colorEmphasisLight);
    box-shadow: 0 0 10px var(--colorEmphasisLight);
  }

  &:active {
    scale: 0.9;
  }

  & span {
    position: absolute;
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: scale 0.5s ease-out;
    
    @keyframes scale {
      to {
        transform: translate(-50%, -50%) scale(3);
        opacity: 0;
      }
    }
  }
`