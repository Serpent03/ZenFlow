import NoteListComponent from "../NoteList/NoteListComponent";
import SearchBarComponent from "../SearchBar/SearchBarComponent";
import "./NotesTabComponent.css"

function NotesTabComponent() {
  return (
    <div className="NotesTabComponent">
      <SearchBarComponent />
      <NoteListComponent />
    </div>
  );
}

export default NotesTabComponent;