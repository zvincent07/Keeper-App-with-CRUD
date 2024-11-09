import express from "express";
import cors from "cors";
import env from "dotenv";
import notesRoutes from "../routes/notes.js";

env.config();

const app = express();
const port = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json()); // req.body

// routes
app.use("/notes", notesRoutes);


app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});
