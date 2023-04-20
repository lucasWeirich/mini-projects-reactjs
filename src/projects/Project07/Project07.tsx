import { useEffect, useState } from 'react'
import { ProjectsProps } from '../../@types/projects.types'
import TemplateDefault from '../../templates/Default.template'
import * as CSS from './Project07.styles'
import usePageTitle from '../../hook/usePageTitle'
import ButtonDefault from '../../assets/css/ButtonDefault'
import { Icon } from '@mdi/react'
import { mdiDelete, mdiHeart } from '@mdi/js'

interface jokeProps {
  id: string
  joke: string
}

export default function Project07({ title }: ProjectsProps) {
  usePageTitle('Random Jokes');

  const [jokerNow, setJokerNow] = useState<jokeProps>({ id: '', joke: '' });
  const [allFavorite, setAllFavorite] = useState<jokeProps[]>(JSON.parse(localStorage.getItem('jokes-favorites') || '[]'));

  async function getRandomJoker() {
    const request = await fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      },
    });

    const response = await request.json();

    return response;
  }

  const handleClickRandomJoker = async () => {
    const newJoker = await getRandomJoker();

    if (newJoker) setJokerNow({
      id: newJoker.id,
      joke: newJoker.joke
    });
  }

  useEffect(() => {
    handleClickRandomJoker();
  }, [])

  function handleFavorite() {
    setAllFavorite(prev => {
      const index = prev.findIndex(joke => joke.id === jokerNow.id);

      if (index !== -1) {
        const newFavorites = [...prev];
        newFavorites.splice(index, 1);
        return newFavorites;
      } else {
        return [...prev, jokerNow];
      }
    })
  }

  useEffect(() => {
    localStorage.setItem('jokes-favorites', JSON.stringify(allFavorite));
  }, [allFavorite])

  function handleRemoveFavorite(id: string) {
    const remove = confirm(`Do you want to remove from favorites? This action is irreversible!`);

    if (!remove) return;

    setAllFavorite(prev => prev.filter(joke => joke.id !== id));
  }

  function isJokeFavorite() {
    return allFavorite.some(favJoke => favJoke.id === jokerNow.id);
  }

  useEffect(() => {
    const cards = document.querySelectorAll(CSS.CardFavorite);
    window.addEventListener('scroll', checkBoxes)

    checkBoxes()

    function checkBoxes() {
      const triggerBottom = window.innerHeight / 5 * 4.5

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top

        if (cardTop < triggerBottom) {
          card.classList.add('show')
        } else {
          card.classList.remove('show')
        }
      });

    }
  }, [allFavorite]);

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.CardJoker>
        <CSS.Title>Don't Laugh Challenge</CSS.Title>

        {
          jokerNow ?
            <CSS.Joker id={jokerNow.id}>{jokerNow.joke}</CSS.Joker>
            :
            <CSS.NoJoker>Joke Not Found - Sorry :(</CSS.NoJoker>
        }

        <CSS.Buttons>
          <ButtonDefault
            onClick={handleClickRandomJoker}
          >
            Random Joker
          </ButtonDefault>

          <CSS.ButtonLike onClick={handleFavorite}>
            <Icon
              path={mdiHeart}
              color={isJokeFavorite() ? 'var(--colorEmphasisLight)' : 'var(--colorLight)'}
              size='30px'
            />
          </CSS.ButtonLike>
        </CSS.Buttons>
      </CSS.CardJoker>

      <CSS.Favorite>
        <h2>Favorites</h2>

        <CSS.AllFavorites>
          {
            allFavorite[0] ?
              allFavorite.map(joke => (
                <CSS.CardFavorite
                  key={joke.id}
                >
                  {joke.joke}
                  <CSS.ButtonRemoveFavorite onClick={() => handleRemoveFavorite(joke.id)}>
                    <Icon
                      path={mdiDelete}
                      size="20px"
                    />
                  </CSS.ButtonRemoveFavorite>
                </CSS.CardFavorite>
              )).reverse()
              :
              <CSS.NoJoker>Not Favorite</CSS.NoJoker>
          }
        </CSS.AllFavorites>
      </CSS.Favorite>
    </CSS.Wrapper>
  </TemplateDefault>
}