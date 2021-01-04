import { config } from "dotenv";
config();
import express, { Request, Response } from "express";
import { connect, connection } from "mongoose";
import router from "./api/backend";
import { join } from "path";

const app = express();
const PORT = process.env.PORT || 3000;

(global as any).origin = process.env.ORIGIN || `http://localhost:${PORT}/`;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);
app.get("/", async (req: Request, res: Response) =>
	res.sendFile(join(__dirname, "views", "index.html"))
);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
}).catch((e) => console.log(e));
connection.on("connected", () => console.log("connected to db!"));
