import { ActivityService } from "../services/ActivityService";
import {Request,Response} from "express";

export class CreateActivityController {
    async create (request:Request, response:Response){

        const {name} = request.body;
        const ativityService =  new ActivityService();
        const result= await ativityService.create(name);
        
        return response.json(result).status(200);

    }
}