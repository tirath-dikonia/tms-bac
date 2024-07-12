// import handlebars from "handlebars";
// import nodemailer from "nodemailer";
// import path from "path";
// import fs from "fs";
// import { addVendorBidInvite } from "../api/controllers/commonFunctions";
// import { getJWTTokenForBid } from "./jwt.helper";
// import { vendorBidEmailTemplate } from "../email-templates/vendor-bid";
// import { resetPasswordEmployeeMailTemplate } from "../email-templates/employee-reset-password";
// import { tokenForTripClientReview } from "../email-templates/client-review-for-trip-mail";
// import { forgotPasswordUserMailTemplate } from "../email-templates/forgot-user-password-mail";
// import { invitePasswordEmployeeMailTemplate } from "../email-templates/employee-invite-mail";
// import { clientVendorBidDataMailText } from "../email-templates/client-vendor-bid-data-mail";
// import { AppDataSource } from "../db/config";
// import User from "../api/entities/User.entity";
// import { USER_TYPE } from "./constants";
// const APP_URL = process.env.APP_URL;

// export enum MAIL_STATUS {
//     MAIL_SENT = "MAIL_SENT",
//     MAIL_ERROR = "MAIL_ERROR",
// }

// const transporter = nodemailer.createTransport({
//     secure: true,
//     // tls: { rejectUnauthorized: false },
//     port: process.env.MAIL_PORT,
//     host: process.env.MAIL_HOST,
//     auth: {
//         user: process.env.MAIL_USERNAME,
//         pass: process.env.MAIL_PASSWORD,
//     },
// });

// const sendMailToMakeBidByVendors = async (email, tripId, vendorId) => {
//     // const filePath = path.join(__dirname, emailBidHtml);
//     // const source = fs.readFileSync(filePath, "utf-8").toString();
//     // const template = handlebars.compile(vendorBidEmailTemplate(APP_URL, ));
//     const gotToken = getJWTTokenForBid({
//         trip_id: tripId,
//         vendor_id: vendorId,
//     });
//     // const replacements = {
//     //     verification_link:
//     //         "/vendor-bids" + `/${tripId}/${vendorId}/${gotToken}`,
//     //     APP_URL: APP_URL,
//     //     email_to: email,
//     // };

//     const htmlToSend = vendorBidEmailTemplate(
//         APP_URL + "/vendor-bids" + `/${tripId}/${vendorId}/${gotToken}`
//     );
//     const mailOptions = {
//         from: process.env.MAIL_FROM_ADDRESS,
//         to: email,
//         subject: "Request to fill the pricing details",
//         html: htmlToSend,
//     };
//     try {
//         // console.log(">> BEFORE CALLING transporter TO SEND MAIL");
//         const info = await transporter.sendMail(mailOptions);
//         // console.log(">> AFTER CALLING transporter TO SEND MAIL");
//         // console.log("Message sent: %s", info?.messageId);
//         if (info?.messageId) {
//             try {
//                 await addVendorBidInvite(tripId, vendorId, gotToken);
//             } catch (err) {
//                 console.log(">> ERROR WHILE UPDATING VENDOR BID INVITE : ");
//             }
//         }
//         return true;
//     } catch (err) {
//         console.log(">> ERROR WHILE SENDING VENDOR BID INVITE : ");
//         return false;
//     }
// };

// const sendMailForEmployeeInviteToSetMailPassword = async (user, resetToken) => {
//     const htmlToSend = invitePasswordEmployeeMailTemplate(
//         APP_URL + "/reset-employee-password" + `/${resetToken}`,
//         user
//     );
//     const mailOptions = {
//         from: process.env.MAIL_FROM_ADDRESS,
//         to: user.email,
//         subject: `Dear ${user.first_name}, Invitation for GAC portal`,
//         html: htmlToSend,
//     };
//     try {
//         const info = await transporter.sendMail(mailOptions);
//         // console.log(">> AFTER CALLING transporter TO SEND MAIL");
//         // console.log("Message sent: %s", info?.messageId);
//         if (info?.messageId) {
//             try {
//                 return MAIL_STATUS.MAIL_SENT;
//             } catch (err) {
//                 return MAIL_STATUS.MAIL_ERROR;
//             }
//         }
//         return true;
//     } catch (err) {
//         console.log(">> ERROR WHILE SENDING VENDOR BID INVITE : ");
//         return MAIL_STATUS.MAIL_ERROR;
//     }
// };

