import {v4 as uid} from 'uuid'
import mssql from 'mssql'
import { sqlConfig } from '../Config/Config'
import { Request, Response , RequestHandler} from 'express'
import { exec } from 'child_process'
import Connection from '../DatabaseHelper/DB'

const db = new Connection();


export interface Parcel{
    ParcelID:string
    ParcelDescription:string,
    DispatchedFrom:string,
    Destination:string,
    p_weight:string,
    P_Status:string,
    P_TimeOut:string,
    P_ArrivalTime:string,
    Sender_Email:string,
    ReceiverName:string,
    ReceiversNumber:string
}

interface ExtendedRequest extends Request {

    body:{
       
        ParcelDescription:string,
        DispatchedFrom:string,
        Destination:string,
        p_weight:string,
        P_Status:string,
        P_TimeOut:string,
        P_ArrivalTime:string,
        Sender_Email:string,
        ReceiverName:string,
        ReceiversNumber:string
    }

   

}


export const insertParcel = async (req:Request, res:Response)=>{
    try {
            
            const ParcelID = uid()
            const {ParcelDescription,DispatchedFrom, Destination, p_weight, P_Status, P_TimeOut, P_ArrivalTime, Sender_Email, ReceiverName,ReceiversNumber }=req.body
            // const pool = await mssql.connect(sqlConfig)
            // await pool.request()
            await db.exec('InsertUpdateParcel',{ ParcelID,ParcelDescription,DispatchedFrom, Destination, p_weight, 
                P_Status, P_TimeOut, P_ArrivalTime, Sender_Email, ReceiverName,ReceiversNumber})

                console.log(ParcelDescription,DispatchedFrom, Destination, p_weight, 
                    P_Status, P_TimeOut, P_ArrivalTime, Sender_Email, ReceiverName,ReceiversNumber);
                
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

            res.json({message: 'Product inserted Succesfully'})


    } catch (error:any) {
         res.json({error})
    }

}

export const getSingleParcel: RequestHandler<{ id: string }> = async (req, res) => {
    try {
      const ParcelID = req.params.id;
      
      const single_user: Parcel[] = (
          await db.exec("get_single_parcel",{ParcelID})
        ).recordset;
  
      if (single_user.length===0) {
        return res.json({ message: "Parcel not found!!" });
      } else {
  
       return res.json(single_user);
      }
    } catch (error: any) {
      res.json({ error });
    }
  };



export const getAllParcels: RequestHandler = async (req, res) => {
    try {
        const parcels: Parcel[] = (
            await db.exec("get_all_parcels")
          ).recordset;

        if (parcels.length===0) {   
            return  res.json({ message: "no Parcels in the database" });
        }else{
            return res.json(parcels);

        }
        
      } catch (error) {
        res.json({ error });
      }
}

export const deleteParcel: RequestHandler<{ id: string }> = async (req,res) => {

  try {

        const ParcelID = req.params.id;

        const { recordset } = await db.exec("get_single_parcel", { ParcelID });

        if (!recordset[0]) {

          res.status(404).json({ message: "Parcel Not Found" });

        } else {

          await db.exec("softDeleteParcel", { ParcelID});

          res.status(200).json({ message: "Parcel Deleted" });

        }

  } catch (error) {

    res.status(400).json({ message: "Parcel Not Deleted!" });

  }

};


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