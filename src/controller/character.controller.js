import { Character } from "../models/character.model.js"; 

export const getCharacters = async (req,res) => {
    const characters = Character.findAll();
    res.status(200).json(Character);
}