import { User } from './../Interfaces/interfaces';
import { UserSchema } from "./../Helpers/UserValidators";
import { sqlConfig } from "./../Config/Config";
import { Request, Response } from "express";
import mssql from "mssql";
import { v4 as uid } from "uuid";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

import { Data } from './../Interfaces/interfaces';

interface Extended extends Request{
    info?:Data
}



interface ExtendedRequest extends Request {
  body: {
    fullNames: string;
    email: string;
    phoneNumber: string;
    password: string;
    
  };
}

export const registerUser = async (req: ExtendedRequest, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const id = uid();
    const { fullNames, email, phoneNumber, password } = req.body;
    const { error, value } = UserSchema.validate({ email, password });
    if (error) {
      return res.json({ error: error.details[0].message });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    await pool
      .request()
      .input("id", mssql.VarChar, id)
      .input("fullNames", mssql.VarChar, fullNames)
      .input("email", mssql.VarChar, email)
      .input("phoneNumber", mssql.VarChar, phoneNumber)
      .input("password", mssql.VarChar, hashedpassword)
      .execute("insertUser");

      

    res.json({ message: "Registered..." });
  } catch (error) {
    res.json({ error });
  }
};

export const loginUser = async (req: ExtendedRequest, res: Response) => {
  try {
    const { email, password } = req.body;
    const pool = await mssql.connect(sqlConfig);

    // validate right formart of email
    const { error, value } = UserSchema.validate({ email, password });
    if (error) {
      return res.json({ error: error.details[0].message });
    }

    const user: User[] = (
      await pool
        .request()
        .input("email", mssql.VarChar, email)
        .execute("getUser")
    ).recordset;

    // this is if the user email does not exist
    if (!user) {
      return res.json({ message: "User Not Found" });
    }

    const validPassword = await bcrypt.compare(password, user[0].Password);
    if (!validPassword) {
      return res.json({ message: "Invalid Password" });
    }

        //payload
    const payload =user.map( item=>{
        const{Password, ...rest}=item
        return rest
        })


     //jwt
     const token = jwt.sign (payload[0], process.env.KEY as string, {expiresIn:'3600m'} )

    // if the email exist return dataset
    res.json({
      message: "You have successfully logged in",
      token
        //payload   <---this will help me see the payload array
      //user,validPassword,
   
    }); 
  } catch (error) {
    res.json({ error });
  }
};



export const getHomepage=async(req:Extended, res:Response)=>{
  if(req.info){   
    return res.json({message:'welcome to Homepage'})
    // ${req.info.email}
  }
}

export const checkUser=async (req:Extended, res:Response)=>{
  if(req.info){   
     res.json({FullNames:req.info.FullNames, Role:req.info.Role})
  }
}
 