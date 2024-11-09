// frontend/src/components/CreateArea.js
import React, { useState, Fragment } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { submitNoteAPI } from "../api/api"; 

function CreateArea() {
    const [isExpanded, setExpanded] = useState(false);
    const [title, setTitle] = useState(""), [note, setNote] = useState("");

    function expand() {
        setExpanded(true);
    }

    async function submitNote(e) {
        e.preventDefault();
        const result = await submitNoteAPI(title, note); // Use the API function
        if (result.success) {
            setTitle("");
            setNote("");
            window.location = "/";
        }
    }

    return (
        <Fragment>
            <form className="create-note" onSubmit={submitNote}>
                {isExpanded && (
                    <input
                        name="title"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        placeholder="Title"
                        required
                    />
                )}
                <textarea
                    name="note"
                    onClick={expand}
                    onChange={e => setNote(e.target.value)}
                    value={note}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    required
                />
                <Zoom in={isExpanded}>
                    <Fab type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </Fragment>
    );
}

export default CreateArea;
