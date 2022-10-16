import { Router } from "express";
import { studentRouter } from "./student.router";
import { postRouter } from "../post/post.routes";

export const allRoutes: Record<string, Router> = {
    'student' : studentRouter,
    'post': postRouter
}
