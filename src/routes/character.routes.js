import { Router } from "express";
const router = Router();

//importamos la lógica de los controladores
import { getCharacters } from "../controller/character.controller.js";
import { getCharactersById } from "../controller/character.controller.js";
import { createCharacter } from "../controller/character.controller.js";
import { updateChar } from "../controller/character.controller.js";
import { deleteChar } from "../controller/character.controller.js";

//rutas
router.get("/characters", getCharacters );
router.get("/characters/:id", getCharactersById);
router.post("/characters", createCharacter);
router.put("/characters/:id", updateChar);
router.delete("/characters/:id", deleteChar)

export default router;