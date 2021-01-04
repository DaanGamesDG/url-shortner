import { Request, Response, Router } from "express";
import { short, get } from "./shortner";
const router = Router();

router.get("/create", async (req: Request, res: Response) => {
	if (!req.query.url) res.redirect("/");
	res.send(await short([...(req.query.url as string[])].join("")));
});

router.get("/:id", async (req: Request, res: Response) => {
	res.json(await get(req, res));
});

export default router;
