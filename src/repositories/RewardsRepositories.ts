import { EntityRepository, Repository } from 'typeorm'
import { Rewards } from '../entities/Rewards'


@EntityRepository(Rewards)
class RewardsRepositories extends Repository<Rewards>{

}

export { RewardsRepositories }