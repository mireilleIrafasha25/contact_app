// Contact routes here
import contactController from "../controllers/contact.controller.js";
import express from 'express';
const router=express.Router()

router.post('/create',contactController.create)
router.get('/list',contactController.list)
router.get('/getbyphone/:phone',contactController.GetbyPhone)
router.put('/update/:id',contactController.Updatecontact)
router.delete('/delete/:id',contactController.Delete)

export default router;