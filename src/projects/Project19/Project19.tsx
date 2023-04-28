import { useRef, useState } from 'react';
import { ProjectsProps } from '../../@types/projects.types'
import usePageTitle from '../../hook/usePageTitle'
import TemplateDefault from '../../templates/Default.template'
import * as CSS from './Project19.styles'
import { Icon } from '@mdi/react'
import { mdiHeart } from '@mdi/js';

export default function Project19({ title }: ProjectsProps) {
  usePageTitle('Double Click Heart');

  const [amountLikes, setAmountLikes] = useState<number>(0);
  const [showEffect, setShowEffect] = useState(false);
  const [positionHeart, setPositionHeart] = useState({x: 0, y: 0});
  const clickTime = useRef(0);

  const getTimeNow = () => new Date().getTime();

  const handleDoubleClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (clickTime.current === 0)
      clickTime.current = getTimeNow();
    else {
      if ((getTimeNow() - clickTime.current) < 800) {
        createHeartEffect(e);
        clickTime.current = 0;
      }
      else {
        clickTime.current = getTimeNow();
      }
    }
  }

  const createHeartEffect = (e: any) => {
    const {
      clientX: x,
      clientY: y,
      target: {
        offsetTop: top,
        offsetLeft: left
      }
    } = e;

    const xInside = left - x;
    const yInside = top - y;

    setPositionHeart({
      x: xInside,
      y: yInside
    })

    setShowEffect(true);
    setTimeout(() => setShowEffect(false), 600);
    setAmountLikes(prev => prev + 1);
  }

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <div className='Title'>
        <h1>Double click on the image to ❤️ it</h1>
        <span>You liked it {amountLikes} times</span>
      </div>

      <CSS.Card
        positionHeart={positionHeart}
        onClick={(e) => handleDoubleClickCard(e)}
      >
        {/* <img src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Image Card" /> */}

        {
          showEffect &&
          <Icon
            path={mdiHeart}
            size='50px'
            color='#ff0000'
            style={{
              top: `${positionHeart.y}px`,
              left: `${positionHeart.x}px`
            }}
          />
        }
      </CSS.Card>
    </CSS.Wrapper>
  </TemplateDefault>
}