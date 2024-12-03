import { useState } from "react"
import InputParaButton from "./InputParaButton"

export default function Education () {

    const [isInput, setIsInput] = useState('true')
    const button = <button onClick={()=>setIsInput(!isInput)}>
{isInput ? 'submit' : 'edit'}
    </button>
return <div>
<InputParaButton isInput={isInput} type='text' text='School/Institution'/>
<InputParaButton isInput={isInput} type='text' text='Degree'/><br/>
<InputParaButton isInput={isInput}type='text' text='Location'/>
<InputParaButton isInput={isInput} type='date' text='Grauation date'/>
{button}







</div>
}