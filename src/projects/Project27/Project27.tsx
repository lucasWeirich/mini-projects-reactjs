import { useEffect, useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project27.styles'
import ButtonDefault from "../../assets/css/ButtonDefault";

export default function Project27({ title }: ProjectsProps) {
  usePageTitle('3D Boxes Background');

  const [boxesActived, setBoxesActived] = useState(true);
  const [allBoxes, setAllBoxes] = useState<{ x: number, y: number }[]>([]);

  useEffect(() => {
    function createBoxes() {
      const newAllBoxes = [];
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          newAllBoxes.push({
            x: - (j * 125),
            y: - (i * 125)
          });
        }
      }
      setAllBoxes(newAllBoxes);
    } createBoxes()
  }, [])

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <ButtonDefault onClick={() => setBoxesActived(prev => !prev)}>Magic 🎩</ButtonDefault>
      <CSS.Boxes actived={boxesActived}>
        {
          allBoxes.map(box => (
            <div
              style={{ backgroundPosition: `${box.x}px ${box.y}px` }}
            />
          ))
        }
      </CSS.Boxes>
    </CSS.Wrapper>
  </TemplateDefault>
}