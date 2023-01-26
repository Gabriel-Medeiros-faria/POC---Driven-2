
import { QueryResult } from "pg";
import prisma from "../database/db.js";
import {  missionEntity } from "../protocols/mission.protocol.js";


export async function findAllRep():  Promise<QueryResult<missionEntity>> {
    return prisma.mission.findMany({
    })
}