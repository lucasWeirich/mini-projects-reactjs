import { ProjectsProps } from '../../@types/projects.types'
import usePageTitle from '../../hook/usePageTitle'
import TemplateDefault from '../../templates/Default.template'
import ButtonEffect from './ButtonEffect/ButtonEffect';
import * as CSS from './Project13.styles'

export default function Project13({ title }: ProjectsProps) {
  usePageTitle('Button Ripple Effect');

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <ButtonEffect
        id='button1' 
        label="Click Me"
        onClick={() => console.log('Você clicou!')}
      />
      <ButtonEffect 
        id='button2'
        label="Click Here"
        onClick={() => console.log('Você clicou tambem!')}
      />
      <ButtonEffect 
        id='button3'
        label="Look at the console.log()"
        onClick={() => console.log('Obrigado por clicar!')}
      />
    </CSS.Wrapper>
  </TemplateDefault>
}