import { FaSearch } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";
import "./SearchBarComponent.css";

function SearchBarComponent() {
  return (
    <div className={"SearchBarComponent"}>
      <div className={"SearchBar"}>
        <button><FaSearch /></button>
        <input type={"text"} placeholder={"Search"}></input>
      </div>
      <button><FaRegStickyNote /></button>
    </div>
  );
}
export default SearchBarComponent;
