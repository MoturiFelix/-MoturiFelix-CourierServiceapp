import { getSingleParcel, getAllParcels, deleteParcel } from './../Controller/ProductController';
import { VerifyToken } from './../Middleware/VerifyToken';
import { registerUser, loginUser, getHomepage ,checkUser } from './../Controller/UserController';
import { Router } from "express";
import { insertParcel } from '../Controller/ProductController';


const router = Router()

//users routes

router.post('/login', loginUser)
router.post('/signup', registerUser)
router.get('/homepage',VerifyToken, getHomepage)
router.get('/check' ,VerifyToken,checkUser)


//Parcel routes
router.get('/',getAllParcels)
router.get('/:id',getSingleParcel)
router.post ('/', insertParcel)
// router.put('/:id')
router.delete('/:id', deleteParcel)

export default router 