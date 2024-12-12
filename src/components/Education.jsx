import '../styles/Sections.css'

export default function Education ({educValues}) {
    return <>
        <h3>Educational experience</h3>
        <p className="titleInCV">{educValues[0].text}: <em>{educValues[0].value}</em></p>
        <p className="titleInCV">{educValues[1].text}: <em>{educValues[1].value}</em></p>
        <p className="contacts">
            <span className="titleInCV">{educValues[2].text}: <em>{educValues[2].value}</em></span>
            <span className="titleInCV">{educValues[3].text}:  <em>{educValues[3].value}</em></span>
        </p>
    </>
}