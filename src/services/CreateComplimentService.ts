import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"


interface ICreateRequest {
    tag_id: string
    user_sender: string
    user_receiver: string
    message: string

}

class CreateComplimentService {

    user_receiver: string
    async execute({tag_id, user_sender, user_receiver, message, }: ICreateRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const usersRepository = getCustomRepository(UsersRepositories)

        const tagRepository = getCustomRepository(TagsRepositories)

        if(user_sender === user_receiver) {
            throw new Error("Incorret User Receiver")
        }

        const userReceiverExists = await usersRepository.findOne(user_receiver)

        if(!userReceiverExists) {
            throw new Error("User Receiver does not exists!")
        }

       const userValue = userReceiverExists.value

        const { value } = await tagRepository.findOne({
            id: tag_id
        })

        const newValueUser = userValue+value

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepositories.save(compliment)

        await usersRepository.update(user_receiver, {value: newValueUser})

        return compliment
    }

}

export { CreateComplimentService }