// frontend/src/components/Note.js

import React, { Fragment, useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNote from "./EditNote";
import { deleteNoteAPI, getNotesAPI } from "../api/api"; 

function Note() {
    const [notes, setNotes] = useState([]);

    async function deleteNote(id) {
        const result = await deleteNoteAPI(id); // Use the API function
        if (result.success) {
            setNotes(notes.filter(note => note.id !== id)); // Update state only if delete was successful
        }
    }

    async function getNotes() {
        const result = await getNotesAPI(); // Use the API function
        if (result.success) {
            setNotes(result.data); // Set notes from API response
        }
    }

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <Fragment>
            {notes.map(note => (
                <div key={note.id} className="note">
                    <h1>{note.title}</h1>
                    <p>{note.note}</p>
                    <button onClick={() => deleteNote(note.id)}>
                        <DeleteIcon />
                    </button>
                    <EditNote note={note} />
                </div>
            ))}
        </Fragment>
    );
}

export default Note;
