import { ProjectsProps } from '../../@types/projects.types'
import usePageTitle from '../../hook/usePageTitle'
import TemplateDefault from '../../templates/Default.template'
import ButtonSound from './ButtonSound/ButtonSound';
import * as CSS from './Project06.styles'
import { mdiAccessPoint, mdiHandClap, mdiMusic, mdiTrophy } from "@mdi/js";

export default function Project06({ title }: ProjectsProps) {
  usePageTitle('');

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <ButtonSound
        name='applause'
        audio='/project06/sounds/applause.mp3'
        icon={mdiHandClap}
      />
      <ButtonSound
        name='boo'
        audio='/project06/sounds/boo.mp3'
        icon={mdiMusic}
      />
      <ButtonSound
        name='gasp'
        audio='/project06/sounds/gasp.mp3'
        icon={mdiMusic}
      />
      <ButtonSound
        name='tada'
        audio='/project06/sounds/tada.mp3'
        icon={mdiMusic}
      />
      <ButtonSound
        name='victory'
        audio='/project06/sounds/victory.mp3'
        icon={mdiTrophy}
      />
      <ButtonSound
        name='wrong'
        audio='/project06/sounds/wrong.mp3'
        icon={mdiMusic}
      />
    </CSS.Wrapper>
  </TemplateDefault>
}