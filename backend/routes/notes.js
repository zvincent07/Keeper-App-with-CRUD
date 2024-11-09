import express from "express";
import { createNote } from "../controllers/createNote.js";
import { getAllNotes } from "../controllers/getAllNotes.js";
import { getNote } from "../controllers/getNote.js";
import { updateNote } from "../controllers/updateNote.js";
import { deleteNote } from "../controllers/deleteNote.js";

const router = express.Router();

router
    .post("/", createNote)
    .get("/", getAllNotes)
    .get("/:id", getNote)
    .put("/:id", updateNote)
    .delete("/:id", deleteNote);

export default router;
