
function Formular(props) {

    const sendData = (e) => {
        e.preventDefault()
        //Das braucht man um auf das Formular zugreifen zu können.
        //Mit e.target bekommt man das <form>
        //Und dann packt man es in den body vom Request
        const form = new FormData(e.target);
        //Hier wird nun gefetched mit einem POST req an den Server
        fetch('http://localhost:9999/api/freundesliste', {
            method: 'POST',
            body: form
        })
            .then((response) => {
                if (response.ok) {
                    props.setRefresh(prev => !prev); // hier wird refresh ein neuer wert zugewiesen
                }
                response.json();
            })
            .then((data) => {
                console.log(data);
            })
    }
    return (
        //Bilder und Texte, also Daten, müssen noch an den Server gesendet werden
        <form onSubmit={sendData}>
            <p>Neue Einträge in die Datenbank</p>
            <input type="text" name="vorname" placeholder="Vorname" />
            {/* multer wird nach "picture" Bildern suchen */}
            {/* <input type="file" name="postPic" placeholder="Beitragsbild" /> */}
            <input type="text" name="name" placeholder="Nachname" />
            <input type="submit" value="Publish" />
        </form>
    )
}

export default Formular;