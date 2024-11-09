// frontend/src/components/EditNote.js

import React, { Fragment, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { updateNoteAPI } from "../api/api";

function EditNote({ note }) {
    const [title, setTitle] = useState(note.title);
    const [noteContent, setNoteContent] = useState(note.note);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => {
        setShowModal(false);
        setTitle(note.title);
        setNoteContent(note.note);
    };

    async function update(e) {
        e.preventDefault();
        const result = await updateNoteAPI(note.id, title, noteContent); // Use the API function
        if (result.success) {
            setShowModal(false);
            window.location = "/";
        }
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-outline-primary" onClick={openModal}>
                <EditIcon />
            </button>

            {showModal && (
                <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog" aria-modal="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content modern-modal-content">
                            <div className="modal-header border-0">
                                <h5 className="modal-title mt-5">Edit Note</h5>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control modern-input"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Title"
                                />
                                <textarea
                                    className="form-control mt-3 modern-input"
                                    value={noteContent}
                                    onChange={(e) => setNoteContent(e.target.value)}
                                    placeholder="Note Content"
                                />
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary" onClick={update}>
                                    <SaveIcon /> 
                                </button>
                                <button type="button" className="btn btn-outline-secondary" onClick={closeModal}>
                                    <CloseIcon /> 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default EditNote;
