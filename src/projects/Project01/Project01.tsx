import * as CSS from './Project01.styles'
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import { useState } from 'react';

export default function Project01({ title }: ProjectsProps) {
  usePageTitle('Expanding Cards');

  const [cardActive, setCardActive] = useState(1);
  const [positionColumn, setPositionColumn] = useState(false);

  const allImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      label: 'Explore The World',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      label: 'Wild Forest',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      label: 'Sunny Beach',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      label: 'City on Winter',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      label: 'Mountains - Clouds',
    }
  ];

  function handleCLickCard(e: React.MouseEvent) {
    const { id } = e.target as HTMLDivElement;
    if (id) setCardActive(Number(id));
  }

  return <TemplateDefault title={title}>

    <CSS.ButtonRandon onClick={() => setPositionColumn(!positionColumn)}>Change Direction</CSS.ButtonRandon>
    <CSS.Wrapper positionColumn={positionColumn}>
      {
        allImages.map(image => (
          <CSS.Cards
            key={image.id}
            image={image.url}
            id={`${image.id}`}
            active={image.id === cardActive}
            onClick={handleCLickCard}
          >
            <h1>{image.label}</h1>
          </CSS.Cards>
        ))
      }
    </CSS.Wrapper>
  </TemplateDefault>
}