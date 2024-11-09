import Note from "../models/Note.js";

export const createNote = async(req, res) => {
    try {
        const { title, note } = req.body;
        const newNote = await Note.create(title, note);
        res.json(newNote);
    } catch (error) {
        console.error(error.message);
    }
}
