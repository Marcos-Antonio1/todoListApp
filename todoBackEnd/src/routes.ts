import { Router } from 'express';
import { CreateActivityController } from './controllers/CreateActivityController';
import { DeleteActivityController } from './controllers/DeleteActivityController';
import { DeleteAllActivities } from './controllers/DeleteAllActivities';
import { ListActivityController } from './controllers/ListActivityController';
import { MakeAsDoneActivityController } from './controllers/MakeAsDoneActivityController';

const routes = Router();


routes.post("/activity" , new CreateActivityController().create);
routes.put("/activity/:id" , new MakeAsDoneActivityController().markAsDone);
routes.delete("/activity/:id", new DeleteActivityController().delete);
routes.delete("/activity-all", new DeleteAllActivities().delete)
routes.get("/activity", new ListActivityController().list);

export {routes};