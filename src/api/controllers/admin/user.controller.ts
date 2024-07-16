import { Joi, celebrate } from "celebrate";
import {
    CONTROLLER,
    REGEX_EMAIL,
    USER_TYPE,
    VALIDATOR,
} from "../../../utils/constants";
import { User } from "../../../db/models/User.model";
import { sendResponse } from "../../../utils/sendResponse";
import httpStatus from "http-status";
import bcrypt from "bcrypt";

const addUser = {
    [VALIDATOR]: celebrate({
        body: Joi.object()
            .keys({
                name: Joi.string().required(),
                email: Joi.string().pattern(REGEX_EMAIL).lowercase().required(),
                mobile: Joi.string()
                    .pattern(/^[0-9]+$/)
                    .length(10)
                    .allow("", null),
                user_type: Joi.string()
                    .valid(USER_TYPE.ADMIN, USER_TYPE.EMPLOYEE, USER_TYPE.MANAGER)
                    .required(),
                role: Joi.string().allow(null, ""),
            })
            .required(),
    }),
    [CONTROLLER]: async (req, res) => {
        const { name, email, mobile, user_type, role } = req.body;
        const foundUser = await User.findOne({ $or: [{ email }, { mobile }] });
        // console.log(">>> USER FOUND :", foundUser)
        if (foundUser)
            return sendResponse(
                res,
                {},
                `User with same ${
                    foundUser.mobile == mobile ? "mobile" : "email"
                } already exists`,
                false,
                httpStatus.OK
            );

        // Adding user
        const randomPass = await bcrypt.hash(
            Math.random().toString(36).slice(2),
            12
        );
        const newUser = new User({
            name: name,
            email: email,
            mobile: mobile || null,
            password: randomPass,
            user_type: user_type,
            role: role || null,
        });
        const userSaved = await newUser.save();
        // const clientSaved = await userRepo.save(newUser);
        return sendResponse(
            res,
            { user: userSaved },
            "New user added successfully",
            true,
            httpStatus.OK
        );
    },
};

export { addUser };
