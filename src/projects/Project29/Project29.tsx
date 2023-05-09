import Icon from "@mdi/react";
import { ProjectsProps } from "../../@types/projects.types";
import ButtonDefault from "../../assets/css/ButtonDefault";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project29.styles'
import { mdiEmoticonAngry, mdiEmoticonConfused, mdiEmoticonExcited, mdiHeart } from "@mdi/js";
import { useState } from "react";

export default function Project29({ title }: ProjectsProps) {
  usePageTitle('Feedback UI Design');

  const [feedbackSend, setFeedbackSend] = useState({ label: '', color: '' });
  const [optionSelected, setOptionSelected] = useState(1);
  const [options, setOptions] = useState([
    {
      icon: mdiEmoticonAngry,
      label: 'Unhappy',
      color: '#FF4D4F'
    },
    {
      icon: mdiEmoticonConfused,
      label: 'Neutral',
      color: '#FFC107'
    },
    {
      icon: mdiEmoticonExcited,
      label: 'Satisfied',
      color: '#52C41A'
    },
  ]);

  const handleClickOption = (index: number) => {
    setOptionSelected(index);
  }

  const handleSendFeedback = () => {
    setFeedbackSend({
      label: options[optionSelected].label,
      color: options[optionSelected].color
    });
  }

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.Feedback>
        {
          !feedbackSend.label ?
            <>
              <h4>How satisfied are you with our customer support performance?</h4>

              <CSS.Options>
                {
                  options.map((option, index) => (
                    <CSS.ItemOption
                      key={index}
                      colorHover={option.color}
                      actived={optionSelected === index}
                      onClick={() => handleClickOption(index)}
                    >
                      <Icon
                        path={option.icon}
                        size='30px'
                        color="#999"
                      />
                      <span>{option.label}</span>
                    </CSS.ItemOption>
                  ))
                }
              </CSS.Options>

              <ButtonDefault onClick={handleSendFeedback}>Send</ButtonDefault>
            </>
            :
            <>
              <Icon
                path={mdiHeart}
                size='35px'
                color='red'
              />

              <div style={{padding: '20px 0'}}>
                <h3>Thank You!</h3>
                <h3>Feedback:
                  <span style={{ color: feedbackSend.color }}> {feedbackSend.label}</span>
                </h3>
              </div>

              <span style={{ color: '#9999', textAlign: "center" }}>We'll use your feedback to improve our customer support</span>
            </>
        }
      </CSS.Feedback>
    </CSS.Wrapper>
  </TemplateDefault>
}