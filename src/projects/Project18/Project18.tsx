import { FormEvent, useEffect, useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project18.styles'

interface userProps {
  name: string,
  username: string,
  avatar: string,
  bio: string,
  followers: number,
  following: number,
  repos: number,
  link: string
}
interface reposProps {
  name: string,
  language: string,
  description: string,
  link: string
}

export default function Project18({ title }: ProjectsProps) {
  usePageTitle('GitHub Profiles');
  const API_URL = 'https://api.github.com/users/';
  const resetUser = {
    name: '',
    username: '',
    avatar: '',
    bio: '',
    followers: 0,
    following: 0,
    repos: 0,
    link: ''
  }

  const [username, setUserName] = useState('');
  const [errorAPI, setErrorApi] = useState({ message: '', documentation_url: '' });
  const [userData, setUserData] = useState<userProps>(resetUser);
  const [allRepos, setAllRepos] = useState<reposProps[]>([]);

  async function getDataGitHub(e: FormEvent) {
    e.preventDefault();
    const request = await fetch(`${API_URL}${username}`);
    const response = await request.json();

    if (request.status === 200) {
      setUserData({
        name: response.name,
        username: response.login,
        avatar: response.avatar_url,
        bio: response.bio,
        followers: response.followers,
        following: response.following,
        repos: response.public_repos,
        link: response.html_url
      });
      getDataRepos(response.repos_url);
      setErrorApi({ message: '', documentation_url: '' });
    } else {
      setUserData(resetUser)
      setErrorApi({
        message: response.message,
        documentation_url: response.documentation_url
      })
    }
  }

  async function getDataRepos(URL: string) {
    const request = await fetch(URL);
    const response = await request.json()

    if (response.length)
      setAllRepos(response.map((res: any) => (
        {
          name: res.name,
          language: res.language,
          description: res.description,
          link: res.html_url
        }
      )))
    else {
      setAllRepos([])
    }
  }

  useEffect(() => {
    const cards = document.querySelectorAll(CSS.Project);
    window.addEventListener('scroll', checkBoxes)

    checkBoxes()

    function checkBoxes() {
      const triggerBottom = window.innerHeight / 5 * 4

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top

        if (cardTop < triggerBottom) {
          card.classList.add('--show')
        } else {
          card.classList.remove('--show')
        }
      });

    }
  }, [allRepos])

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <form onSubmit={getDataGitHub}>
        <CSS.Search
          placeholder="Search username of GitHub Ex.: lucasweirich"
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
        {
          username &&
          <p style={{ color: '#444', fontWeight: '600', textAlign: "center" }}>Press Enter for search!</p>
        }
      </form>

      {
        userData.username !== '' ?
          <CSS.Profile>
            <CSS.User>
              <img src={userData.avatar} alt={userData.name} />

              <div style={{ textAlign: "center" }}>
                <h2>{userData.name}</h2>
                <h5>{userData.username}</h5>
                <p>{userData.bio}</p>
                <div className="--group">
                  <span>{userData.followers} Followers</span>
                  <span>{userData.following} Following</span>
                </div>
                <span>{userData.repos} repositories public</span>

                <a target="_blank" href={userData.link}>Access GitHub</a>
              </div>
            </CSS.User>

            <CSS.Projects>
              {
                allRepos.map((repo, index) => (
                  <CSS.Project key={index}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h3>{repo.name ?? 'not name'}</h3>
                      <span className="--language">{repo.language ?? 'not language'}</span>
                    </div>

                    <p>{repo.description ?? 'Not description'}</p>

                    <a target="_blank" href={repo.link}>Access repository</a>

                  </CSS.Project>
                ))
              }
            </CSS.Projects>
          </CSS.Profile>
          :
          <>
            {errorAPI.message}
            <br />
            {errorAPI.documentation_url}
          </>
      }
    </CSS.Wrapper>
  </TemplateDefault>
}