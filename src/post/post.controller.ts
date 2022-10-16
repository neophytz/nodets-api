import { BaseController } from "../controller/base.controller";
import { IPostModel, Post } from "./post.schema";

class PostController extends BaseController<IPostModel>{
    
}

export const _postController = new PostController(Post);
