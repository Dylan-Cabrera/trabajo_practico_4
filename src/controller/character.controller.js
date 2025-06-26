import { Character } from "../models/character.model.js"; 



//obtener todos los personajes
export const getCharacters = async (req,res) => {
    try {const characters = await Character.findAll();
    res.status(200).json(Character);

    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}

//obtener un personaje con su id
export const getCharactersById = async (req,res) => {
    
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
            res.status(404).json({ error: "El id debe ser un número" });
        } 
    try{
        const characterID = await Character.findByPk(id);

        if (!characterID) {
            res.status(404).json( { message :"Character not found"} )
        }
        
        res.status(200).json(characterID);

    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}

//crear personaje
export const createCharacter = async (req,res)=> {
    
    try{
        
        const { name, ki, race, gender, description } = req.body;
        
        if ( name === "" ) {
            res.status(502).json()
        }
        if ( race === "" ) {
            res.status(502).json()
        }
        if ( gender === "" ) {
            res.status(502).json()
        }
        
        
        const createChar = await Character.create({ name, ki, race, gender, description });
        res.status(201).json(createChar);

    } catch(e){
        res.status(500).json({ error: e.message });
    }
}

//actualizar personaje
export const updateChar = async (req,res) => {
    try{

    } catch(e) {

    }
}

