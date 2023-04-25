import { useEffect, useState } from 'react';
import { ProjectsProps } from '../../@types/projects.types'
import usePageTitle from '../../hook/usePageTitle'
import TemplateDefault from '../../templates/Default.template'
import * as CSS from './Project15.styles'
import Skeleton from './Skeleton';

interface cardsProps {
  id: number,
  title: string,
  description: string,
  img_capa: string,
  name_user: string,
  img_user: string,
  data_post: string
}

export default function Project15({ title }: ProjectsProps) {
  usePageTitle('Skeleton Loader Card');
  const [cards, setCards] = useState<cardsProps[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setCards([{
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum, dolor sit amet consectetur sit amet elit. Tenetur ipsam eos natus molestiae, delectus alias provident aspernatur perferendis incidunt officiis modi voluptates vel in iure expedita officia cum asperiores corrupti. Lorem ipsum, dolor sit amet consectetur sit amet elit. Tenetur ipsam eos natus molestiae, delectus alias provident aspernatur perferendis incidunt officiis modi voluptates vel in iure expedita officia cum asperiores corrupti.',
        img_capa: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
        name_user: 'Lucas Weirich',
        img_user: 'myAvatar.png',
        data_post: 'Jun 21, 2022'
      }])
    }, 3000)
  }, []);

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      {
        cards[0] ?
          cards.map(card => (
            <CSS.Card>
              <CSS.Capa src={card.img_capa} alt={card.title} />

              <CSS.Text>
                <CSS.Title>{card.title}</CSS.Title>
                <CSS.Description>{card.description}</CSS.Description>
              </CSS.Text>

              <CSS.User>
                <img src={card.img_user} alt={card.name_user} />

                <div>
                  <h3>{card.name_user}</h3>
                  <span>{card.data_post}</span>
                </div>
              </CSS.User>
            </CSS.Card>
          ))
          :
          <Skeleton />
      }

    </CSS.Wrapper>
  </TemplateDefault>
}