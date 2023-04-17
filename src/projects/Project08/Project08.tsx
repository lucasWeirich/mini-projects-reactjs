import * as CSS from './Project08.styles'
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import { useEffect, useState } from 'react';

export default function Project08({ title }: ProjectsProps) {
  usePageTitle('Random Choice Picker');

  const [dataText, setDataText] = useState('');
  const [choices, setChoices] = useState<string[]>([]);

  function handleChangeInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;

    setDataText(value);
    getChoices(value);
  }

  function getChoices(obj: string) {
    const newChoices = obj.split(',');

    setChoices(newChoices);
  }

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const indexArray = Math.floor(Math.random() * choices.length);
        const choicePicker = choices[indexArray];
        setChoices([choicePicker]);
        setDataText(choicePicker);
      }
    })
  }, [dataText])

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.Title>
        Enter all of the choices divided by a comma (',').
        <br />
        Press enter when you're done.
      </CSS.Title>

      <CSS.InputText
        placeholder='Enter choices here...'
        value={dataText}
        onChange={handleChangeInput}
      />

      {
        choices.length === 1 &&
        <h3>Choice Picker</h3>
      }

      <CSS.Grid>
        {
          choices[0] ?
            choices.map((choice, index) => {
              if (choice) {
                return <div className={choices.length === 1 ? 'active' : ''} key={index}>{choice}</div>
              }
            })
            :
            <span>No choice yet</span>
        }
      </CSS.Grid>
    </CSS.Wrapper>
  </TemplateDefault>
}