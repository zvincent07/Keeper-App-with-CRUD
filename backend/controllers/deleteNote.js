import Note from "../models/Note.js";

export const deleteNote = async(req, res) => {
    try {
        const { id } = req.params;
        const message = await Note.delete(id);
        res.json(message);
    } catch (error) {
        console.error(error.message);      
    }
};
