import { QueryResult } from "pg";
import prisma from "../database/db.js";
import { Character, CharactersEntity } from "../protocols/naruto.protocol.js";

export async function findAllRep() : Promise<QueryResult<CharactersEntity>> {
    return prisma.character.findMany({
        select:{
            name: true,
            power: true,
            qtdTransformation: true,
            mission:{
                select:{
                    missionLocation: true
                }
            },
            village:{
                select:{
                    villageName: true
                }
            }
        }
    })
}

export async function createRep({name, power, qtdTransformation, missionId, villageId}: Character) : Promise<QueryResult<CharactersEntity>> {
   return prisma.character.create({
    data:{
        name,
        power,
        qtdTransformation,
        missionId,
        villageId
    }
   })
} 

export async function findByIdRep(id:number) : Promise<QueryResult<CharactersEntity>>  {
    return prisma.character.findUnique({
        where:{
            id: id
        }
    })
}

export async function updateRep({name, power, qtdTransformation, missionId, villageId}: Character, id:number) : Promise<QueryResult> {
    return prisma.character.upsert({
        where:{
            id: id
        },
        create:{
            name: name,
            power: power,
            qtdTransformation: qtdTransformation,
            missionId: missionId,
            villageId: villageId
        },
        update:{
            name: name,
            power: power,
            qtdTransformation: qtdTransformation,
            missionId: missionId,
            villageId: villageId
        }
    })
}

export async function deleteByIdRep(id:number) : Promise<QueryResult> {
    return prisma.character.delete({
        where:{
            id: id
        }
    })
}