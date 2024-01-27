import NoteAreaComponent from "../NoteArea/NotesAreaComponent";
import NotesTabComponent from "../NotesTab/NotesTabComponent";
import "./NotesWindowComponent.css"

function NotesWindowComponent() {
  return (
    <div className="NotesWindowComponent">
      <NotesTabComponent />
      <NoteAreaComponent />
    </div>
  );
}

export default NotesWindowComponent;