import { model, Schema } from "mongoose";

const reqString = { required: true, type: String };

const url = new Schema({
	url: reqString,
	id: reqString,
});

const m = model("url", url);
export default m;
