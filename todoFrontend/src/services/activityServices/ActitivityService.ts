import Api from '../Api';

const createActivity =  async (nome:any) =>{
    try {
        let response = await Api.post('activity',{name:nome});
        return response.data;
    }catch(err){
        throw err;
    }
}
const makeAsDoneActivity =  async (id:number) =>{
    try {
        let response = await Api.put(`activity/${id}`);
        return response.data;
    }catch(err){
        throw err;
    }
}

const deleteActivity =  async (id:number) =>{
    try {
        let response = await Api.delete(`activity/${id}`);
        return response.data;
    }catch(err){
        throw err;
    }
}

const listActivity =  async () =>{
    try {
        let response = await Api.get(`activity`);
        return response.data;
    }catch(err){
        throw err;
    }
}

const deleteAll = async () =>{
    try {
        let response = await Api.delete(`activity-all`);
        return response.data;
    }catch(err){
        throw err;
    }
}

const ActivityService = {
    createActivity,
    makeAsDoneActivity,
    deleteActivity,
    listActivity,
    deleteAll
}

export default ActivityService;