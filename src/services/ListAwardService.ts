import { getCustomRepository } from "typeorm"
import { AwardsRepositories } from "../repositories/AwardsRepositories"


class ListAwardService {
    async execute() {
        const awardsRepositories = getCustomRepository(AwardsRepositories)

        const awards = await awardsRepositories.find()

        return awards
    }
}

export { ListAwardService }