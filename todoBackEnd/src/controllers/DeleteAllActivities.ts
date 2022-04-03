import { ActivityService } from "../services/ActivityService";
import {Request,Response} from "express";

export class DeleteAllActivities{
    async delete (request:Request,response:Response){

         const ativityService =  new ActivityService();
        await ativityService.deleteAll();
         
         return response.json().status(200);
        
    }
}