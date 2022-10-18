import express, { Router } from 'express' 
import { adminLogin, adminSignup, getHotelD, getRatingall, hotelData, singleItem, takeRating , singleGet } from '../Controller/admin.controller.js';


 
const route = Router(express)


route.post('/register',adminSignup);
route.post('/login',adminLogin);
route.post('/create',hotelData);
route.post('/createRate',takeRating)
route.get('/getd',getHotelD)
route.post('/singleitem',singleItem)
 route.get('/singleGet/:id',singleGet)
route.get('/rating',getRatingall);




export default route;
