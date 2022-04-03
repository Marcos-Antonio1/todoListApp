
import {
    Card, 
    CardBody, 
    CardTitle,
    InputGroup,
    Button,
    Input,
    ListGroup,
    ListGroupItem,
    CardFooter,
    CardText
} from 'reactstrap';

import { 
    BsFillCheckSquareFill,
    BsFillTrashFill,
    BsSquare
} from 'react-icons/bs';

import "./Todo.css";
import Trash from 'bootstrap-icons/icons/trash3.svg';
import {useState,useEffect} from 'react';
import ActivityService from '../services/activityServices/ActitivityService';


function Todo() {
    const [activities,setActivities]= useState([]);
    const [countActivitiesToMake,setCountctivitiesToMake]= useState(5);
    const [nameActivity,setNameActivity]= useState('');
    
    useEffect(()=>{
        getData();
    },[])

    async function getData(){
        const response = await ActivityService.listActivity();
        const count = response.reduce((total:number, activity:any)=>{
            if(activity.make == false){
                total+=1
            }
            return total;
        },0)
        setActivities(response);    
        setCountctivitiesToMake(count);
    }

    async function makeAsDoneActivity(activity:any) {
         await ActivityService.makeAsDoneActivity(activity.id);
         getData();
   }
   async function add(name:string){
        setNameActivity("");
        if(name == "" || name == undefined || name == null){
            alert("O campo da atividade não pode ser  vazio !");
            return;
        }
        await ActivityService.createActivity(name);
        getData();
   }
   async function deleteAll(){
       const con = confirm("Tem certeza que quer deletar todas ?")
       if(!con){
         return;
       }
       
       await ActivityService.deleteAll();
       getData();
   }
   
   async function deleteActivity(id:number){
    await ActivityService.deleteActivity(id);
    getData();
   }

    return(
        <Card className="container-card">
            <CardBody>
                <CardTitle tag="h2" className="title">
                    Meu Todo
                </CardTitle>
                <InputGroup>
                    <Input placeholder="Adicione sua atividade"
                     value={nameActivity}
                     onChange={e=> setNameActivity(e.target.value)}
                    />
                    <Button color="success" onClick={()=>add(nameActivity)}>
                        +
                    </Button>
                </InputGroup>
                <ListGroup flush className="list">
                    {activities.map(function(i:{id:number,make:boolean,name:String}){
                        return (
                        <ListGroupItem className='activitie' key={i.id}>
                            {
                            i.make ?
                                <BsFillCheckSquareFill className='icon-check' size={25} color='green' onClick={()=>{makeAsDoneActivity(i)}} />                               
                            :
                                <BsSquare className="icon-square" size={25} onClick={()=>{makeAsDoneActivity(i)}} />
                            }
                            {i.name}
                            <Button color="danger" className="btn-delete" onClick={()=>deleteActivity(i.id)} >
                                <BsFillTrashFill className="icon-trash" />
                            </Button>
                        </ListGroupItem>)
                    })}
                </ListGroup>
                <CardFooter className='footer'>
                    <CardText className="title">Você tem {countActivitiesToMake} atividades pendentes</CardText>
                    <Button color="primary" className="btn-clear-activities" onClick={()=>deleteAll()}>Apagar todas</Button>
                </CardFooter>
            </CardBody>
        </Card>
    );
}

export default Todo;