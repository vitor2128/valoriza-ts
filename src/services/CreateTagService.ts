import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

interface ITagRequest {
    name?:string
    value?:number
}


class CreateTagService {

    async execute({name, value}: ITagRequest) {
        const tagsRepositories = getCustomRepository(TagsRepositories)

        if(!name) {
            throw new Error("Incorrect name")
        }

        if(!value) {
            throw new Error("Incorrect value")
        }

        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        })

        if(tagAlreadyExists) {
            throw new Error("Tag already exists")
        }

        const tag = tagsRepositories.create({
            name,
            value
        })

        await tagsRepositories.save(tag)

        return tag
    }
}

export { CreateTagService }