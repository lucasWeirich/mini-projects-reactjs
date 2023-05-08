import { useEffect, useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project28.styles'

export default function Project28({ title }: ProjectsProps) {
  usePageTitle('Live User Filter');

  const [textFilter, setTextFilter] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function requestUsers() {
      const request = await fetch('https://randomuser.me/api?results=50');
      const users = await request.json();

      setAllUsers(users.results);
    } requestUsers();
  }, [])

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.Phone>
        <CSS.Header>
          <h4>Live User Filter</h4>
          <span>Search by name and/or location</span>

          <input
            type="text"
            name="filter"
            placeholder="Search"
            value={textFilter}
            onChange={e => setTextFilter(e.target.value)}
          />
        </CSS.Header>

        <CSS.Screen>
          {
            allUsers.map((user: any, index) => {
              const nameUser = `${user.name.first} ${user.name.last}`

              return <li
                key={index}
                onClick={() => alert(`Ligando... Para: ${user.name.first} - APENAS TESTE`)}
                style={{
                  display: nameUser.toLocaleLowerCase().includes(textFilter.toLocaleLowerCase()) ? '' : 'none'
                }}
              >
                <img src={user.picture.thumbnail} alt={user.name.first} />
                <div>
                  <h4>{user.name.first} {user.name.last}</h4>
                  <span>{user.location.city}, {user.location.country}</span>
                </div>
              </li>
            })
          }
        </CSS.Screen>
      </CSS.Phone>
    </CSS.Wrapper>
  </TemplateDefault>
}