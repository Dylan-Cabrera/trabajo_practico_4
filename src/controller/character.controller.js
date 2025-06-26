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
            return res.status(400).json({ 
                message: "El id debe ser un número",
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

    const id = parseInt(req.params.id);
    
    const { name, ki, race, gender, description } = req.body;
    
    const nameRepetido = await Character.findOne( { where: { name: name} } );

    if (nameRepetido) {
        return res.json({message: "No se pueden repetir los nombres"})
    }
        
        if ( name === "" || name.trim() === "") {
            return res.status(400).json({ message: "el nombre no puede estar vacio" })
        }
        if ( race === "" ) {
            return res.status(400).json({ message: "la raza no puede estar vacia" })
        }
        if ( ki === null )  {
            return res.status(400).json({ message: "el ki no puede estar vacio" })
        }
        if ( gender === "" ) {
            return res.status(400).json({ message: "el gender no puede estar vacio" })
        }
        if (gender != "male" && gender && "female" && gender != "Male" && gender != "Female") {
            return res.status(400).json( { message: "gender invalido"} )
        } 
        const kiInt = parseInt(ki);

    try{
        const createChar = await Character.create({ name, kiInt, race, gender, description });
        res.status(201).json(createChar);

    } catch(e){
        res.status(500).json({ error: e.message });
    }
}

//actualizar personaje
export const updateChar = async (req,res) => {

    const id = parseInt(req.params.id);
    if (isNaN(id)) {
            return res.status(400).json({ 
                message: "El id debe ser un número",
            });
        } 
    const { name, ki, race, gender, description } = req.body;
    const nameRepetido = await Character.findOne( { where: { name: name} } );
    
    if (nameRepetido) {
        return res.json({message: "No se pueden repetir los nombres"})
    }
    
    if ( name === "" || name.trim() === "") {
        return res.status(400).json({ message: "el nombre no puede estar vacio" })
    }
    if ( race === "" || race.trim() === "")  {
        return res.status(400).json({ message: "la raza no puede estar vacia" })
    }
    if ( gender === "" || gender.trim() === "")  {
        return res.status(400).json({ message: "el gender no puede estar vacio" })
    }
    if ( ki === null )  {
        return res.status(400).json({ message: "el ki no puede estar vacio" })
    }
    
    
    if (gender != "male" && gender && "female" && gender != "Male" && gender != "Female") {
        return res.status(400).json( { message: "gender invalido"} )
    } 
    
    const kiInt = parseInt(ki);


    try{
        const update = await Character.update({ name, kiInt, race, gender, description } , {
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

//eliminar personaje

export const deleteChar = async (req,res) => {

    const id = parseInt(req.params.id);
    if (isNaN(id)) {
            return res.status(400).json({ 
                message: "El id debe ser un número",
            });
        } 
    try{
        const deleteChar = await Character.destroy({ where: {id: req.params.id} });
        if (deleteChar) {
            return res.json( {message: "Personaje eliminado"}) 
        } else {
            return res.status(404).json({ message : "Id Not Found" }) 
        }

    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}
