
import bcrypt from "bcrypt";
import { USER_STATUS, USER_TYPE } from "../utils/constants";
import { AppDataSource } from "../db/config";
import User from "../api/entities/User.entity";

const user = {
    first_name: "admin",
    last_name: "main",
    email: "admin@gmail.com",
    mobile: "8787888888",
    password: "MyPassword@1234",
    user_type: USER_TYPE.ADMIN,
    status: USER_STATUS.VERIFIED
};

AppDataSource.initialize()
    .then(async () => {
        const userRepo = AppDataSource.getRepository(User);
        const encryptPassword = await bcrypt.hash(user.password, 12);
        const newUser = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            mobile: user.mobile,
            password: encryptPassword,
            user_type: user.user_type,
            status: user.status,
        };
        const userCreated = userRepo.create(newUser);
        const result = await userRepo.save(userCreated);
        console.log(">> USER CREATED : ", result);
    })
    .catch((err) => {
        console.log("Error Occurred while adding admin: ", err);
    });
