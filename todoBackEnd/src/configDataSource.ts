import "reflect-metadata";
import {DataSource} from 'typeorm';

import { Activity } from "./entities/Activity";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "todo",
    entities: [Activity],
    synchronize: true,
    logging: false,
})

export default AppDataSource;