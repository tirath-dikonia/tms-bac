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
                    .valid(
                        USER_TYPE.ADMIN,
                        USER_TYPE.EMPLOYEE,
                        USER_TYPE.MANAGER
                    )
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

const getUserList = {
    [VALIDATOR]: celebrate({
        query: Joi.object()
            .keys({
                search_term: Joi.string().lowercase().allow("", null),
                sort_field: Joi.string().trim().allow(null, ""),
                sort_order: Joi.string().valid("asc", "desc").allow(""),
                per_page: Joi.number().integer().min(1).max(1000).required(),
                page_number: Joi.number().integer().min(1).max(1000).required(),
            })
            .required(),
    }),
    [CONTROLLER]: async (req, res) => {
        const {
            search_term,
            sort_field = "name",
            sort_order = "asc",
            per_page = 10,
            page_number = 1,
        } = req.query;
        const query: any = {};
        if (search_term) {
            query.$or = [
                { name: new RegExp(search_term, "i") },
                { email: new RegExp(search_term, "i") },
            ];
        }

        // Building sort options
        const sortOptions: any = {};
        sortOptions[sort_field] = sort_order === "asc" ? 1 : -1;

        // Pagination options
        const limit = parseInt(per_page as string, 10);
        const skip = (parseInt(page_number as string, 10) - 1) * limit;

        // Fetching users
        const users = await User.find(query)
            .select([
                "_id",
                "name",
                "user_type",
                "status",
                "last_login",
                "slug",
            ])
            .populate("role", "_id role is_active")
            .sort(sort_order)
            .skip(skip)
            .limit(limit);
        // Fetching total count for pagination
        const totalUsers = await User.countDocuments(query);
        const result = {
            users,
            total_users: totalUsers,
            page_number: parseInt(page_number as string, 10),
            per_page: limit,
        };
        return sendResponse(
            res,
            result,
            "Users list got successfully",
            true,
            httpStatus.OK
        );
    },
};


const getUserTypesDropdown = {
    [CONTROLLER]: async (req, res) => {
        return sendResponse(
            res,
            Object.values(USER_TYPE),
            "Roles found successfully",
            true,
            httpStatus.OK
        );
    },
};

export { addUser, getUserList,getUserTypesDropdown };
