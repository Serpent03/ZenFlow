import RoundedTextComponent from "./../RoundedText/RoundedTextComponent";
import "./NotesAreaComponent.css";

/** 
 * @todo Use onChange() react hook here. 
 * @todo Rich text presence -- markdown, inline code, etc.
 */
function NoteAreaComponent() {
  return (
    <div className="NotesAreaComponent">
      <textarea id="ta" />
      <div id="tags" className="tags">
        <RoundedTextComponent
          value={"Ideas"}
          color={"#C3C3C5"}
          backgroundColor={"#4F4F4F"}
          fontSize={12}
          padding={"0.15em 0.30em"}
        />
        <RoundedTextComponent
          value={"Thoughts"}
          color={"#C3C3C5"}
          backgroundColor={"#4F4F4F"}
          fontSize={12}
          padding={"0.15em 0.30em"}
        />
      </div>
    </div>
  );
}

export default NoteAreaComponent;
