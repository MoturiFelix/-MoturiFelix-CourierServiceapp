"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController_1 = require("./../Controller/ProductController");
const VerifyToken_1 = require("./../Middleware/VerifyToken");
const UserController_1 = require("./../Controller/UserController");
const express_1 = require("express");
const ProductController_2 = require("../Controller/ProductController");
const router = (0, express_1.Router)();
//users routes
router.post('/login', UserController_1.loginUser);
router.post('/signup', UserController_1.registerUser);
router.get('/homepage', VerifyToken_1.VerifyToken, UserController_1.getHomepage);
router.get('/check', VerifyToken_1.VerifyToken, UserController_1.checkUser);
//Parcel routes
router.get('/', ProductController_1.getAllParcels);
router.get('/:id', ProductController_1.getSingleParcel);
router.post('/', ProductController_2.insertParcel);
// router.put('/:id')
router.delete('/:id', ProductController_1.deleteParcel);
exports.default = router;
