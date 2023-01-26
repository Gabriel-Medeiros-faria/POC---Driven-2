import { QueryResult } from "pg";
import prisma from "../database/db.js";
import { village, villageEntity } from "../protocols/village.protocol.js";

export async function findAllRep() : Promise<QueryResult<villageEntity>> {
    return prisma.village.findMany()
 }

export async function createRep(body) : Promise<QueryResult<villageEntity>> {
    return prisma.village.create({
        data: body
    })
} 
