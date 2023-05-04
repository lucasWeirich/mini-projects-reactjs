import { useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project26.styles'
import { mdiAccountBox, mdiAccountGroup, mdiBriefcase, mdiHome } from "@mdi/js";
import { Icon } from "@mdi/react";

export default function Project26({ title }: ProjectsProps) {
  usePageTitle('Mobile Tab Navigation');

  const [pagesMobile, setPagesMobile] = useState([
    {
      title: 'Home',
      content: 'Bem-Vindo a página de contato!',
      icon: mdiHome
    },
    {
      title: 'Work',
      content: 'O trabalho nunca para...!',
      icon: mdiBriefcase
    },
    {
      title: 'About Us',
      content: 'Quem somos: somos uma equipe buscando evolução...!',
      icon: mdiAccountGroup
    },
    {
      title: 'Contact',
      content: 'Página de contato, nenhum contato no momento...',
      icon: mdiAccountBox
    }
  ]);
  const [pageActive, setPageActive] = useState(0);

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.Phone>
        <CSS.Screen>
            <h3>{pagesMobile[pageActive].title}</h3>

            <p>{pagesMobile[pageActive].content}</p>

            <img src="/project26/effect.svg" alt="effect" />
        </CSS.Screen>

        <CSS.Navigation>
          {
            pagesMobile.map((page, index) => (
              <div
                key={index}
                onClick={() => setPageActive(index)}
                className={pageActive === index ? 'active' : ''}
              >
                <Icon
                  path={page.icon}
                  size='35%'
                />
                <span>{page.title}</span>
              </div>
            ))
          }
        </CSS.Navigation>
      </CSS.Phone>
    </CSS.Wrapper>
  </TemplateDefault>
}