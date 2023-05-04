import { useEffect, useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import ButtonDefault from "../../assets/css/ButtonDefault";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project24.styles'

export default function Project24({ title }: ProjectsProps) {
  usePageTitle('Animated Countdown');
  
  const numberCounter = 5;
  const numberMaxCounter = Array(numberCounter + 1).fill(null);

  const [counterTime, setCounterTime] = useState(numberCounter);
  
  useEffect(() => {
    const time = setTimeout(() => {
      if (counterTime >= 0)
        setCounterTime(prev => prev - 1);
      console.log('useEffect')
    }, 900);

    return () => { clearTimeout(time) }
  }, [counterTime])

  function handleReplay() {
    setCounterTime(numberCounter);
  }

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.Countdown>

        {
          counterTime >= 0 &&
          <CSS.Counter>
            {
              numberMaxCounter.map((_, index) => (
                <span
                  key={index}
                  className={index === counterTime ? 'in' : ''}
                >
                  {index}
                </span>
              )).reverse()
            }
          </CSS.Counter>
        }

        <CSS.Text
          className={counterTime < 0 ? 'go' : ''}
        >
          {counterTime >= 0 ? 'GET READY' : 'GO'}
        </CSS.Text>

        <ButtonDefault
          onClick={handleReplay}
          disabled={counterTime >= 0}
        >
          Replay
        </ButtonDefault>
      </CSS.Countdown>
    </CSS.Wrapper>
  </TemplateDefault>
}