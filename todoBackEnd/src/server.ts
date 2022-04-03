import "reflect-metadata";
import  express  from "express";
import { routes } from "./routes";
var cors = require("cors");
import AppDataSource from "./configDataSource";


const app = express();

AppDataSource.initialize()
    .then(() => {
       console.log("database on")
    })
    .catch((error) => console.log(error))


app.use(cors())
app.use(express.json());

app.use(routes);
app.listen(3000,() =>(
    console.log("Server Run on port: 3000 ")   
))