import { PrismaClient } from "@prisma/client";
import Elysia from "elysia";

const dbSetup = (app: Elysia) => app.decorate("db", new PrismaClient())

export default dbSetup