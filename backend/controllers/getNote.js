import Note from "../models/Note.js";

export const getNote = async(req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.getById(id);
        res.json(note);
    } catch (error) {
        console.error(error.message);
    }
}
