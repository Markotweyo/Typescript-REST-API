import express from 'express'
import {CommonRoutesConfig, configureRoutes} from '../common/common.routes.config'
import {UsersController} from '../users/controllers/user.controllers'

export class UserRoutes extends CommonRoutesConfig implements configureRoutes {
    constructor(app: express.Application) {
        super(app, 'UserRoute');
        this.configureRoutes();
    }

    configureRoutes(){
        const usersController = new UsersController();
    this.app.get('/users', [usersController.listUsers]);

    
    this.app.get('/users/:userId', [usersController.getUserById])


    this.app.post('/users', [usersController.createUser])


    this.app.put('/users/:userId', [usersController.put])


    this.app.patch('/users/:userId', [usersController.patch])


    this.app.delete('/users/:userId', [usersController.remove])

    }    
}
