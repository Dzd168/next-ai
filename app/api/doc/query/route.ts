import { PrismaClient } from '@prisma/client';

export async function GET(req: Request, res: Response) {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.doc.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 1,
      skip: 0,
    });

    return Response.json({ message: "success", data, code: 200 }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error instanceof Error ? error.message : 'Unknown error', code: 500, data: null }, { status: 500 });
  }
}