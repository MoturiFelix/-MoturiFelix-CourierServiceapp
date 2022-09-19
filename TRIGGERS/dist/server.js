"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EmailService_1 = __importDefault(require("./EmailService/EmailService"));
const app = (0, express_1.default)();
(0, EmailService_1.default)();
// const run =()=>{
// cron.schedule('* * * * * *', async() => {
//   console.log('running a 5 seconds');
//   await SendEmails()
// })
// }
// run()
app.listen(8000, () => {
    console.log('App is Running');
});
