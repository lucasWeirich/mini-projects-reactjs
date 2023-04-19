import { Icon } from "@mdi/react";
import styled from "styled-components"

interface ButtonSound {
  name: string
  audio: string
  icon: any
}

export default function ButtonSound({ name, audio, icon }: ButtonSound) {

  function tests() {
    let tagAudio = document.querySelector(`audio#sound-${name}`) as HTMLMediaElement;;

    if (tagAudio) tagAudio.play();
  }

  return <Wrapper>
    <audio id={`sound-${name}`} src={audio} />
    <button onClick={tests}>
      <Icon
        path={icon}
        size='40px'
      />
      {name}
    </button>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 150px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;  

  & button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
    background-color: var(--colorEmphasisLight);
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s;
    
    &:hover {
      box-shadow: 8px 8px 10px -5px var(--colorEmphasisSubLight);
      background-color: var(--colorEmphasisDark);
      scale: 0.9;
      transform: skewX(5deg);
    }

    &:active {
      transition: all 0.2s;
      width: 95%;
      height: 95%;
    }
  }
`