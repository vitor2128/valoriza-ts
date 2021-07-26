import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";



class CreateTagController {
    async handle(request: Request, response: Response) {
        const { name, value } = request.body
        const createTagService = new CreateTagService()

        const tag = await createTagService.execute({name, value})

        return response.json(tag)
    }
}

export { CreateTagController }