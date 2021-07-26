import { getCustomRepository } from "typeorm"
import { AwardsRepositories } from "../repositories/AwardsRepositories"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { RewardsRepositories } from "../repositories/RewardsRepositories"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"


interface ICreateReward{
    award_id: string
    user_receiver: string
}

class CreateRewardService {

    user_receiver: string
    async execute({award_id, user_receiver }: ICreateReward) {
        const usersRepository = getCustomRepository(UsersRepositories)
        const awardRepository = getCustomRepository(AwardsRepositories)
        const rewardRepository = getCustomRepository(RewardsRepositories)

        const userReceiver = await usersRepository.findOne(user_receiver)
        const award = await awardRepository.findOne(award_id)

        const resultValue = userReceiver.value >= award.value

        if(!resultValue) {
            throw new Error("Incorret value")
        }
        
        const newValueUser = userReceiver.value - award.value


        const reward = rewardRepository.create({
            award_id,
            user_receiver,
        })

        await rewardRepository.save(reward)

        await usersRepository.update(user_receiver, {value: newValueUser})

        return reward
    }

}

export { CreateRewardService }