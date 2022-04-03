import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn
        
} from 'typeorm';

@Entity()
export class Activity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:String;

    @Column()
    make: boolean

    @CreateDateColumn()
    createAt: Date;


}