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
            return res.status(404).json({ 
                message: "El id debe ser un número",
                error: "Not Found",
                statusCode: "404"
            });
        } 
    try{
        const characterID = await Character.findByPk(id);

        if (!characterID) {
            return res.status(404).json( { message :"Character not found"} )
        }
        
        res.status(200).json(characterID);

    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}

//crear personaje
export const createCharacter = async (req,res)=> {
    
    const { name, ki, race, gender, description } = req.body;
        
        if ( name === "" ) {
            return res.status(400).json({ message: "el nombre no puede estar vacio" })
        }
        if ( race === "" ) {
            return res.status(400).json({ message: "la raza no puede estar vacia" })
        }
        if ( gender === "" ) {
            return res.status(400).json({ message: "el gender no puede estar vacio" })
        }
        if (gender != "male" || gendere != "female") {
            return res.status(400).json( { message: "gender invalido"} )
        }


    try{
        const createChar = await Character.create({ name, ki, race, gender, description });
        res.status(201).json(createChar);

    } catch(e){
        res.status(500).json({ error: e.message });
    }
}

//actualizar personaje
export const updateChar = async (req,res) => {

    const { name, ki, race, gender, description } = req.body;
        
        if ( name === "" || name.trim() === "") {
            return res.status(400).json({ message: "el nombre no puede estar vacio" })
        }
        if ( race === "" ) {
            return res.status(400).json({ message: "la raza no puede estar vacia" })
        }
        if ( gender === "" ) {
            return res.status(400).json({ message: "el gender no puede estar vacio" })
        }
        if (gender != "male" && gender && "female" && gender != "Male" && gender != "Female") {
            return res.status(400).json( { message: "gender invalido"} )
        } 
        

    try{
        const update = await Character.update(req.body, {
        where: { id: req.params.id},
        });
        
        if(update) {
            const updateChar = await Character.findByPk(req.params.id);
            return res.json(updateChar);
        } else {
            res.status(404).json( {messsage: "no existe un personaje con ese id"} )
        }

    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}

//borrar personaje

export const deleteChar = async (req,res) => {
    try{
        const deleteChar = await Character.destroy(  )

    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}
