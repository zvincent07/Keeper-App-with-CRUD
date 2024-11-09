import Note from "../models/Note.js";

export const getAllNotes = async(req, res) => {
    try {
        const notes = await Note.getAll();
        res.json(notes);
    } catch (error) {
        console.error(error.message);
    }
}
