import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: var(--colorOne);
  transition: all 0.3s;

  & * {
    color: var(--colorTwo);
  }
`

export const Date = styled.div`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  text-transform: uppercase;
  
  & .--Day {
    width: 30px;
    aspect-ratio: 1/1;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--colorEmphasisDark);
    border-radius: 50%;
    color: #f2f2f2;
  }
`

export const DigitalWatch = styled.div`
  font-family: cursive;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
`

export const Pointer = styled.span<{
  needle: 'hour' | 'minute' | 'second'
}>`
  background-color: var(--colorTwo);
  position: absolute;
  
  ${p => p.needle === 'hour' && `
    width: 70px;
    height: 2px;
    transform: translateX(20px);
    z-index: 2;
  `}
  
  ${p => p.needle === 'minute' && `
    width: 130px;
    height: 2px;
    transform: translateX(50px);
    z-index: 3;
  `}
  
  ${p => p.needle === 'second' && `
    width: 100px;
    height: 1px;
    transform: translateX(35px);
    background: var(--colorEmphasisLight);
    z-index: 1;
  `}
`

export const MacroClock = styled.span<{
  children: React.ReactNode 
}>`
  font-size: 15px;
  font-weight: 600;
  transition: all 0.5s;
  position: absolute;
  
  ${p => p.children === '3' && `
    right: 0;
  `}
  ${p => p.children === '6' && `
    bottom: 0;
  `}
  ${p => p.children === '9' && `
    left: 0;
  `}
  ${p => p.children === '12' && `
    top: 0;
  `}
`

export const AnalogClock = styled.div`
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1/1;
  margin: 0 auto;
  border-radius: 50%;
  border: solid 2px transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.8s;
  position: relative;

  &:hover {
    border-color: var(--colorTwo);
    background: #ffffff0d;

    & ${MacroClock} {
      padding: 10px;
      text-shadow: 1px 1px var(--colorEmphasisSubLight);
    }
  }
`

export const ButtonTheme = styled.button`
  width: 200px;
  min-height: 40px;
  margin: 0 auto;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: var(--colorTwo);
  color: var(--colorOne);
  position: relative;
  transition: all 0.3s;
  z-index: 1;

  &:hover {
    cursor: pointer;

    &::before, &::after {
      width: 90%;
      height: 90%;
      opacity: 1;
    }

    &::before {
      bottom: -6px;
      left: -6px;
    }
  
    &::after {
      top: -6px;
      right: -6px;
    }

    &:active {
      scale: 0.9;

      &::before, &::after {
        width: 80%;
        height: 80%;
        opacity: 0.5;
      }
    }
  }

  &::before, &::after {
    content: '';
    width: 0%;
    height: 0%;
    box-shadow: 0 0 0 2px var(--colorTwo);
    background-color: 0 0 0 2px var(--colorOne);
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
    opacity: 0;
  }

  &::before {
    bottom: 2px;
    left: 2px;
  }

  &::after {
    top: 2px;
    right: 2px;
  }
`