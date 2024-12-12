import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Experience from './Experience'
import { useState } from 'react'
import '../styles/Wrapper.css'

//set initial arrays for creating sections
const genInfoStore = [
                        {id: 1, text: 'Name'},
                        {id: 2, text: 'Surname'},
                        {id: 3, type: 'number', text: 'Age'}, 
                        {id: 4, type: 'tel', text: 'Phone number'},
                        {id: 5, type: 'email', text: 'Email'}
                    ]
const educationStore = [
                            {id: 6, text: 'Institution'}, 
                            {id: 7, text: 'Degree'},
                            {id: 8, text: 'Location'}, 
                            {id: 9, type: 'date', text: 'Grauation date'}
                        ]
const expirienceStore = [
                            {id: 10, text: 'Company'},
                            {id: 11, text: 'Position'}, 
                            {id: 12, text: 'Location'},
                            {id: 13, type: 'date', text: 'Start date'},
                            {id: 14, type: 'date', text: 'End date'}, 
                            {id: 15, text: 'Responsibilities'}
                        ]
//get main parent component of the App
export default function Wrapper() {
    //create 3 states for value using arrays above and 3 states for change mode of every section
    const [genInfoValues, setGenInfoValues] = useState(genInfoStore)
    const [educValues, setEducValues] = useState(educationStore)
    const [expirValues, setExpirValues] = useState(expirienceStore)
    const [isInput1, setIsInput1] = useState(true)
    const [isInput2, setIsInput2] = useState(true)
    const [isInput3, setIsInput3] = useState(true)
    
    //function for creating sections from states
    const getSection = state => state.map(item => {
        let Tag
        //specify conditions for two field types (input and textarea)
        item.text == 'Responsibilities' ? Tag = 'textarea' : Tag = 'input'       
        return (
        <div className='titleInpCouple' key={item.id}>
        <span >{item.text}:</span>
            <Tag
                value={item.value ?? ''} 
                type={item.type ?? 'text'} 
                id={item.id} 
                onChange={event=>changeValues(state, event, item.id)}
            />
        </div>)
    })

    //with the function getSection create 3 section
    const genInfoSection = <div className='section'>{getSection(genInfoValues)}</div>
    const educSection = <div className='section'>{getSection(educValues)}</div>
    const expirSection = <div className='section'>{getSection(expirValues)}</div>
    
    //function for changing values in inputs or textarea as user types text
    function changeValues(state, {target}, id) {
        const newState = state.map(item => {
            if (item.id === id) item.value = target.value
            return item 
        })
        if (state === genInfoValues) setGenInfoValues (newState)
        else if (state === educValues) setEducValues (newState)
        else setExpirValues (newState)
    }

    //dynamically create leftBar with inputs or nothing when inputs no longer needed
    function setLeftBar (isInput1, isInput2, isInput3) {
        const leftbar = <div className='leftbar'>
                            {isInput1 && genInfoSection}
                            {isInput2 && educSection}
                            {isInput3 && expirSection}
                        </div>
        if (isInput1 || isInput2 || isInput3) return leftbar
        return null 
    }

    return <div className='wrapper'>
        {setLeftBar (isInput1, isInput2, isInput3)}
        <div className='rightbar'>
            <h1>Resume</h1>
            <hr/>
            <div className='buttonContainer'>
                <button onClick={()=>setIsInput1(!isInput1)}>{isInput1 ? 'submit general info' : 'edit general info'}</button>
                <button onClick={()=>setIsInput2(!isInput2)}>{isInput2 ? 'submit education' : 'edit education'}</button>
                <button onClick={()=>setIsInput3(!isInput3)}>{isInput3 ? 'submit expirience' : 'edit expirience'}</button>
            </div>
            <GeneralInfo genInfoValues={genInfoValues}/>
             <Education educValues={educValues}/>
            <Experience expirValues={expirValues}/>
        </div>
    </div>
}