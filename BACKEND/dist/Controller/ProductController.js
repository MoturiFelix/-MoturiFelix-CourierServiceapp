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
exports.getAllParcels = exports.getSingleParcel = exports.insertParcel = void 0;
const uuid_1 = require("uuid");
const DB_1 = __importDefault(require("../DatabaseHelper/DB"));
const db = new DB_1.default();
const insertParcel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ParcelID = (0, uuid_1.v4)();
        const { ParcelDescription, DispatchedFrom, Destination, p_weight, P_Status, P_TimeOut, P_ArrivalTime, Sender_Email, ReceiverName, ReceiversNumber } = req.body;
        // const pool = await mssql.connect(sqlConfig)
        // await pool.request()
        yield db.exec('InsertUpdateParcel', { ParcelID, ParcelDescription, DispatchedFrom, Destination, p_weight,
            P_Status, P_TimeOut, P_ArrivalTime, Sender_Email, ReceiverName, ReceiversNumber });
        console.log(ParcelDescription, DispatchedFrom, Destination, p_weight, P_Status, P_TimeOut, P_ArrivalTime, Sender_Email, ReceiverName, ReceiversNumber);
        // .input('id', mssql.VarChar, id)
        // .input('ParcelDescription', mssql.VarChar, ParcelDescription)
        // .input('DispatchedFrom', mssql.VarChar, DispatchedFrom)
        // .input('Destination', mssql.VarChar, Destination)
        // .input('p_weight', mssql.VarChar, p_weight)
        // .input('P_Status', mssql.VarChar, P_Status)
        // .input('P_TimeOut', mssql.VarChar, P_TimeOut)
        // .input('P_ArrivalTime', mssql.VarChar, P_ArrivalTime)
        // .input('Sender_Email', mssql.VarChar, Sender_Email)
        // .input('ReceiverName', mssql.VarChar, ReceiverName)
        // .input('ReceiversNumber', mssql.VarChar, ReceiversNumber)
        // .execute('InsertUpdateParcel')
        res.json({ message: 'Product inserted Succesfully' });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.insertParcel = insertParcel;
const getSingleParcel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ParcelID = req.params.id;
        const single_user = (yield db.exec("get_single_parcel", { ParcelID })).recordset;
        if (single_user.length === 0) {
            return res.json({ message: "Parcel not found!!" });
        }
        else {
            return res.json(single_user);
        }
    }
    catch (error) {
        res.json({ error });
    }
});
exports.getSingleParcel = getSingleParcel;
//   export const delete_parcel:RequestHandler<{id:string}> = async (req , res ) =>{
//     try {
//         const ParcelID = req.params.id;
//         const single_user: Parcel[] = (
//             await db.exec("get_single_parcel",{ParcelID })
//           ).recordset;       
//           if (single_user.length===0) {
//          return res.json({ message: "Parcel with that id does not exist..." })
//          }else{
//             await db.exec("deleteParcel",{ParcelID })
//            return  res.json({ message: "parcel successfully deleted...." })
//          }
//     } catch (error:any) {
//         res.json({error})
//     }
// }
const getAllParcels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parcels = (yield db.exec("get_all_parcels")).recordset;
        if (parcels.length === 0) {
            return res.json({ message: "no Parcels in the database" });
        }
        else {
            return res.json(parcels);
        }
    }
    catch (error) {
        res.json({ error });
    }
});
exports.getAllParcels = getAllParcels;
