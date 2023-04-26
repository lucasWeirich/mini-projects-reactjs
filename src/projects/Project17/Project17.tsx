import { useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project17.styles'
import ButtonDefault from "../../assets/css/ButtonDefault";
import Toast from "./Toast";


export default function Project17({ title }: ProjectsProps) {
  usePageTitle('Toast Notification');
  const [submitToast, setSubmitToast] = useState<{ message: string, type: 'error' | 'info' } | undefined>(undefined);

  function handleClickShowToast(type: 'error' | 'info') {
    if (type === 'error')
      setSubmitToast({
        message: 'This toast of error! ERR - toast',
        type: 'error'
      })
    else
      setSubmitToast({
        message: 'This toast of info!',
        type: 'info'
      })
  }

  return <TemplateDefault title={title}>
    <CSS.Wrapper>

      <ButtonDefault onClick={() => handleClickShowToast('info')}>
        Show toast of <br /> [ INFO ]
      </ButtonDefault>

      <ButtonDefault onClick={() => handleClickShowToast('error')}>
        Show toast of <br /> [ ERROR ]
      </ButtonDefault>

      <Toast
        newToast={submitToast}
      />
    </CSS.Wrapper>
  </TemplateDefault>
}