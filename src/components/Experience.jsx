import '../styles/Sections.css'

export default function Experience ({expirValues}) {
    return <>
        <h3>Practical experience</h3>
        <p className="titleInCV">{expirValues[0].text}: <em>{expirValues[0].value}</em></p>
        <p className="titleInCV">{expirValues[1].text}: <em>{expirValues[1].value}</em></p>
        <p className="contacts">
            <span className="titleInCV">{expirValues[2].text}: <em>{expirValues[2].value}</em></span>   
            <span className="titleInCV">{expirValues[3].text}:  <em>{expirValues[3].value}</em></span>
            <span className="titleInCV">{expirValues[4].text}:  <em>{expirValues[4].value}</em></span>
        </p>
        <p className="titleInCV">{expirValues[5].text}:  <em>{expirValues[5].value}</em></p>
    </>
}