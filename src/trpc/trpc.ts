import { User } from "@/payload-types";
import { ExpressContext } from "@/server";
import { TRPCError, initTRPC } from "@trpc/server";
import { PayloadRequest } from "payload/types";

const t = initTRPC.context<ExpressContext>().create()
const middleware = t.middleware
const isAuth = middleware(async ({ctx, next}) => {
   // Check if user is authenticated
   const req = ctx.req as PayloadRequest
   const {user }= req as {
      user: User | null
   }
   if(!user || !user.id){
      throw new TRPCError({code: 'UNAUTHORIZED'})
   }
   return next({
      ctx: { user }
   })
})

export const router = t.router
//Esse public procedure serve para dizer que qualquer via conseguir acessar essa rota
export const publicProcedure = t.procedure
export const privateProcedure = t.procedure.use(isAuth)