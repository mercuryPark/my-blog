// server/server.js
import express from "express";
import router from "./src/routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/post", router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
