import { PrismaClient } from '@prisma/client';

export async function POST(req: Request, res: Response) {
  const prisma = new PrismaClient();

  try {
    const body = await req.json();
    const { title, content } = await prisma.doc.create({
      data: body,
    });

    if (!title) {
      throw new Error("title can not be empty");
    }

    if (!content) {
      throw new Error("content can not be empty");
    }

    const data = {
      title,
      content,
    }

    return Response.json({ message: "success", data, code: 200 }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error instanceof Error ? error.message : 'Unknown error', code: 500, data: null }, { status: 500 });
  }
}