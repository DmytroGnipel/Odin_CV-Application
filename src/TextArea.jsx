import { useState } from "react";
export default function TextArea({isInput}) {
const [value, setValue] = useState('')

return <>
{isInput ? <textarea value={value} onChange={(e)=>{setValue(e.target.value)}}/> : value }
</>
}