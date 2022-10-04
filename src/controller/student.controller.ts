import { IStudent, Student } from "../schema/student.schema";
import { BaseController } from "./base.controller";

class StudentController extends BaseController<IStudent> {}

export const _studentController = new StudentController(Student);
