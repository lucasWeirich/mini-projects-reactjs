import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";

export default function Project02({title}: ProjectsProps) {
  usePageTitle('Ainda nao sei o title');
  
  return <TemplateDefault title={title}>
    <h1>Project2</h1>
  </TemplateDefault>
}