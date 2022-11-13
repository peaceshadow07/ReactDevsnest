import { useContext } from "react";
import { setTextContext, textContext } from "./Parent";
function A() {
    const text = useContext(textContext);
    const setText = useContext(setTextContext);
  return <div className="a-container">
    <textarea placeholder="Type here..."  value={text} onChange={(e) => {setText(e.target.value)}}/>
  </div>
}

export default A
