import { useEffect, useState } from 'react';
import { ProjectsProps } from '../../@types/projects.types'
import usePageTitle from '../../hook/usePageTitle';
import TemplateDefault from '../../templates/Default.template'
import * as CSS from './Poject04.styles'
import ButtonDefault from '../../assets/css/ButtonDefault';

export default function Project04({ title }: ProjectsProps) {

  usePageTitle('Scroll Animation');

  const [textCards, setTextCards] = useState([
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nesciunt, delectus suscipit voluptas quae doloremque itaque iste neque aut error iusto provident fugiat similique, quos autem reiciendis, sint deserunt fuga!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque a optio impedit repellat aliquid nostrum mollitia modi quas? Minima ducimus voluptas excepturi. Repellat tempore voluptatibus commodi dicta fugit pariatur?',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, similique numquam doloribus nulla, neque nam ad molestias dolore cum maiores, excepturi itaque officia laboriosam dolor eos soluta voluptatem praesentium rem.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam quod voluptatibus, ducimus ex in? Culpa, atque! Voluptatibus dolor, nostrum dignissimos molestias, architecto eos, necessitatibus culpa maiores aliquid numquam enim!',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nesciunt, delectus suscipit voluptas quae doloremque itaque iste neque aut error iusto provident fugiat similique, quos autem reiciendis, sint deserunt fuga!',
  ])

  useEffect(() => {
    const cards = document.querySelectorAll(CSS.Card);
    window.addEventListener('scroll', checkBoxes)

    checkBoxes()

    function checkBoxes() {
      const triggerBottom = window.innerHeight / 5 * 4

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top

        if (cardTop < triggerBottom) {
          card.classList.add('show')
        } else {
          card.classList.remove('show')
        }
      });

    }
  }, [handleClickMoreCards]);

  function handleClickMoreCards() {
    setTextCards(prev => [
      ...prev,
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nesciunt, delectus suscipit voluptas quae doloremque itaque iste neque aut error iusto provident fugiat similique, quos autem reiciendis, sint deserunt fuga!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque a optio impedit repellat aliquid nostrum mollitia modi quas? Minima ducimus voluptas excepturi. Repellat tempore voluptatibus commodi dicta fugit pariatur?',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, similique numquam doloribus nulla, neque nam ad molestias dolore cum maiores, excepturi itaque officia laboriosam dolor eos soluta voluptatem praesentium rem.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam quod voluptatibus, ducimus ex in? Culpa, atque! Voluptatibus dolor, nostrum dignissimos molestias, architecto eos, necessitatibus culpa maiores aliquid numquam enim!',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nesciunt, delectus suscipit voluptas quae doloremque itaque iste neque aut error iusto provident fugiat similique, quos autem reiciendis, sint deserunt fuga!',
    ]);

    setTimeout(() => window.scrollBy(0, 150), 1)
  }

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      {
        textCards.map((text, i) => (
          <CSS.Card key={i}>{text}</CSS.Card>
        ))
      }

      <ButtonDefault onClick={handleClickMoreCards}>More Cards</ButtonDefault>
    </CSS.Wrapper>
  </TemplateDefault>
}