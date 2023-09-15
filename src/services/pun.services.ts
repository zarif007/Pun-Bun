import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import IPun from "../types/pun";

const getPuns = async (db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
    return db.pun.findMany({})
}

const getPunsBySearchTerm = async (searchTerm: string, db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
    return db.pun.findMany({
        where: {
            pun: {
                contains: searchTerm,
            },
        },
    })
}

const getPunById = async (id: number, db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
    return db.pun.findUnique({
        where: {
            id,
        },
    })
}

const createPun = async (body: IPun, db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
    return db.pun.create({
        data: body,
    });
}

export const punServices = {
    getPuns,
    getPunsBySearchTerm,
    createPun,
    getPunById
}