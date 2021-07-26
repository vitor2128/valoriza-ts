import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid'
import { Awards } from "./Awards";
import { User } from "./User";

@Entity("reward")
class Rewards {

    @PrimaryColumn()
    readonly id: string

    @Column()
    user_receiver: string

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User

    @Column()
    award_id: string

    @JoinColumn({name: "award_id"})
    @ManyToOne(() => Awards)
    awards: Awards

    @CreateDateColumn()
    created_at: Date


    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { Rewards }