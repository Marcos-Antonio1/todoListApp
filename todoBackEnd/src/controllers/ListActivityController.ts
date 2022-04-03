import { ActivityService } from "../services/ActivityService";
import {Request,Response} from 'express';

export class  ListActivityController{
    async list(request:Request,response:Response){
        const activityService =  new ActivityService();
        const result = await activityService.list();

        return response.json(result).status(200); 
    }
} 