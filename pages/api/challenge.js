import { PrismaClient } from "@prisma/client"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const { 
    elapsedTime,
    score,
    exName,
    exCategory,
    ascDesc
  } = req.body 

  console.log("Hello from API")
  const session = await unstable_getServerSession(req, res, authOptions)

  console.log(`email: ${JSON.stringify(session.user)}, req.body: ${JSON.stringify(req.body)}`)
  const result = await prisma.completedExercise.create({
    data: {
/*       user: {
        connect: { email: session.user.email }
      },  */
      exName: exName,
      exCategory: exCategory,
      ascDesc: ascDesc,
      elapsedTime: elapsedTime, 
      date: String(new Date()),
      score: score,
      userEmail: session.user.email
    }
  })

  res.status(200).json(result)
}