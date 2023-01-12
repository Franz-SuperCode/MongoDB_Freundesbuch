import express from 'express';
import cors from 'cors';
import multer from 'multer';
//Importiert die config.js Datei, die die Konfigurationen enthalten sollte, wie z.B. die Datenbankverbindungsdetails.
import './config/config.js';
//Importiert die Funktion "getDb" aus dem db.js Modul, die verwendet wird, um eine Verbindung zur MongoDB-Datenbank herzustellen.
import { getDb } from './database/db.js';

const app = express();
//Den Port holen wir aus der .env-Datei
const PORT = process.env.PORT;
//Man braucht multer damit die FormData Daten aus dem Frontend ohne Probleme verwendet werden können
const upload = multer();

app.use(cors());
//Fügt die Middleware hinzu, die verwendet wird, um den Request-Body in ein JSON-Objekt zu parsen.
app.use(express.json())


app.get('/api/freundesliste', (req, res) => {
    //Ruft die Funktion "getDb" auf, um eine Verbindung zur MongoDB-Datenbank herzustellen
    getDb()
        //Wenn die Verbindung hergestellt wurde, sucht es die Sammlung "freundesliste"
        .then(db => db.collection('engeFreunde').find())
        //Wandelt pointer in ein Array um.
        .then(pointer => pointer.toArray())
        //Sendet das Array als Antwort des HTTP-Requests mit dem HTTP-Status-Code 200 
        .then(array => res.status(200).json(array))

})
app.post('/api/freundesliste', upload.none(), (req, res) => {
    const freund = req.body;
    console.log(freund);
    getDb()
        //Fügt das freund Objekt in die 'freundesliste' collection.
        .then(db => db.collection('engeFreunde').insertOne(freund))
        .then(ark => res.status(200).json(ark))


})
app.put('/api/freundesliste', (req, res) => {

})
app.delete('/api/freundesliste', (req, res) => {

})





app.listen(PORT, () => console.log("PORT: ", PORT));