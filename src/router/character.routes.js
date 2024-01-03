import express from "express";

import { getAll, getById } from "../controller/character.js";

const router = express.Router();

// quand on arrive à ce point dans notre router, on est sur http://localhost:9000/api/v1/character
// du coup le slash identifie la racine de notre route
// méthode GET pour récupérer TOUS les personnages
router.get("/", getAll);

// route pour récupérer un personnage via son id
router.get("/:id", getById);

// créer une route pour récupérer les personnages d'une certaine catégorie

export default router;