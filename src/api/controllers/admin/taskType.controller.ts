import { Joi, celebrate } from "celebrate";
import { CONTROLLER, VALIDATOR } from "../../../utils/constants";
import { sendResponse } from "../../../utils/sendResponse";
import httpStatus from "http-status";
import { TaskType } from "../../../db/models/TaskType.model";

const addTaskType = {
    [VALIDATOR]: celebrate({
        body: Joi.object()
            .keys({
                name: Joi.string().required(),
                desc: Joi.string().allow(null, ""),
            })
            .required(),
    }),
    [CONTROLLER]: async (req, res) => {
        const { name, desc } = req.body;
        const foundTaskType = await TaskType.findOne({ name });
        if (foundTaskType)
            return sendResponse(
                res,
                {},
                "Same task type already exists",
                false,
                httpStatus.OK
            );
        const newTaskType = new TaskType({
            name,
            desc: desc || null,
        });
        const taskTypeSaved = await newTaskType.save();
        // const clientSaved = await userRepo.save(newUser);
        return sendResponse(
            res,
            taskTypeSaved,
            "New task type added successfully",
            true,
            httpStatus.OK
        );
    },
};


const getTaskTypeList = {
    [VALIDATOR]: celebrate({
        query: Joi.object()
            .keys({
                search_term: Joi.string().lowercase().allow("", null),
                sort_field: Joi.string().trim().allow(null, ""),
                sort_order: Joi.string().valid("asc", "desc").trim().allow(""),
                per_page: Joi.number().integer().min(1).max(1000).required(),
                page_number: Joi.number().integer().min(1).max(1000).required(),
            })
            .required(),
    }),
    [CONTROLLER]: async (req, res) => {
        const {
            search_term = "",
            sort_field = "createdAt",
            sort_order = "desc",
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
        const taskTypes = await TaskType.find(query)
            .select([
                "_id",
                "name",
                'desc'
            ])
            .sort(sortOptions)
            .skip(skip)
            .limit(limit);
        // Fetching total count for pagination
        const totalTypes = await TaskType.countDocuments(query);
        const result = {
            items: taskTypes,
            total_items: totalTypes,
            page_number: parseInt(page_number as string, 10),
            per_page: limit,
        };
        return sendResponse(
            res,
            result,
            "Types list got successfully",
            true,
            httpStatus.OK
        );
    },
};


export {addTaskType, getTaskTypeList};