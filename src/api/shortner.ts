import { Request, Response } from "express";
import { nanoid } from "nanoid";
import urlSchema from "../database/urlSchema";

export async function short(url: string): Promise<{ url: string }> {
	let db = await urlSchema.findOne({ url });
	if (db) return { url: `${global.origin}api/${db.get("id")}` };

	let id = nanoid(10);
	db = await urlSchema.findOne({ id });
	while (db) {
		id = nanoid(10);
		db = await urlSchema.findOne({ id });
	}

	await new urlSchema({ id, url }).save();
	return { url: `${global.origin}api/${id}` };
}

export async function get(req: Request, res: Response): Promise<void> {
	const db = await urlSchema.findOne({ id: req.params.id });
	return db ? res.redirect(db.get("url")) : res.redirect("/");
}
