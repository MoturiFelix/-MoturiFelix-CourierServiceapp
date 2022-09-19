import express from 'express'
import cron from 'node-cron'
import SendEmails from './EmailService/EmailService'

const app= express()

 SendEmails()


// const run =()=>
// {
// cron.schedule('* * * * * *', async() => {
//   console.log('running a 5 seconds');
//   await SendEmails()
// })
// }
// run()



app.listen(8000, ()=>{
    console.log('App is Running');
    
})