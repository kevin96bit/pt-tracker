import { PrismaClient } from "@prisma/client";

// creo un istanza di prisma client
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// utilizzo globalthis per salvare una singola istanza di prisma client
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
export const db = prisma;
