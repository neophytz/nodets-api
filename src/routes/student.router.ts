import express, { Router } from 'express';
import { getAllStudents } from "../controller/student.controller";

const studentRouter: Router = express.Router();

/*
    ============== old method =====================
    studentRouter.get('/all', getAllStudents)
    studentRouter.get('/:student_id', getAllStudents)
    studentRouter.post('/', ()=>{});
    studentRouter.put('/', ()=>{});
    studentRouter.delete('/', ()=>{});
*/

// new classic and sexy method.
studentRouter
    .get('/all', getAllStudents)
    .get('/:student_id', ()=>{})
    .post('/', ()=>{})
    .put('/', ()=>{})
    .delete('/', ()=>{})

export { studentRouter };