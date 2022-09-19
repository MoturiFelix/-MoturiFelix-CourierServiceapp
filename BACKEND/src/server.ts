import express, { json, NextFunction, Request, Response } from 'express'
import router from './Routes/Routes'

const app= express() 



app.use(json()) 

app.use('/user', router)
app.use('/parcels', router)


app.use((err:Error, req:Request, res:Response,next:NextFunction)=>{
    res.json({Error:err.message})
})


app.listen(6000,()=>{
    console.log('Application is running');
    
})