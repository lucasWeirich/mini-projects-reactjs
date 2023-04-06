import { useEffect, useState } from 'react';
import { ProjectsProps } from '../../@types/projects.types'
import TemplateDefault from '../../templates/Default.template'
import * as CSS from './Project03.styles'
import ButtonDefault from '../../assets/css/ButtonDefault';

export default function Project03({ title }: ProjectsProps) {

  const allImages = [
    'https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80',
    'https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg',
    'https://1.bp.blogspot.com/-6UoZS10RCTw/YMi1UwMpkDI/AAAAAAAABoc/PYINeK6fIkUeSQOL-NlNxONzxIQbFgQtwCLcBGAsYHQ/s1331/IMG_20210615_171053.jpg',
    'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg',
    'https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg/satellite-image-of-globe.jpg/metofficegovuk%3AheroXXLarge',
  ];

  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(0);
  const [filter, setFilter] = useState(20);
  const [imageNow, setImageNow] = useState(allImages[0]);
  const [imageOld, setImageOld] = useState(0);

  function getImageRandom() {
    var random = 0;

    while (random === imageOld) {
      random = Math.floor(Math.random() * allImages.length);
    }

    setImageOld(random);
    return allImages[random];
  }

  useEffect(() => {
    if (active) {
      if (filter > 0)
        setFilter(filter - 1)
      if (loading < 100)
        setTimeout(() => setLoading(loading + 1), 10);
    }

  }, [loading, active]);

  useEffect(() => {
    if (!active) {
      setLoading(0);
      setFilter(20)
    }
  }, [active])

  function handleClickReload() {
    const reload = confirm('Confirm reload?')

    if (reload) {
      setActive(false);

      setTimeout(() => setImageNow(getImageRandom()), 3500);
      setTimeout(() => setActive(true), 4000);
    }
  }

  return <TemplateDefault title={title}>

    <ButtonDefault
      style={{ margin: '30px auto' }}
      onClick={handleClickReload}
      disabled={!active}
    >
      Reload
    </ButtonDefault>

    <div style={{ position: 'relative', width: '100%', height: '60vh' }}>
      <CSS.Wrapper
        filter={filter}
        active={active}
        bg={imageNow}
      />
      <CSS.Loading active={active}>{loading}%</CSS.Loading>
    </div>
  </TemplateDefault>
}