import { Joi, celebrate } from "celebrate";
import { CONTROLLER, VALIDATOR } from "../../../utils/constants";
import { sendResponse } from "../../../utils/sendResponse";
import httpStatus from "http-status";
import { TaskType } from "../../../db/models/TaskType.model";
import { Project } from "../../../db/models/Project.model";

const addProject = {
    [VALIDATOR]: celebrate({
        body: Joi.object()
            .keys({
                name: Joi.string().required(),
                desc: Joi.string().allow(null, ""),
                start_date: Joi.date().raw().required(),
                hours_allocated: Joi.number().integer().min(1).required(),
                deadline: Joi.date().raw().required(),
            })
            .required(),
    }),
    [CONTROLLER]: async (req, res) => {
        const { name, desc, start_date, hours_allocated, deadline } = req.body;
        const foundProject = await Project.findOne({ name });
        if (foundProject)
            return sendResponse(
                res,
                {},
                "Project with same name already exists",
                false,
                httpStatus.OK
            );
        const newProject = new Project({
            name,
            desc: desc || null,
            start_date,
            hours_allocated,
            deadline,
        });
        const projectSaved = await newProject.save();
        // const clientSaved = await userRepo.save(newUser);
        return sendResponse(
            res,
            projectSaved,
            "New project added successfully",
            true,
            httpStatus.OK
        );
    },
};

const getProjectList = {
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
                { desc: new RegExp(search_term, "i") },
            ];
        }

        // Building sort options
        const sortOptions: any = {};
        sortOptions[sort_field] = sort_order === "asc" ? 1 : -1;
        // Pagination options
        const limit = parseInt(per_page as string, 10);
        const skip = (parseInt(page_number as string, 10) - 1) * limit;

        // Fetching users
        const allPrj = await Project.find(query)
            .select([
                "_id",
                "name",
                "desc",
                "time_spent",
                "hours_allocated",
                "start_date",
                "deadline",
                "is_active",
            ])
            .sort(sortOptions)
            .skip(skip)
            .limit(limit);
        // Fetching total count for pagination
        const allPrjCount = await Project.countDocuments(query);
        const result = {
            items: allPrj,
            total_items: allPrjCount,
            page_number: parseInt(page_number as string, 10),
            per_page: limit,
        };
        return sendResponse(
            res,
            result,
            "Project list got successfully",
            true,
            httpStatus.OK
        );
    },
};

export { addProject, getProjectList };
