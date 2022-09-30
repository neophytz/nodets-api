import { StatusCodes } from "http-status-codes";
import express, { Request, Response, Router } from 'express';

const studentRouter: Router = express.Router();

studentRouter.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({
        done: "welcome",
    })
})

studentRouter.get('/:student_id', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({
        done: "welcome",
    })
})

export { studentRouter };