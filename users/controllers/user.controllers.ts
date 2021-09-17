import express from 'express'

export class UsersController {
    listUsers (req: express.Request, res: express.Response) {
        res.status(200).send(`List of users`)
    }

    getUserById (req: express.Request, res: express.Response) {
        res.status(200).send(`get to ${req.params.userId}`)
    }

    createUser (req: express.Request, res: express.Response) {
        res.status(200).send(`get to user ${req.params.userId}`)}

    
    patch (req: express.Request, res: express.Response) {
        res.status(200).send(`Patch to user ${req.params.userId}`)
    }
    put (req: express.Request, res: express.Response) {
        res.status(200).send(`Put to user ${req.params.userId}`)
    }

    remove (req: express.Request, res: express.Response) {
        res.status(200).send(`Delete to user ${req.params.userId}`)
    }

}