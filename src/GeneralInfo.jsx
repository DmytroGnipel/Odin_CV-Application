import { useState } from "react"
import InputParaButton from "./InputParaButton"

export default function GeneralInfo () {
    const [isInput, setIsInput] = useState(true)
    const button =  <button onClick={()=>setIsInput(!isInput)}>
                        {isInput ? 'submit' : 'edit'}
                    </button>
    return <div>
        <InputParaButton isInput={isInput} type='text' text='Name'/>
        <InputParaButton isInput={isInput} type='text' text='Surname'/><br/>
        <InputParaButton isInput={isInput} type='number' text='Age' min="18" max="65"/>
        <InputParaButton isInput={isInput} type='tel' text='Phone number'/>
        {button}
    </div>
}