import { EntityRepository, Repository } from 'typeorm'
import { Awards } from '../entities/Awards'


@EntityRepository(Awards)
class AwardsRepositories extends Repository<Awards>{

}

export { AwardsRepositories }