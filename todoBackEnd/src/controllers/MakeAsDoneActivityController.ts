import {Request,Response} from "express";
import { ActivityService } from "../services/ActivityService";

export class MakeAsDoneActivityController {
    async markAsDone(request:Request,response:Response){
        const activityService = new ActivityService();
        const {id} = request.params;
        const result =  await activityService.markAsDone(id);

       return response.json(result).status(200);
    }
}