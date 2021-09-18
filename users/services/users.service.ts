import {CRUD} from '../../common/interfaces/crud.interface'
import {GenericInMemoryDao} from '../../users/daos/in.memory.daos'

export class UsersService implements CRUD {
    private static instance: UsersService;
    dao: GenericInMemoryDao;
    

    constructor(){
        this.dao= GenericInMemoryDao.getInstance();
    }

    static getInstance() : UsersService {
        if(!UsersService.instance){
            UsersService.instance= new UsersService();

        }
        return UsersService.instance
    }
    create(resource: any){
        return this.dao.addUser(resource)
    }

    deleteById(resourceId: any){
        return this.dao.removeUserById(resourceId)
    }
    list(limit: number, page: number){
        return this.dao.getUsers()
    }
    patchById(resourceId: any){
        return this.dao.patchUserById(resourceId)
    }
    readById (resourceId: any){
        return this. dao.getUserById(resourceId)
    }
    updateById (resourceId: any){
        return this.dao.putUserById(resourceId)
    }
}