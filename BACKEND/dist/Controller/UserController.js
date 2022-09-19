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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUser = exports.getHomepage = exports.loginUser = exports.registerUser = void 0;
const UserValidators_1 = require("./../Helpers/UserValidators");
const Config_1 = require("./../Config/Config");
const mssql_1 = __importDefault(require("mssql"));
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(Config_1.sqlConfig);
        const id = (0, uuid_1.v4)();
        const { fullNames, email, phoneNumber, password } = req.body;
        const { error, value } = UserValidators_1.UserSchema.validate({ email, password });
        if (error) {
            return res.json({ error: error.details[0].message });
        }
        const hashedpassword = yield bcrypt_1.default.hash(password, 10);
        yield pool
            .request()
            .input("id", mssql_1.default.VarChar, id)
            .input("fullNames", mssql_1.default.VarChar, fullNames)
            .input("email", mssql_1.default.VarChar, email)
            .input("phoneNumber", mssql_1.default.VarChar, phoneNumber)
            .input("password", mssql_1.default.VarChar, hashedpassword)
            .execute("insertUser");
        res.json({ message: "Registered..." });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const pool = yield mssql_1.default.connect(Config_1.sqlConfig);
        // validate right formart of email
        const { error, value } = UserValidators_1.UserSchema.validate({ email, password });
        if (error) {
            return res.json({ error: error.details[0].message });
        }
        const user = (yield pool
            .request()
            .input("email", mssql_1.default.VarChar, email)
            .execute("getUser")).recordset;
        // this is if the user email does not exist
        if (!user) {
            return res.json({ message: "User Not Found" });
        }
        const validPassword = yield bcrypt_1.default.compare(password, user[0].Password);
        if (!validPassword) {
            return res.json({ message: "Invalid Password" });
        }
        //payload
        const payload = user.map(item => {
            const { Password } = item, rest = __rest(item, ["Password"]);
            return rest;
        });
        //jwt
        const token = jsonwebtoken_1.default.sign(payload[0], process.env.KEY, { expiresIn: '3600m' });
        // if the email exist return dataset
        res.json({
            message: "You have successfully logged in",
            token
            //payload   <---this will help me see the payload array
            //user,validPassword,
        });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.loginUser = loginUser;
const getHomepage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.info) {
        return res.json({ message: 'welcome to Homepage' });
        // ${req.info.email}
    }
});
exports.getHomepage = getHomepage;
const checkUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.info) {
        res.json({ FullNames: req.info.FullNames, Role: req.info.Role });
    }
});
exports.checkUser = checkUser;
