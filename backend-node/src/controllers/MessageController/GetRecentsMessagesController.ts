import { Request, Response } from "express";
import { GetMessagesService } from "../../services/MessageService/GetMessagesService";

export class GetRecentsMessagesController {
  async handle(req: Request, res: Response) {
    const service = new GetMessagesService();
    const result = await service.execute();
    return res.json(result);
  }
}
