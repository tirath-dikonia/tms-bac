// import { AppDataSource } from "../database/config";
// import { PERMISSIONS } from "../utils/constants";
// import Permission from "../entity/Permission.entity";

// const allPermissions = [...Object.values(PERMISSIONS)];

// AppDataSource.initialize()
//     .then(async () => {
//         const values = allPermissions.map((permission) => {
//             return { permission_type: permission };
//         });
//         await AppDataSource.createQueryBuilder()
//             .insert()
//             .into(Permission)
//             .values(values)
//             .execute();
//         console.log(">> INITIAL PERMISSIONS ADDED SUCCESSFULLY");
//     })
//     .catch((err) => {
//         console.log("Error Occurred while seed permissions: ", err);
//     });
