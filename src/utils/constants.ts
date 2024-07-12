import path from "path";

/* eslint-disable */
const REGEX_EMAIL =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const REGEX_MOBILE = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const REGEX_USERNAME = /^[a-zA-Z0-9._-]{2,40}$/;
const REGEX_PASSWORD =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
/* eslint-enable */
const FILES_PATH =
    process.env.NODE_ENV === "production"
        ? path.join(__dirname, "../../../uploads")
        : path.join(__dirname, "../../uploads");
const VALIDATOR = "validator";
const CONTROLLER = "controller";
const AUTHORIZER = "authorizer";
enum USER_TYPE {
    ADMIN = "Admin",
    EMPLOYEE = "Employee",
    MANAGER = "Manager",
}
enum USER_STATUS {
    INACTIVE = "inactive",
    ACTIVE = "active",
}
enum MAIL_STATUS {
    VERIFIED = "verified",
    NOT_VERIFIED = "not_verified",
}
enum TASK_STATUS {
    COMPLETE = "Complete",
    PENDING = "Pending"
}
const USER_PERMISSIONS = {
    add_new_quote: "Add New Quote",
    manage_employee: "Manage Employee",
    role_permissions: "Roles And Permissions",
    add_employee: "Add Employee",
    quotes: "Quotes",
    charters: "Charters",
    past_trips: "Past Trips",
    vendors: "Vendors",
    leads: "Leads",
    clients: "Clients",
};
export {
    REGEX_EMAIL,
    REGEX_MOBILE,
    REGEX_USERNAME,
    REGEX_PASSWORD,
    VALIDATOR,
    CONTROLLER,
    AUTHORIZER,
    USER_TYPE,
    USER_STATUS,
    FILES_PATH,
    USER_PERMISSIONS,
    MAIL_STATUS,
    TASK_STATUS
};
