import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import {sqlConfig} from '../Config/Config'
dotenv.config()
import sendMail from '../Helpers/Email'
// interface Task{
//     UserID:number
//     FullNames:string
//     EmailAddress:string
//     PhoneNumber:string
//     Role:string
//     Issent:string
// }

export interface Task{
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


const SendEmails= async()=>{
const pool = await mssql.connect(sqlConfig)
const tasks:Task[]= await(await pool.request().query(
`SELECT * FROM Parcels where P_Status ='Dispatched'`)).recordset
// console.log(tasks); 


 for(let task of tasks){
console.log(task);

    ejs.renderFile('templates/registration.ejs',{ ParcelDescription:task.ParcelDescription, ReceiverName:task. ReceiverName} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:task.Sender_Email,
            subject:"Your Order has been Placed",
            html:data,
            // attachments:[
            //     {
            //         filename:'task.txt',
            //         content:`You have been assigned a task: you are now a HR4U Member${task.user_role}`
            //     }
            // ]
        }   

        try {
            
            await sendMail(messageoption)
            await pool.request().query(`UPDATE Parcels SET P_Status= Being Delivered WHERE P_Status = Dispatched`)
            console.log('Email is Sent');
            
        } catch (error) {
            console.log(error);
            
        }


    })

 }


}

export default SendEmails