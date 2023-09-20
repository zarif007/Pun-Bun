import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import IPun from "../types/pun";

const getPuns = async (db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
    return db.pun.findMany({take: 30})
}

const getPunsBySearchTerm = async (searchTerm: string, db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
    return db.pun.findMany({
        where: {
            pun: {
                contains: searchTerm,
            },
        },
        take: 20,
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

const upVotePun = async (id: number, db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
    const pun = await db.pun.update({
        where: {
            id,
        },
        data: {
            upVote: {
                increment: 1,
            },
        },
    });
    return pun.upVote
}

const downVotePun = async (id: number, db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
    const pun = await db.pun.update({
        where: {
            id,
        },
        data: {
            downVote: {
                increment: 1,
            },
        },
    });
    return pun.downVote
}

export const punServices = {
    getPuns,
    getPunsBySearchTerm,
    createPun,
    getPunById,
    upVotePun,
    downVotePun
}