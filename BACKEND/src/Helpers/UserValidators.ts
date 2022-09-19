
import Joi from 'Joi'



export const UserSchema2=Joi.object({
    fullNames:Joi.string().required(),
    email:Joi.string().required().email(),
    password:Joi.string().required().min(8),
    
})

export const UserSchema=Joi.object({
    email:Joi.string().required().email(),
    password:Joi.string().required().min(8)
})


