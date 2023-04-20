import { useEffect, useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project11.styles'
import ButtonDefault from "../../assets/css/ButtonDefault";

export default function Project11({ title }: ProjectsProps) {
  usePageTitle('Background Slider');

  const slides = [
    '/project11/slides/slide1.jpeg',
    '/project11/slides/slide2.jpeg',
    '/project11/slides/slide3.jpeg',
    '/project11/slides/slide4.jpeg',
    '/project11/slides/slide5.jpeg'
  ];

  const [slideActive, setSlideActive] = useState(0);
  const [optionsSlider, setOptionsSlider] = useState({ loop: 'false', autoPlay: 'false' })

  function handlePrevNextSlide(action: 'prev' | 'next') {
    if (action === 'prev') {
      validateSlideActive(slideActive - 1)
    } else if (action === 'next') {
      validateSlideActive(slideActive + 1)
    }
  }

  function validateSlideActive(slide: number) {
    let slideMax = slides.length - 1;

    if (slide < 0)
      setSlideActive(optionsSlider.loop === 'true' ? slideMax : 0);
    else if (slide > slideMax)
      setSlideActive(optionsSlider.loop === 'true' ? 0 : slideMax)
    else setSlideActive(slide)
  }

  function handleOptionsSlider(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setOptionsSlider(prev => {
      const newOptions = {
        ...prev,
        [name]: value
      }
      return newOptions;
    });
  }

  useEffect(() => {
    if (optionsSlider.autoPlay === 'true') {
      if (optionsSlider.loop === 'false')
        setOptionsSlider({ loop: 'true', autoPlay: 'true' })

      setTimeout(() => {
        validateSlideActive(slideActive + 1);
      }, 5000)
    }
  }, [optionsSlider.autoPlay, slideActive])

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.Slider slide_bg={slides[slideActive]}>
        <CSS.ButtonsActions style={{ visibility: optionsSlider.autoPlay === 'true' ? 'collapse' : 'visible' }}>
          <ButtonDefault
            disabled={slideActive === 0 && optionsSlider.loop === 'false'}
            onClick={() => handlePrevNextSlide('prev')}
          >
            prev
          </ButtonDefault>

          <ButtonDefault
            disabled={slideActive === slides.length - 1 && optionsSlider.loop === 'false'}
            onClick={() => handlePrevNextSlide('next')}
          >
            next
          </ButtonDefault>
        </CSS.ButtonsActions>
      </CSS.Slider>

      {/* ------------------------------------------- */}

      <CSS.Options>
        <h3>Options of Slider</h3>

        <div className="--radio">
          <label htmlFor="loopTrue">Slider with loop</label>
          <input
            type="radio"
            name="loop"
            id="loopTrue"
            value={'true'}
            checked={optionsSlider.loop === 'true'}
            onChange={handleOptionsSlider}
          />
        </div>
        <div className="--radio">
          <label htmlFor="loopFalse">loopless slider</label>
          <input
            type="radio"
            name="loop"
            id="loopFalse"
            value='false'
            checked={optionsSlider.loop === 'false'}
            onChange={handleOptionsSlider}
          />
        </div>

        <div className="--divider" />

        <div className="--radio">
          <label htmlFor="autoPlayTrue">Slider with autoplay <sup>(5s)</sup></label>
          <input
            type="radio"
            name="autoPlay"
            id="autoPlayTrue"
            value='true'
            checked={optionsSlider.autoPlay === 'true'}
            onChange={handleOptionsSlider}
          />
        </div>
        <div className="--radio">
          <label htmlFor="autoPlayFalse">Slider without autoplay</label>
          <input
            type="radio"
            name="autoPlay"
            id="autoPlayFalse"
            value='false'
            checked={optionsSlider.autoPlay === 'false'}
            onChange={handleOptionsSlider}
          />
        </div>
      </CSS.Options>
    </CSS.Wrapper>
  </TemplateDefault>
}