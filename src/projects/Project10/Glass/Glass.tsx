import styled from "styled-components"
import useNumberToFixed from "../functions/useNumberToFixed"

interface GlassProps {
  size: 'small' | 'big'
  liters: {
    number: number,
    unitOfMeasurement: 'L' | 'ml'
  }
  percentage?: number
  active?: boolean
  onClick?: () => any
}

export default function Glass({ size, liters, active, percentage, onClick }: GlassProps) {
  const liter = `${useNumberToFixed(liters.number)} ${liters.unitOfMeasurement}`;

  return <Wrapper size={size} active={active} onClick={onClick}>
    <Liters size={size}>
      {liter}

      {
        size === 'big' &&
        <span>Remained</span>
      }
    </Liters>

    {
      size === 'big' &&
      <Porcent percentage={percentage}>
        <span>{useNumberToFixed(percentage || 0)}%</span>
      </Porcent>
    }
  </Wrapper>
}

const Porcent = styled.div<{
  percentage?: number
}>`
  width: 100%;
  height: ${p => p.percentage ? `${p.percentage}%` : '0%'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #adecff;
  overflow: hidden;
  border-radius: 5px;

  & span {
    color: var(--colorEmphasisDark);
    font-size: 25px;
    font-weight: 600;
  }
`

const Liters = styled.div<{
  size: 'small' | 'big'
}>`
  width: 100%;
  height: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 5px;
  ${p => p.size === 'big' ? `
    font-size: 20px;
    font-weight: 600;
  ` : `
    font-size: 15px;
  `}
  
  & span {
    color: var(--colorEmphasisSubLight);
    font-size: 16px;
    font-weight: 400;
  }
`

const Wrapper = styled.div<{
  size: 'small' | 'big'
  active?: boolean
}>`
  width: 100%;
  max-width: ${p => p.size === 'big' ? '250px' : '70px'};
  height: ${p => p.size === 'big' ? '450px' : '120px'};
  border: solid 2px var(--colorEmphasisDark);
  border-radius: 10px 10px 35% 35%;
  background-color: var(--colorSubDark);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: ${p => p.size === 'small' ? 'pointer' : 'default'};
  transition: all 0.3s;

  ${p => p.active && 'background: #adecff; color: var(--colorEmphasisDark);'}

  &::before {
    content: '';
    width: 100%;
    height: 5%;
    border: solid 2px var(--colorEmphasisDark);
    border-radius: 10px 10px 50% 50%;
    background-color: var(--colorSubDark);

    position: absolute;
    top: -2px;
    left: -2px;
  }
`