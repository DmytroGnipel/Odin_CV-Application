import { useState } from "react"

export default function InputParaButton ({text, type, min, max, isInput}) {
    const [value, setValue] = useState('')
    const input = <input
                    type={type}
                    value={value}
                    min={type == 'number' ? '18' : null}
                    max={type == 'number' ? '65' : null}
                    onChange={(e)=>setValue(e.target.value)}
                    pattern={type == 'tel' ? '[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}' : null}
                    
                    />
    const info = value


return <><span>{text}: </span>
    {isInput ? input : info}
   


</>
}