import { useEffect, useRef, useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project20.styles'

export default function Project20({ title }: ProjectsProps) {
  usePageTitle('Auto Text Effect');

  const [listText, setListText] = useState<string[]>([
    'Acredite em si mesmo e tudo será possível.',
    'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    'Não importa o quão devagar você vá, desde que não pare.'
  ]);
  const [phraseNow, setPhraseNow] = useState<string>('');
  const [displayedText, setDisplayedText] = useState('');
  const [timeSpeed, setTimeSpeed] = useState(100);
  const [idx, setIdx] = useState(0);
  const [indexTextActive, setIndexTextActive] = useState(0);

  useEffect(() => {
    setPhraseNow(listText[indexTextActive])
  }, [indexTextActive])

  useEffect(() => {
    const timer = setTimeout(() => {
      const newText = phraseNow.slice(0, idx + 1);
      setDisplayedText(newText);
      if (newText === phraseNow) {
        setTimeout(() => {
          setIdx(0);
          setIndexTextActive(prev => prev >= listText.length - 1 ? 0 : prev + 1);
        }, 700);
      } else {
        setIdx(idx + 1);
      }
    }, timeSpeed);

    return () => clearTimeout(timer);
  }, [idx, timeSpeed, phraseNow]);

  return <TemplateDefault title={title}>
    <CSS.Wrapper>

      <CSS.TextEffect>
        {displayedText}
      </CSS.TextEffect>

    </CSS.Wrapper>
  </TemplateDefault>
}