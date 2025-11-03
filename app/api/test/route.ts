import { PrismaClient } from '@prisma/client';

export async function GET(req: Request, res: Response) {
  const prisma = new PrismaClient();
  const data = await prisma.doc.findMany();
  // const data = await prisma.doc.create({
  //   data: {
  //     title: 'test',
  //     content: 'test',
  //   },
  // });
  return Response.json({ message: "success", data }, { status: 200 });
}