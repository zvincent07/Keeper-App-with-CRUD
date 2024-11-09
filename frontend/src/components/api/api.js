export async function submitNoteAPI(title, note) {
    try {
        const body = { title, note };
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/notes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            return { success: true };
        } else {
            console.error("Failed to submit note.");
            return { success: false, error: "Failed to submit note." };
        }
    } catch (error) {
        console.error(error.message);
        return { success: false, error: error.message };
    }
}

export async function getNotesAPI() {
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/notes`);
        if (response.ok) {
            const jsonData = await response.json();
            return { success: true, data: jsonData };
        } else {
            console.error("Failed to fetch notes.");
            return { success: false, error: "Failed to fetch notes." };
        }
    } catch (error) {
        console.error(error.message);
        return { success: false, error: error.message };
    }
}

export async function updateNoteAPI(noteId, title, noteContent) {
    try {
        const body = { title, note: noteContent };
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/notes/${noteId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            return { success: true };
        } else {
            console.error("Failed to update note.");
            return { success: false, error: "Failed to update note." };
        }
    } catch (error) {
        console.error(error.message);
        return { success: false, error: error.message };
    }
}

export async function deleteNoteAPI(id) {
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/notes/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            return { success: true };
        } else {
            console.error("Failed to delete note.");
            return { success: false, error: "Failed to delete note." };
        }
    } catch (error) {
        console.error(error.message);
        return { success: false, error: error.message };
    }
}