import express from 'express';
import {getStudents,addStudents,updateStudents,deleteStudents, newStudents} from '../Controllers/StudentController.js';
const router=express.Router();
router.get('/get-students',getStudents);
router.post('/add-students',addStudents);
router.post('/new-students',newStudents);
router.put('/edit-students',updateStudents);
router.delete('/delete-students',deleteStudents);
export default router;