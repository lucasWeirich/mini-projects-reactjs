import { useEffect, useRef, useState } from 'react';
import { ProjectsProps } from '../../@types/projects.types';
import usePageTitle from '../../hook/usePageTitle';
import TemplateDefault from '../../templates/Default.template';
import * as CSS from './Project14.styles';
import ButtonDefault from '../../assets/css/ButtonDefault';

export default function Project14({ title }: ProjectsProps) {
  usePageTitle('Drawing App');

  const [loaderActive, setLoaderActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderActive(false);
    }, 5000);

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        setLoaderActive(false);
      }
    });
  }, []);

  function handleReloadLoader() {
    setLoaderActive(true);
  }

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <ButtonDefault
        onClick={handleReloadLoader}
      >
        Reload Infinite
        </ButtonDefault>

        <h4>Click [ ESC ] for clear loader.</h4>

      {
        loaderActive && <CSS.Loader />
      }
    </CSS.Wrapper>
  </TemplateDefault>
}