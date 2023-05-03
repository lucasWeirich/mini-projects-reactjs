import { NoteProps } from "./Note";

export function getAllNotes_FAKE_API() {
  const notes = JSON.parse(localStorage.getItem('allNotes-note-app') || '[]');
  return notes;
}

export async function postAllNotes_FAKE_API(newAllNotes: NoteProps[]) {
  localStorage.setItem('allNotes-note-app', JSON.stringify(newAllNotes));
}

export async function updateAllNotes_FAKE_API(noteUpdate: NoteProps) {
  const allNotes = await getAllNotes_FAKE_API();
  const newAllNotes = await allNotes.filter((note: NoteProps) => note.id !== noteUpdate.id);
  
  newAllNotes.push(noteUpdate);
  localStorage.setItem('allNotes-note-app', JSON.stringify(newAllNotes));
}

export async function deleteAllNotes_FAKE_API(idDelete: string) {
  const allNotes = await getAllNotes_FAKE_API();
  const newAllNotes = await allNotes.filter((note: NoteProps) => note.id !== idDelete);

  localStorage.setItem('allNotes-note-app', JSON.stringify(newAllNotes));
}