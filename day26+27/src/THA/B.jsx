import { useContext } from "react";
import { textContext } from "./Parent";

function B() {
    const text = useContext(textContext);
  return <div className="b-container">
    <p>{text}</p>
  </div>
}

export default B
