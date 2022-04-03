import {Request,Response} from'express';
import { ActivityService } from '../services/ActivityService';

export class DeleteActivityController {
    async delete(request:Request, response:Response){
        
        const activityService = new ActivityService();
        const {id} = request.params;

       const result =  await activityService.delete(id);

       return response.json(result);
    }
}
