import { useEffect, useState } from "react";
import Formular from "../components/formular/Formular";
import Navbar from "../components/navbar/Navbar";



const Beitrag = (props) => {

    const [freunde, setFreunde] = useState([]) // hier stehen alle unsere Freunde drin
    const [refresh, setRefresh] = useState(true) // wir nutzen diesenm state um bei einem neuen Freund ein fetch zu triggern


    useEffect(() => {
        fetch(`http://localhost:9999/api/freundesliste`)
            .then(res => res.json())
            .then(data => setFreunde(data))
            .catch(err => console.log(err))
    }, [refresh]) // refresh ist jetzt eine dependency vom useEffect, wenn refresh ein neuen wert bekommt wird useEffect ausgeführt
    console.log(freunde);
    return (
        <>
            <Navbar />
            <Formular setRefresh={setRefresh} />
            <div className="eintrag">
                {freunde.map((freund, index) => {
                    return (
                        <div key={index}>
                            <p >{`${index + 1} ${freund.vorname} ${freund.name}`}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Beitrag