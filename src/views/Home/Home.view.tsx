import * as HV from './Home.styles'
import TemplateDefault from "../../templates/Default.template";
import { allProjects } from "../../utils/allProjects";
import usePageTitle from '../../hook/usePageTitle';

interface HomeProps {
  title: string
}

export default function HomeView({ title }: HomeProps) {

  usePageTitle('');

  return <TemplateDefault title={title}>
    <HV.Wrapper>
      {
        allProjects.map(project => (
          <HV.Card key={project.id} to={project.url}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <img src={project.img} alt="" />
            <span className="Id">{project.id}</span>
          </HV.Card>
        ))
      }
    </HV.Wrapper>
  </TemplateDefault>
}