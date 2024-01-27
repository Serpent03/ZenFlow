import RoundedTextComponent from "./../RoundedText/RoundedTextComponent";
import "./NotesAreaComponent.css";

function NoteAreaComponent() {
  return (
    <div className="NotesAreaComponent">
      <textarea id="ta" />
      <div id="tags" className="tags">
        <RoundedTextComponent
          value={"Thoughts"}
          color={"#dddddd"}
          backgroundColor={"#4F4F4F"}
          fontSize={12}
          padding={"0.15em 0.30em"}
        />
      </div>
    </div>
  );
}

export default NoteAreaComponent;
