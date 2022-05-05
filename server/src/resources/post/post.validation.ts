import Joi from "joi";

const create = Joi.object({
	title: Joi.string().required,
	body: Joi.string().required,
	author: Joi.string().required
});

// File will contain validation check schema for post related api calls ex: could
// contain check for update call

export default { create } ;