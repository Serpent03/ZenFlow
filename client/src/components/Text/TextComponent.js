// props:
// typography: normal, bold, italic
// font: family, size, weight
// actual text component
import "./TextComponent.css";

function TextComponent(props) {
  return (
    <div
      className={`${props?.className || ""} TextComponent`}
      // style={{
      //   textAlign: props?.align || TEXT_CONSTANTS.align,
      //   fontFamily: props?.fontFamily
      //     ? props.fontFamily
      //     : TEXT_CONSTANTS.fontFamily,
      //   fontSize: props?.fontSize || TEXT_CONSTANTS.fontSize,
      //   fontWeight: props?.fontWeight || TEXT_CONSTANTS.fontWeight,
      //   fontStyle: props?.typography || TEXT_CONSTANTS.typography,
      //   color: props?.color || TEXT_CONSTANTS.color,
      //   margin: props?.margin || TEXT_CONSTANTS.margin,
      // }}
      style={{ ...props }}
    >
      {props?.value}
    </div>
  );
}

export default TextComponent;
