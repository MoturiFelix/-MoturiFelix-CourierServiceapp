import { string } from "joi"

export interface User{
    id:string
    email:string
    Password:string
}

export interface Data{
    
    FullNames: string,
    EmailAddress: string,
    PhoneNumber: string,
    iat: number,
    exp: number,
    Role:string

}