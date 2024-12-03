import { useState } from "react"
import InputParaButton from "./InputParaButton"
import TextArea from "./TextArea"

export default function Experience () {
    const [isInput, setIsInput] = useState(true)
    const button =  <button onClick={()=>setIsInput(!isInput)}>
                        {isInput ? 'submit' : 'edit'}
                    </button>
    return <div>
        <InputParaButton isInput={isInput} type='text' text='Company'/>
        <InputParaButton isInput={isInput} type='text' text='Position'/>
        <InputParaButton isInput={isInput} type='text' text='Location'/><br/>
        <InputParaButton isInput={isInput} type='date' text='Start date'/>
        <InputParaButton isInput={isInput} type='date' text='End date'/><br/>
        <TextArea isInput={isInput} text='Responsibilities'/>
      
        
        {button}
    </div>
}