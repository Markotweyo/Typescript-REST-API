import express from 'express'
import {UsersService} from '../../users/services/users.service'

export class UsersController {
    constructor() {
        
    }
    
    listUsers (req: express.Request, res: express.Response) {
        const usersService=UsersService.getInstance()
        const users = usersService.list(100, 0)
        res.status(200).send(users)
    }

    getUserById (req: express.Request, res: express.Response) {
        const usersService= UsersService.getInstance()
        const user= usersService.readById(req.params.userId)
        res.status(200).send(user)
    }

    createUser (req: express.Request, res: express.Response) {
        const usersService= UsersService.getInstance()
        const userId= usersService.create(req.body)
        res.status(201).send(userId)}

    
    patch (req: express.Request, res: express.Response) {
        const usersService= UsersService.getInstance()
        usersService.patchById(req.body)
        res.status(204).send(``)
    }
    put (req: express.Request, res: express.Response) {
        const usersService= UsersService.getInstance()
        usersService.updateById(req.body)
        res.status(204).send(``)
    }

    remove (req: express.Request, res: express.Response) {
        const usersService= UsersService.getInstance()
        usersService.deleteById(req.body)
        res.status(200).send(``)
    }

}