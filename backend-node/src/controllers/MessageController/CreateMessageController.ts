import { Request, Response } from "express";
import { CreateMessageService } from "../../services/MessageService/CreateMessageService";

export class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body;
    const { user_id } = req;
    if (!message) {
      return res.status(401).json({ error: "invalid-message" });
    }
    const service = new CreateMessageService();

    const result = await service.execute(message, user_id);

    return res.json(result);
  }
}
