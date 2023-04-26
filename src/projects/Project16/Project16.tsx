import { useEffect, useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project16.styles'

export default function Project16({ title }: ProjectsProps) {
  usePageTitle('Vertical Slider');

  const [sliders, setSliders] = useState([
    {
      id: 1,
      title: 'Bluuue Sky',
      description: "with it's mountains",
      img: 'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80',
      bg_color: '#2A86BA'
    },
    {
      id: 2,
      title: 'Lonely castle',
      description: 'in the wilderness',
      img: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80',
      bg_color: '#252E33'
    },
    {
      id: 3,
      title: 'Nature flower',
      description: 'all in pink',
      img: 'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80',
      bg_color: '#FD3555'
    },
    {
      id: 4,
      title: 'Flying eagle',
      description: 'in the sunset',
      img: 'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80',
      bg_color: '#FFB866'
    },
  ]);
  const [slideActive, setSlideActive] = useState<number>(0);
  const [positionSlide, setPositionSlide] = useState(updatePositionSlide);

  function updatePositionSlide() {
    return {
      txt: - (slideActive * 100),
      img: (slideActive - (sliders.length - 1)) * 100,
    }
  }

  useEffect(() => {
    setPositionSlide(updatePositionSlide)
  }, [slideActive])

  function handleClickPrevNextSlide(type: 'prev' | 'next') {
    if (type === 'prev')
      setSlideActive(prev => validaSlideActive(prev - 1));
    if (type === 'next')
      setSlideActive(prev => validaSlideActive(prev + 1));
  }

  function validaSlideActive(number: number) {
    let maxSlider = sliders.length - 1;

    if (number < 0)
      return maxSlider;
    else if (number > maxSlider)
      return 0;
    else
      return number;
  }

  console.log(slideActive)
  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.Slider>
        <CSS.SlideGroup>
          {
            sliders.map(slide => (
              <CSS.Text
                key={slide.id}
                bgColor={slide.bg_color}
                positionSlide={positionSlide.txt}
              >
                <h3>{slide.title}</h3>
                <span>{slide.description}</span>
              </CSS.Text>
            ))
          }
        </CSS.SlideGroup>

        <CSS.DisplayButton>
          <button onClick={() => handleClickPrevNextSlide('prev')}>prev</button>
          <button onClick={() => handleClickPrevNextSlide('next')}>next</button>
        </CSS.DisplayButton>

        <CSS.SlideGroup>
          {
            sliders.map(slide => (
              <CSS.Image
                key={slide.id}
                bgColor={slide.bg_color}
                positionSlide={positionSlide.img}

              >
                <img src={slide.img} alt={slide.title} />
              </CSS.Image>
            )).reverse()
          }
        </CSS.SlideGroup>
      </CSS.Slider>

      <CSS.Info>
        Slide with responsive - ok
      </CSS.Info>
    </CSS.Wrapper>
  </TemplateDefault>
}