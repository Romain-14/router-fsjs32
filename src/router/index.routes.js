import express from "express";

import characterRoutes from "./character.routes.js";

const router = express.Router();


router.get("/", (req, res) => {
    const data = { status: 200, msg: " Welcome to my API" };
    res.json(data);
});

// routes pour gérer la liste des personnages
// si requête sur http://localhost:9000/api/v1/character
// via le middleware on va executer notre objet de routes spécifique au paramètre personnage
router.use("/api/v1/character", characterRoutes);

// routes pour les catégories
// méthode GET pour récupérer
// router.use("/api/v1/category", categoriesRoutes);


export default router;