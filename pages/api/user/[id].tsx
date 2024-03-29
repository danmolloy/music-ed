import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  
  const data = await prisma.user.findUnique({
    where: {
      id: req.query.id
    },
    include: {
      completedExercises: true
    }
  })

  res.status(200).json({ data: data })
}
