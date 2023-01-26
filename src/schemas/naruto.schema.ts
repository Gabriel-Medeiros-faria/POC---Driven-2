import { join } from "@prisma/client/runtime";
import Joi from "joi";

export const narutoSchema = Joi.object({
    name: Joi.string().required(),
    power: Joi.number().required(),
    qtdTransformation: Joi.number().required(),
    missionId: Joi.number().required(),
    villageId: Joi.number().required()
})