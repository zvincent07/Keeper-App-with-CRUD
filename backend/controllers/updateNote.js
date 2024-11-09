import Note from "../models/Note.js";

export const updateNote = async(req, res) => {
    try {
        const { id } = req.params;
        const { title, note } = req.body;
        const message = await Note.update(id, title, note);
        res.json(message);
    } catch (error) {
        console.error(error.message);
    }
}