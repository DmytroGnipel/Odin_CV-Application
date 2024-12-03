import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  GeneralInfo from './GeneralInfo.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'

function App() {
 return <div>
          <GeneralInfo/>
          <Education/>
          <Experience/>
        </div>
}

export default App
