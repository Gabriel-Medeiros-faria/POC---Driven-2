import { Request, Response } from "express";
import { createRep, findAllRep, findByIdRep, deleteByIdRep, updateRep } from "../repository/naruto.repository.js";
import { narutoSchema } from "../schemas/naruto.schema.js";
import { Character } from "../protocols/naruto.protocol.js";

export async function create(req: Request, res: Response) {

    const character = req.body as Character
    const {error} = narutoSchema.validate(character)
    if(error){
        return res.status(400).send(error)
    }

    try{
        await createRep(character)

        res.sendStatus(201)
    }catch(err){
        res.status(500).send(err)
        console.log(err)
    }
}

export async function findAll(req: Request, res: Response) {
    try{
        const item = await findAllRep()
        res.send(item)
    }catch(err){
        res.status(500).send(err)
        console.log(err)
    }
}

export async function findById(req: Request, res: Response) {
    const {id} = req.params

    try{
        const rows = await findByIdRep(Number(id))
        if(!rows){
            return res.send('id not exist')
        }
        res.send(rows)
    }catch(err){
        res.status(500).send(err)
        console.log(err)
    }
}

export async function update(req: Request, res: Response) {
    const character = req.body as Character
    const {id} = req.params

    try{
        await updateRep(character, Number(id))
        res.sendStatus(200)
    }catch(err){
        res.status(500).send(err)
        console.log(err)
    }
}

export async function deleteById(req: Request, res: Response) {
    const {id} = req.params

    try{
        await deleteByIdRep(Number(id))
        res.sendStatus(200)
    }catch(err){
        res.status(500).send(err)
        console.log(err)
    }
}