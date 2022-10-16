import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BaseController } from "../controller/base.controller";
import { http_formatter } from "../util";
import { IPostModel, Post } from "./post.schema";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

class PostController extends BaseController<IPostModel>{
    
    constructor(){
        super(Post);
    }

    public async login(req: Request, res: Response) {
        // this is authentication.
        try {
            const {username, password} = req.body;
            const _user = await this.model.findOne({username: username});
            if(_user) {
                const match = await bcrypt.compare(password, _user.password);
                if(match) {
                    // generate token.
                    const secret_key = <string>process.env.PASSWORD_HASH;
                    const payload = {_id: _user._id, role: 'user'};
                    const token = jwt.sign(payload, secret_key, { expiresIn: 60 * 60 });
                    return res.status(StatusCodes.OK).json(
                        http_formatter({token})
                    );
                } else {
                    return res.status(StatusCodes.UNAUTHORIZED).json(
                        http_formatter({}, "Username/password invalid", false)
                    )
                }
            } else {
                // username was wrong, it does not exist in the database.
                return res.status(StatusCodes.UNAUTHORIZED).json(
                    http_formatter({}, "Username/password invalid", false)
                )
            }
        } catch (error) {
            this.errorHandler(res, error, StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    public async storeHashedPassword(res: Response<any, Record<string, any>>, document: IPostModel) {
        try {
            // document.password is currently a plain text. we should hash it.
            // ! let's hash the password.
            bcrypt.hash(document.password, 10, async (err, hash) => {
                // Store hash in your password DB.
                // now hash contains the encrypted password! wallah!
                if(err) {
                    this.errorHandler(res, err, StatusCodes.INTERNAL_SERVER_ERROR);
                } else {
                    document.password = hash;
                    const createdDoc = await this.model.create(document);
                    return res.status(StatusCodes.CREATED).json(http_formatter(createdDoc))
                }
            });
        } catch (error) {
            this.errorHandler(res, error)
        }
    }
}

export const _postController = new PostController();


// export const vanshStrip = () => {}
// import {vanshStrip} from ''

// export default vanshStrip = () => {}
// import vanshStrip from ''