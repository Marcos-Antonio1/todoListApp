import {data} from './data';
import AppDataSource from '../configDataSource';
import { Activity } from '../entities/Activity';

export class ActivityService {
    
    async create(name:String){
       
       const activity= {
            name:name,
            make:false
        }

        await AppDataSource.createQueryBuilder()
       .insert()
       .into(Activity)
       .values([
            activity
       ]).execute(); 
       // INSERT INTO activity (name,make) VALUES('nome',false);

       return {msg: "Atividade criada com sucesso"}
    }

    async markAsDone(id:String){

        const activity = await AppDataSource
        .getRepository(Activity)
        .createQueryBuilder("activity")
        .where("activity.id = :id", { id: id })
        .getOne(); 
        // SELECT * FROM activity WHERE id = :id

        if(activity == null) {
            return {msg: "Erro ao atualizar atividade"};
        }

        if(activity.make == false) {
            await AppDataSource.createQueryBuilder()
            .update(Activity)
            .set({make:true})
            .where("id = :id",{id})
            .execute(); 
            // UPDATE activity SET make = true WHERE id =1;
        }else {
            await AppDataSource.createQueryBuilder()
            .update(Activity)
            .set({make:false})
            .where("id = :id",{id})
            .execute(); 
            // UPDATE activity SET make = true WHERE id =1;
        }

        return {msg: "Atividade marcada como feita"}
    }

    async delete(id:String){
        await AppDataSource.createQueryBuilder()
        .delete()
        .from(Activity)
        .where("id = :id",{id})
        .execute()
        // DELETE FROM activity WHERE id = :id

        return {msg: "Atividade deletada"}
    }
    async list(){
        const users =await AppDataSource.getRepository(Activity)
        .createQueryBuilder("activity")
        .getMany()

        // SELECT * FROM activity 

        return users;        
    }

    async deleteAll(){
       const a= await AppDataSource.createQueryBuilder()
        .delete()
        .from(Activity)
        .execute()
        // DELETE FROM activities

        return {msg: "Todas Atividades deletadas"}
    }
}