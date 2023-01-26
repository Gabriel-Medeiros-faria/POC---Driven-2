import { QueryResult } from "pg";
import prisma from "../database/db.js";
import { village, villageEntity } from "../protocols/village.protocol.js";

export async function findAllRep() : Promise<QueryResult<villageEntity>> {
    return prisma.village.findMany()
 }
