
import { useState } from "react"
export default function AnotherButton({text, alClick}) {
const [count, setCount] = useState(0)

function clickHandlerOut() {
    setCount(count + 1)
    alClick()
}



return  <button onClick={clickHandlerOut}>
{text}
{count}
    </button>
}