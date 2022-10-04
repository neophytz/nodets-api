import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Student } from '../schema/student.schema';
import { http_formatter } from '../util';

export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const _allStudents = await Student.find({});
        return res.status(StatusCodes.OK).json(
            http_formatter(_allStudents, 'ok', true)
        )
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(
            http_formatter(error, 'Something went wrong', false)
        )
    }
}

export const createStudent = async (req:Request, res: Response) => {
    // const _newStudent = await Student.create(req.body);
    // _newStudent will have all the properties of the IStudent because
    // we defined 'Student' collection like this -> model<IStudent>('Student', studentSchema);
    // for more details, check student.schema.ts
}