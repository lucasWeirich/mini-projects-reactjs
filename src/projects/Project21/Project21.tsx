import { Icon } from "@mdi/react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project21.styles'
import { mdiContentCopy } from "@mdi/js";
import { useEffect, useState } from "react";
import ButtonDefault from "../../assets/css/ButtonDefault";

interface DataForGeneratorProps {
  lenght: number,
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  symbols: boolean
}

export default function Project21({ title }: ProjectsProps) {
  usePageTitle('Password Generator');

  const dataForGeneratorInitial = {
    lenght: 10,
    uppercase: true,
    lowercase: false,
    numbers: false,
    symbols: false
  };

  const [passwordGenerator, setPasswordGenerator] = useState('');
  const [dataForGenerator, setDataForGenerator] = useState<DataForGeneratorProps>(dataForGeneratorInitial);
  const [copiedActive, setCopiedActive] = useState(false);

  function handleChangeDataForGenerator(e: React.ChangeEvent<HTMLInputElement>) {
    setDataForGenerator(prev => {
      const { value, name, type, checked } = e.target;

      const newData = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }
      return newData;
    })
  }

  function copyNewPasswordGenerator() {
    if (!passwordGenerator) return;
    navigator.clipboard.writeText(passwordGenerator);
    setCopiedActive(true);
  }

  function newPasswordGenerator() {
    const typePassword = {
      lowercase: 'abcdefghijklmnopqrstuvwxyzç',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇ',
      numbers: '1234567890',
      symbols: "!@#$%&*()_+=-~^/?;:.,|'ºª[{}]"
    }

    const allPossibleCharacters = validaTypes();

    let characteres = allPossibleCharacters.split('');
    for (let i = characteres.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = characteres[i];
      characteres[i] = characteres[j];
      characteres[j] = temp;
    }
    let newCharacteres = characteres.join('');

    let newPassowrd = '';
    for (let i = 0; i < dataForGenerator.lenght; i++) {
      let index = Math.floor(Math.random() * dataForGenerator.lenght);
      newPassowrd += newCharacteres.substring(index, index + 1);
    }

    function validaTypes() {
      let characters = '';

      if (dataForGenerator.lowercase)
        characters += typePassword.lowercase;
      if (dataForGenerator.uppercase)
        characters += typePassword.uppercase;
      if (dataForGenerator.numbers)
        characters += typePassword.numbers;
      if (dataForGenerator.symbols)
        characters += typePassword.symbols;

      return characters;
    }

    setPasswordGenerator(newPassowrd);
  }

  useEffect(() => {
   const timer = setTimeout(() => {
      setCopiedActive(false);
    }, 3000);

    return () => {clearInterval(timer)}
  }, [copyNewPasswordGenerator])

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.Card>
        <CSS.DisplayPassword>
          {
            passwordGenerator ?
              <span>{passwordGenerator}</span>
              :
              <span style={{ color: '#999' }}>Password...</span>
          }
          <button
            onClick={copyNewPasswordGenerator}
            disabled={!passwordGenerator}
          >
            <Icon
              path={mdiContentCopy}
              size='20px'
            />
            {
              copiedActive &&
              <span>Copied!</span>
            }
          </button>
        </CSS.DisplayPassword>

        <CSS.Options>
          <p>Password Lenght: {dataForGenerator.lenght}</p>
          <input
            type="range"
            name="lenght"
            min="10"
            max="50"
            value={dataForGenerator.lenght}
            onChange={handleChangeDataForGenerator}
          />

          <div>
            <label htmlFor="letters_uppercase">Include Uppercase Letters</label>
            <input
              type="checkbox"
              name="uppercase"
              id="letters_uppercase"
              checked={dataForGenerator.uppercase}
              onChange={handleChangeDataForGenerator}
            />
          </div>
          <div>
            <label htmlFor="letters_lowercase">Include Lowercase Letters</label>
            <input
              type="checkbox"
              name="lowercase"
              id="letters_lowercase"
              checked={dataForGenerator.lowercase}
              onChange={handleChangeDataForGenerator}
            />
          </div>
          <div>
            <label htmlFor="numbers">Include Numbers</label>
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={dataForGenerator.numbers}
              onChange={handleChangeDataForGenerator}
            />
          </div>
          <div>
            <label htmlFor="symbols">Include Symbols</label>
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              checked={dataForGenerator.symbols}
              onChange={handleChangeDataForGenerator}
            />
          </div>
        </CSS.Options>

        <ButtonDefault
          style={{ margin: '20px auto' }}
          onClick={newPasswordGenerator}
        >
          Generate New Password
        </ButtonDefault>
      </CSS.Card>
    </CSS.Wrapper>
  </TemplateDefault>
}