import { Joi, celebrate } from "celebrate";
import { CONTROLLER, VALIDATOR } from "../../../utils/constants";
import { sendResponse } from "../../../utils/sendResponse";
import httpStatus from "http-status";
import { Role } from "../../../db/models/Role.model";

const addRole = {
    [VALIDATOR]: celebrate({
        body: Joi.object()
            .keys({
                role: Joi.string().required(),
                desc: Joi.string().allow(null, ""),
            })
            .required(),
    }),
    [CONTROLLER]: async (req, res) => {
        const { role, desc } = req.body;
        const foundRole = await Role.findOne({ role });
        if (foundRole)
            return sendResponse(
                res,
                {},
                "Same role already exists",
                false,
                httpStatus.OK
            );
        const newRole = new Role({
            role,
            desc: desc || null,
        });
        const roleSaved = await newRole.save();
        // const clientSaved = await userRepo.save(newUser);
        return sendResponse(
            res,
            { role: roleSaved },
            "New role added successfully",
            true,
            httpStatus.OK
        );
    },
};

export { addRole };
