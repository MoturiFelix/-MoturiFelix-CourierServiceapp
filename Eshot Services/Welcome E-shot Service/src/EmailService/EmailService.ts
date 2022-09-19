import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import {sqlConfig} from '../Config/Config'
dotenv.config()
import sendMail from '../Helpers/Email'
interface Task{
    UserID:number
    FullNames:string
    EmailAddress:string
    PhoneNumber:string
    Role:string
    Issent:string
}


const SendEmails= async()=>{
const pool = await mssql.connect(sqlConfig)
const tasks:Task[]= await(await pool.request().query(
`SELECT * FROM Users where Issent=0`)).recordset
// console.log(tasks); 


 for(let task of tasks){
console.log(task);

    ejs.renderFile('templates/registration.ejs',{Fullnames:task.FullNames,Role:task.Role} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:task.EmailAddress,
            subject:"Thank you for Joining SendIT",
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
            await pool.request().query(`UPDATE Users SET Issent='1' WHERE Issent = '0'`)
            console.log('Email is Sent');
            
        } catch (error) {
            console.log(error);
            
        }


    })

 }


}

export default SendEmails