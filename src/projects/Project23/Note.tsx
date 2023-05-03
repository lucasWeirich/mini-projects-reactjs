import { mdiDelete, mdiSquareEditOutline } from "@mdi/js";
import { Icon } from "@mdi/react";
import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { deleteAllNotes_FAKE_API, updateAllNotes_FAKE_API } from "./FAKE_API";

export interface NoteProps {
  id: string
  title: string
  text: string
  active: boolean
  updateAllNotes?: () => any
}

const Note = (props: NoteProps) => {
  const [editActive, setEditActive] = useState(props.active);
  const [dataNote, setDataNote] = useState({ title: props.title, text: props.text });

  function handleChangeDataNote(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setDataNote(prev => {
      const { name, value } = e.target;
      const newDataNote = {
        ...prev,
        [name]: value
      }
      return newDataNote;
    })
  }

  const handleEditActive = () => {
    setEditActive(prev => !prev);
  }

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();
    //handleEditActive();
  }

  async function updateNote() {
    await updateAllNotes_FAKE_API({
      id: props.id,
      title: dataNote.title,
      text: dataNote.text,
      active: editActive
    });
  }

  useEffect(() => {
    updateNote();
  }, [dataNote, handleEditActive])

  async function handleDeleteNote() {
    const confirmation = confirm('You are about to delete the note, are you sure?')
    if (confirmation)
      await deleteAllNotes_FAKE_API(props.id);

    if (props.updateAllNotes)
      props.updateAllNotes();
  }

  return <Wrapper
    onSubmit={handleSubmitForm}
    style={{
      boxShadow: editActive ? '0 0 0 2px var(--colorEmphasisDark)' : '',
      opacity: editActive ? '1!important' : ''
    }}
  >
    <OptionsBar>
      {
        editActive ?
          <input
            type="text"
            name="title"
            placeholder="Undefined..."
            value={dataNote.title}
            onChange={handleChangeDataNote}
          />
          :
          <h3>{dataNote.title}</h3>
      }

      <div>
        <button
          type="button"
          onClick={handleEditActive}
        >
          <Icon
            path={mdiSquareEditOutline}
            size='20px'
            color='#fff'
          />
        </button>

        <button
          type="button"
          onClick={handleDeleteNote} className="--delete"
        >
          <Icon
            path={mdiDelete}
            size='20px'
            color='#fff'
          />
        </button>
      </div>
    </OptionsBar>

    <Content>
      {
        editActive ?
          <textarea
            name="text"
            value={dataNote.text}
            onChange={handleChangeDataNote}
          />
          :
          <p>{dataNote.text}</p>
      }
    </Content>
  </Wrapper>
}

export default Note;

const OptionsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 0 10px;
  background-color: var(--colorDark);
  transition: all 0.5s;

  & h3 {
    max-width: 75%;
    font-size: 14px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: var(--colorEmphasisSubLight);
  }

  & input {
    width: 75%;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: solid 1px var(--colorBorder);
    color: var(--colorEmphasisSubLight);
    font-size: 15px;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 10px;

    & button {
      background-color: transparent;
      outline: none;
      border: none;
      transition: all 0.3s;

      & svg path {
        transition: all 0.3s;
      }

      &:hover {
        scale: 1.1;
        cursor: pointer;

        & svg path {
          fill: var(--colorEmphasisLight)!important;
        }
      }

      &.--delete {
        &:hover {
          & svg path {
            fill: #ae2828!important;
          }
        }
      }

      &:active {
        scale: 0.9;
      }
    }
  }
`

const Content = styled.div`
  height: 100%;
  padding: 10px;

  & textarea {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    resize: vertical;
    background-color: transparent;
    color: #fff;
  }
`

export const Wrapper = styled.form`
  min-height: 400px;
  border-radius: 8px;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 20px -5px #000;

    & ${OptionsBar} {
      background-color: #111;
    }
  }

  @media (min-width: 1024px) {
    &:hover {
      opacity: 1!important;
    }
  }
`