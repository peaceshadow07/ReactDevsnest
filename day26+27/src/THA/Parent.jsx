    import A from './A'
    import B from './B'
    import { createContext, useState } from "react";
    export const textContext = createContext(null);
    export const setTextContext = createContext(null);

    function Parent() {
        const [text,setText] = useState("");
    return (
    <textContext.Provider value={text}>
        <setTextContext.Provider value={setText}>
    <div className="parent-container">
        <div>
        <h3>Input (A)</h3>
        <A/>
        </div>
        <div>
        <h3>Display (B)</h3>
        <B/>
        </div>
    </div>
    </setTextContext.Provider>
    </textContext.Provider>);
    }

    export default Parent
