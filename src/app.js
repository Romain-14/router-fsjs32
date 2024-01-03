import express from "express";

import router from "./router/index.routes.js";

const categories = [
    { id: 1, name: "Comics" },
    { id: 2, name: "Manga" },
    { id: 3, name: "Marvel" },
    { id: 4, name: "DC" },
    { id: 5, name: "Dragon ball" },
    { id: 6, name: "Berserk" },
];

const app = express();
const PORT = 9000;

// configurer (set) si moteur de template 
// mettre en place les middlewares pour les fichiers statiques
// ...

// middleware qui va executer notre objet de route
app.use(router);

// middleware pour gérer les erreurs
app.use((err, req, res, next)=>{
    // ...
});



app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);
