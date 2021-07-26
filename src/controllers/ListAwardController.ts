import { Request, Response } from "express";
import { ListAwardService } from "../services/ListAwardService";


class ListAwardController {
    async handle(request: Request, response: Response) {
        const listAwardsService = new ListAwardService()

        const awards = await listAwardsService.execute()

        return response.json(awards)
    }
}

export { ListAwardController }