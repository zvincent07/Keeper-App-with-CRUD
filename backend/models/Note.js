import pool from "../config/db.js";

class Note {
    static async create(title, note) {
        const result = await pool.query("INSERT INTO notes (title, note) VALUES ($1, $2) RETURNING *", [title, note]);
        return result.rows[0];
    }

    static async getAll() {
        const result = await pool.query("SELECT * FROM notes ORDER BY id ASC");
        return result.rows;
    }

    static async getById(id) {
        const result = await pool.query("SELECT * FROM notes WHERE id = $1", [id]);
        return result.rows[0];
    }

    static async update(id, title, note) {
        await pool.query("UPDATE notes SET title = $1, note = $2 WHERE id = $3", [title, note, id]);
        return "Note was updated!";
    }
    
    static async delete(id) {
        await pool.query("DELETE FROM notes WHERE id = $1", [id]);
        return "Note was deleted!";
    }
}

export default Note;
