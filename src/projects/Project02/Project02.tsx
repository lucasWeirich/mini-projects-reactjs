import * as CSS from './Project02.styles'
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import { useEffect, useState } from 'react';
import ButtonDefault from '../../assets/css/ButtonDefault';
import { allSteps } from './Steps/DataAllSteps';

export default function Project02({ title }: ProjectsProps) {
  usePageTitle('Progress Steps');

  const [activeSteps, setActiveSteps] = useState(1);
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState(allSteps);

  useEffect(() => {
    function updateProgress() {
      const totalSteps = steps.length;
      const progress = ((activeSteps - 1) / (totalSteps - 1)) * 100;
      setProgress(progress);
    }

    updateProgress();
  }, [activeSteps])

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.ProgressSteps
        amountSteps={steps.length}
        progress={progress}
      >
        {
          steps.map(step => (
            <CSS.Circle
              key={step.id}
              step={step.name}
              active={step.id <= activeSteps}
            >
              {step.id}
            </CSS.Circle>
          ))
        }
      </CSS.ProgressSteps>

      <CSS.Content>
        {
          steps[activeSteps - 1].content
        }
      </CSS.Content>

      <CSS.Buttons>
        <ButtonDefault
          onClick={() => setActiveSteps(activeSteps - 1)}
          disabled={activeSteps === 1}
        >
          Prev
        </ButtonDefault>
        <ButtonDefault
          onClick={() => setActiveSteps(activeSteps + 1)}
          disabled={activeSteps === steps.length}
        >
          Next
        </ButtonDefault>
      </CSS.Buttons>
    </CSS.Wrapper>
  </TemplateDefault>
}