// const sendMailForEmployeeResetMailPassword = async (email, resetToken) => {
//     const htmlToSend = resetPasswordEmployeeMailTemplate(
//         APP_URL + "/reset-employee-password" + `/${resetToken}`
//     );
//     const mailOptions = {
//         from: process.env.MAIL_FROM_ADDRESS,
//         to: email,
//         subject: "Reset your GAC login password",
//         html: htmlToSend,
//     };
//     try {
//         const info = await transporter.sendMail(mailOptions);
//         // console.log(">> AFTER CALLING transporter TO SEND MAIL");
//         // console.log("Message sent: %s", info?.messageId);
//         if (info?.messageId) {
//             try {
//                 return MAIL_STATUS.MAIL_SENT;
//             } catch (err) {
//                 return MAIL_STATUS.MAIL_ERROR;
//             }
//         }
//         return true;
//     } catch (err) {
//         console.log(">> ERROR WHILE SENDING VENDOR BID INVITE : ");
//         return MAIL_STATUS.MAIL_ERROR;
//     }
// };

// const sendMailToClientForTripReviewInvite = async (client, id, resetToken) => {
//     const htmlToSend = tokenForTripClientReview(
//         APP_URL + "/client-review-for-trip" + `/${id}` + `/${resetToken}`,
//         client
//     );
//     const mailOptions = {
//         from: process.env.MAIL_FROM_ADDRESS,
//         to: client.email,
//         subject: "Please review your trip",
//         html: htmlToSend,
//     };
//     try {
//         const info = await transporter.sendMail(mailOptions);
//         // console.log(">> AFTER CALLING transporter TO SEND MAIL");
//         // console.log("Message sent: %s", info?.messageId);
//         if (info?.messageId) {
//             try {
//                 return MAIL_STATUS.MAIL_SENT;
//             } catch (err) {
//                 return MAIL_STATUS.MAIL_ERROR;
//             }
//         }
//         return true;
//     } catch (err) {
//         console.log(
//             ">> ERROR WHILE SENDING INVITE TO CLIENT FOR TRIP REVIEW : "
//         );
//         return MAIL_STATUS.MAIL_ERROR;
//     }
// };

// const sendMailToUserForgotMailPassword = async (email, resetToken) => {
//     const htmlToSend = forgotPasswordUserMailTemplate(
//         APP_URL + "/reset-user-password" + `/${resetToken}`
//     );
//     const mailOptions = {
//         from: process.env.MAIL_FROM_ADDRESS,
//         to: email,
//         subject: "Reset your GAC login password",
//         html: htmlToSend,
//     };
//     try {
//         const info = await transporter.sendMail(mailOptions);
//         // console.log(">> AFTER CALLING transporter TO SEND MAIL");
//         // console.log("Message sent: %s", info?.messageId);
//         if (info?.messageId) {
//             try {
//                 return MAIL_STATUS.MAIL_SENT;
//             } catch (err) {
//                 return MAIL_STATUS.MAIL_ERROR;
//             }
//         }
//         return true;
//     } catch (err) {
//         console.log(">> ERROR WHILE SENDING VENDOR BID INVITE : ");
//         return MAIL_STATUS.MAIL_ERROR;
//     }
// };

// const sendMailToClientWithVendorBidData = async (
//     foundUser,
//     fileName,
//     pdfBuffer,
//     mail
// ) => {
//     const htmlToSend = clientVendorBidDataMailText(foundUser);
//     const mailOptions = {
//         from: process.env.MAIL_FROM_ADDRESS,
//         to: mail.join(", "),
//         subject: "New bid has been made by vendor",
//         html: htmlToSend,
//         attachments: [
//             {
//                 filename: fileName,
//                 content: pdfBuffer,
//             },
//         ],
//     };
//     try {
//         const info = await transporter.sendMail(mailOptions);
//         // console.log(">> AFTER CALLING transporter TO SEND MAIL");
//         // console.log("Message sent: %s", info?.messageId);
//         if (info?.messageId) {
//             try {
//                 return MAIL_STATUS.MAIL_SENT;
//             } catch (err) {
//                 return MAIL_STATUS.MAIL_ERROR;
//             }
//         }
//         return true;
//     } catch (err) {
//         console.log(">> ERROR WHILE SENDING VENDOR BID INVITE : ");
//         return MAIL_STATUS.MAIL_ERROR;
//     }
// };

// export {
//     sendMailToMakeBidByVendors,
//     sendMailForEmployeeResetMailPassword,
//     sendMailToClientForTripReviewInvite,
//     sendMailToUserForgotMailPassword,
//     sendMailForEmployeeInviteToSetMailPassword,
//     sendMailToClientWithVendorBidData,
// };
