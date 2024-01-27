import NOTECOUNTER_CONSTANTS from "../../constants/NoteCounterConstants";
import TextComponent from "../Text/TextComponent";
import "./NoteCounterComponent.css";

function NoteCounterComponent(props) {
  // TODO:
  // change the class from NoteCounterComponent to NoteCounterComponentSelected
  // when selected

  return (
    <button className="NoteCounterComponent">
      <TextComponent
        color={NOTECOUNTER_CONSTANTS.colorTitle}
        fontSize={20}
        className={"Note-Counter-Title"}
        value={props?.title}
        padding={"0"}
        textAlign={"left"}
      />
      <TextComponent
        color={NOTECOUNTER_CONSTANTS.colorDescription}
        fontSize={10}
        className={"Note-Counter-Description"}
        value={props?.description}
        padding={"0"}
        textAlign={"left"}
      />
    </button>
  );
}

export default NoteCounterComponent;
