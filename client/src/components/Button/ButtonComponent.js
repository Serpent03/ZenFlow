import BUTTON_CONSTANTS from "../../constants/ButtonConstants";
import RoundedTextComponent from "../RoundedText/RoundedTextComponent";
import "./ButtonComponent.css";

function ButtonComponent(props) {
  const handleClick = () => {
    if (props?.target) {
      props.target();
    }
  };
  return (
    <button
      className={(props?.className || "") + " ButtonComponent"}
      style={{
        backgroundColor: "#fa0" || BUTTON_CONSTANTS.bgColor,
      }}
      onClick={handleClick}
    >
      <RoundedTextComponent
        value={props?.value}
        // iconify!!
        color={props?.color || BUTTON_CONSTANTS.color}
        align={props?.align || BUTTON_CONSTANTS.align}
        fontSize={props?.fontSize}
      />
    </button>
  );
}

export default ButtonComponent;
