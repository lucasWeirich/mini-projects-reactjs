import styled from "styled-components";

export const Wrapper = styled.div<{
  bg: string
  filter: number
  active: boolean
}>`
  width: 100%;
  height: 100%;
  background: var(--colorSubDark) ${p => p.bg && `url(${p.bg}) center no-repeat`};
  background-size: cover;
  position:relative;
  transition: all 3s;
  filter: blur(${p => p.filter}px);
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  visibility: collapse;
  z-index: -999;

  ${p => p.active && `
    opacity: 1;
    visibility: visible;
    z-index: 999;
  `}
`

export const Loading = styled.h4<{
  active: boolean
}>`
  width: 100%;
  height: 100%;
  color: var(--colorEmphasisLight);
  text-shadow: 2px 1px #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;

  opacity: 0;
  visibility: collapse;
  z-index: -999;

  ${p => p.active && `
    opacity: 1;
    visibility: visible;
    z-index: 999;
  `}
`