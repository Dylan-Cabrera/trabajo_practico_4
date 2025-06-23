import { Router } from "express";
import { getCharacters } from "../controller/character.controller.js";
const router = Router();

router.get("/characters", getCharacters );

export default router;