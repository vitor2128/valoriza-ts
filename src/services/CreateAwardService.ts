import { getCustomRepository } from "typeorm"
import { AwardsRepositories } from "../repositories/AwardsRepositories"


interface ITagRequest {
    name?:string
    value?:number
}


class CreateAwardService {

    async execute({name, value}: ITagRequest) {
        const awardsRepositories = getCustomRepository(AwardsRepositories)

        if(!name) {
            throw new Error("Incorrect name")
        }

        if(!value) {
            throw new Error("Incorrect value")
        }

        const awardsAlreadyExists = await awardsRepositories.findOne({
            name
        })

        if(awardsAlreadyExists) {
            throw new Error("Awards already exists")
        }

        const tag = awardsRepositories.create({
            name,
            value
        })

        await awardsRepositories.save(tag)

        return tag
    }
}

export { CreateAwardService }