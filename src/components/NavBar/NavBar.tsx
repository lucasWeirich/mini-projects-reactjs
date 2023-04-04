import Icon from '@mdi/react'
import { allProjects } from '../../utils/allProjects'
import * as NB from './NavBar.styles'
import { mdiMagnify } from '@mdi/js'
import { FormEvent, useEffect, useState } from 'react'


export default function NavBar() {

  const [search, setSearch] = useState('');
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [itemsMenu, setItemsMenu] = useState(allProjects);

  function handleMenuDrop() {
    const updateStateMenu = () => setMenuActive(!menuActive);
    
    setSearch('');

    if (menuActive) {
      setTimeout(updateStateMenu, 300);
    } else {
      updateStateMenu();
    }
  }

  useEffect(() => {
    function searchItemMenu() {
      const newMenu = allProjects.filter(item => {
        let name = item.name.toLowerCase();
        return name.includes(search.toLowerCase());
      });
      setItemsMenu(newMenu);
    }

    if (search !== '') searchItemMenu();
  }, [search])

  return <NB.Wrapper>
    <div className="Container">
      <a href="/"><NB.Logo src="/logo.png" /></a>

      <NB.Title>50 Projects in 50 days</NB.Title>

      <NB.Search active={menuActive}>
        <input
          type="search"
          name='search'
          value={search}
          autoComplete='off'
          placeholder='Search...'
          onChange={e => setSearch(e.target.value)}
        />

        <span onClick={handleMenuDrop}>
          <Icon
            path={mdiMagnify}
            color="var(--colorEmphasisLight)"
            size="25px"
          />
        </span>

        <NB.Menu active={Boolean(search)}>
          <ul>
            {
              itemsMenu[0] ?
                itemsMenu.map(item => (
                  <li key={item.id}>
                    <a href={item.url}>
                      {item.name}
                      {
                        item.description &&
                        <p>{item.description}</p>
                      }
                    </a>
                  </li>
                ))
                :
                <li>Not found</li>
            }
          </ul>
        </NB.Menu>
      </NB.Search>
    </div>
  </NB.Wrapper>
}