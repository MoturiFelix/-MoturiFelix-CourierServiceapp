"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ejs_1 = __importDefault(require("ejs"));
const mssql_1 = __importDefault(require("mssql"));
const dotenv_1 = __importDefault(require("dotenv"));
const Config_1 = require("../Config/Config");
dotenv_1.default.config();
const Email_1 = __importDefault(require("../Helpers/Email"));
const SendEmails = () => __awaiter(void 0, void 0, void 0, function* () {
    const pool = yield mssql_1.default.connect(Config_1.sqlConfig);
    const tasks = yield (yield pool.request().query(`SELECT * FROM Parcels where P_Status ='Dispatched'`)).recordset;
    // console.log(tasks); 
    for (let task of tasks) {
        console.log(task);
        ejs_1.default.renderFile('templates/registration.ejs', { ParcelDescription: task.ParcelDescription, ReceiverName: task.ReceiverName }, (error, data) => __awaiter(void 0, void 0, void 0, function* () {
            let messageoption = {
                from: process.env.EMAIL,
                to: task.Sender_Email,
                subject: "Your Order has been Placed",
                html: data,
                // attachments:[
                //     {
                //         filename:'task.txt',
                //         content:`You have been assigned a task: you are now a HR4U Member${task.user_role}`
                //     }
                // ]
            };
            try {
                yield (0, Email_1.default)(messageoption);
                yield pool.request().query(`UPDATE Parcels SET P_Status= Being Delivered WHERE P_Status = Dispatched`);
                console.log('Email is Sent');
            }
            catch (error) {
                console.log(error);
            }
        }));
    }
});
exports.default = SendEmails;
