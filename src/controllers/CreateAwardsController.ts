import { Request, Response } from "express";
import { CreateAwardService } from "../services/CreateAwardService";

class CreateAwardsController {
    async handle(request: Request, response: Response) {
        const { name, value } = request.body
        const createAwardService = new CreateAwardService()

        const tag = await createAwardService.execute({name, value})

        return response.json(tag)
    }
}

export { CreateAwardsController }