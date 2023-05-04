import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project25.styles'

export default function Project25({ title }: ProjectsProps) {
  usePageTitle('Hoverboard');

  // 20 colors
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#1abc9c', '#f1c40f', '#c0392b', '#2980b9', '#d35400', '#27ae60', '#f39c12', '#7f8c8d', '#2c3e50', '#bdc3c7', '#16a085', '#e84393', '#8c7ae6', '#f5bc42', '#44bd32'];

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.Board>
        {
          Array(440).fill(null).map((_, index) => (
            <CSS.Block
              key={index}
              bgHover={getRandomColor()}
            />
          ))
        }
      </CSS.Board>
    </CSS.Wrapper>
  </TemplateDefault>
}