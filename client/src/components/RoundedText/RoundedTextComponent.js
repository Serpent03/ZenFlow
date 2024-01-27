import TextComponent from "../Text/TextComponent";
import TEXT_CONSTANTS from "../../constants/TextConstants";

function RoundedTextComponent(props) {
  return (
    <div
      className={(props?.className || "") + " RoundedTextComponent"}
      style={{
        backgroundColor: props?.backgroundColor || TEXT_CONSTANTS.bgColor,
        borderRadius: "10px",
        padding: props?.padding || "0.5em 1em",
      }}
    >
      <TextComponent {...props} />
    </div>
  );
}

export default RoundedTextComponent;
