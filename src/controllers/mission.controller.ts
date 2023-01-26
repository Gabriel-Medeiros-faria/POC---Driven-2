import { Request, Response } from "express";
import { findAllRep } from "../repository/mission.repository.js";

export async function getMission(req: Request, res: Response){
    try{
        const mission = await findAllRep()
        res.send(mission)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}