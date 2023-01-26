import { Request, Response } from "express";
import { findAllRep } from "../repository/village.repository.js";

export async function getVillage(req: Request, res: Response){
    try{
        const villages = await findAllRep()
        res.send(villages)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}