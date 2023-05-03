import { Icon } from "@mdi/react";
import { ProjectsProps } from "../../@types/projects.types";
import ButtonDefault from "../../assets/css/ButtonDefault";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project23.styles'
import { mdiPlus } from "@mdi/js";
import Note, { NoteProps } from "./Note";
import { useEffect, useState } from "react";
import { getAllNotes_FAKE_API, postAllNotes_FAKE_API } from "./FAKE_API";
import { v4 as uuidv4 } from 'uuid';

export default function Project23({ title }: ProjectsProps) {
  usePageTitle('Note App');

  const [allNotes, setAllNotes] = useState<NoteProps[]>(getAllNotes_FAKE_API());

  function updateNotes() {
    setAllNotes(getAllNotes_FAKE_API());
  }

  function handleAddNote() {
    setAllNotes(prev => {
      const newAllNotes = [
        ...prev,
        {
          id: uuidv4(),
          title: '',
          text: '',
          active: true
        }
      ];
      return newAllNotes;
    })
  }

  useEffect(() => {
    postAllNotes_FAKE_API(allNotes);
  }, [handleAddNote]);

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <ButtonDefault onClick={handleAddNote}>
        <Icon
          path={mdiPlus}
          size='20px'
          color='#fff'
        />
        Add Note
      </ButtonDefault>

      <CSS.GridAllNotes>
        {
          allNotes.map(note => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              active={note.active}
              updateAllNotes={updateNotes}
            />
          )).reverse()
        }
      </CSS.GridAllNotes>
    </CSS.Wrapper>
  </TemplateDefault>
}