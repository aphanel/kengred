import { createRouter } from "./context";
import { z } from "zod";

export const goodRouter = createRouter()
  .query("getById", {
    input: z
      .object({
        id: z.string(),
      }),
    async resolve({ input, ctx }) {
      return ctx.prisma.good.findFirst({where: { id: input.id}})
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.good.findMany();
    },
  })
  .mutation('createOneGood', {
    input: z.object({
      userId: z.string(),
      name: z.string(),
      available: z.boolean(),
      lentTo: z.string().optional(),
      image: z.string().optional(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.good.create({
        data: {
          ...input,
        },
      })
    }})
  .mutation('updateOneGood', {
    input: z.object({
      id: z.string(),
      name: z.string().optional(),
      available: z.boolean().optional(),
      lentTo: z.string().optional(),
      image: z.string().optional(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.good.update({where: { id: input.id},
        data: {
          ...input,
        },
      })
    }})
  .mutation("deleteOneGood", {
    input: z
      .object({
        id: z.string(),
      }),
      async resolve({ input, ctx }) {
      return ctx.prisma.good.delete({where: { id: input.id}})
    },
  });