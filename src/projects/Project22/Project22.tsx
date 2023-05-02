import { useEffect, useRef, useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project22.styles'
import RadioButton from "./RadioButton";

export default function Project22({ title }: ProjectsProps) {
  usePageTitle('Good, Cheap, Fast');

  const _resetDataRadios = { good: false, cheap: false, fast: false };
  const [dataRadios, setDataRadios] = useState(_resetDataRadios);

  function handleRadiosButtons(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;

    setDataRadios(prev => {
      const newData = {
        ...prev,
        [name]: checked,
      }

      if (newData.good && newData.cheap && newData.fast) {
        switch (name) {
          case 'good':
            newData.fast = false;
            break;
          case 'cheap':
            newData.good = false;
            break;
          case 'fast':
            newData.cheap = false;
            break;
        }
      }
      return newData;
    })
  }

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <h2>How do you want your project to be?</h2>

      <CSS.GroupRadios>
        <RadioButton
          label="Good"
          name="good"
          checked={dataRadios.good}
          updateData={handleRadiosButtons}
        />
        <RadioButton
          label="Cheap"
          name="cheap"
          checked={dataRadios.cheap}
          updateData={handleRadiosButtons}
        />
        <RadioButton
          label="Fast"
          name="fast"
          checked={dataRadios.fast}
          updateData={handleRadiosButtons}
        />
      </CSS.GroupRadios>
    </CSS.Wrapper>
  </TemplateDefault>
}