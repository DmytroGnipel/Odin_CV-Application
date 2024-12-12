import '../styles/Sections.css'

export default function GeneralInfo ({genInfoValues}) {
return <>
        <h3>General information</h3>
        <h3 className="titleInCV">{genInfoValues[0].text}: <em>{genInfoValues[0].value}</em></h3>
        <h3 className="titleInCV">{genInfoValues[1].text}: <em>{genInfoValues[1].value}</em></h3>
        <p className="contacts">
            <span className="titleInCV">{genInfoValues[2].text}: <em>{genInfoValues[2].value}</em></span>
            <span className="titleInCV">{genInfoValues[3].text}:  <em>{genInfoValues[3].value}</em></span>
            <span className="titleInCV">{genInfoValues[4].text}:  <em>{genInfoValues[4].value}</em></span>
        </p>
</>
}