import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";
import { CreateRewardService } from "../services/CreateRewardService";


class CreateRewardController {
    async handle(request: Request, response: Response) {
        const { award_id } = request.body
        const { user_id } = request

        const createRewardService = new CreateRewardService()

        const reward = await createRewardService.execute({
            award_id,
            user_receiver: user_id
        })

        return response.json(reward)
    }
}

export { CreateRewardController }