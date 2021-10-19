import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthController/AuthenticateUserController";
import { CreateMessageController } from "./controllers/MessageController/CreateMessageController";
import { GetRecentsMessagesController } from "./controllers/MessageController/GetRecentsMessagesController";
import { ProfileUserController } from "./controllers/UserController/ProfileUserController";
import { ensureAthenticated } from "./middleware/AuthMiddleware/ensureAthenticated";

export const router = Router();

router.get("/messages/recents", new GetRecentsMessagesController().handle);
router.get("/profile", ensureAthenticated, new ProfileUserController().handle);

router.post("/authenticate", new AuthenticateUserController().handle);
router.post(
  "/messages",
  ensureAthenticated,
  new CreateMessageController().handle
);
