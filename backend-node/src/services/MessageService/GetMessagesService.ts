import { prismaClient } from "../../prisma";

export class GetMessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 5,
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: true,
      },
    });
    return messages;
  }
}
