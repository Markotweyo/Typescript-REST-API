"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const in_memory_daos_1 = require("../../users/daos/in.memory.daos");
class UsersService {
    constructor() {
        this.dao = in_memory_daos_1.GenericInMemoryDao.getInstance();
    }
    static getInstance() {
        if (!UsersService.instance) {
            UsersService.instance = new UsersService();
        }
        return UsersService.instance;
    }
    create(resource) {
        return this.dao.addUser(resource);
    }
    deleteById(resourceId) {
        return this.dao.removeUserById(resourceId);
    }
    list(limit, page) {
        return this.dao.getUsers();
    }
    patchById(resourceId) {
        return this.dao.patchUserById(resourceId);
    }
    readById(resourceId) {
        return this.dao.getUserById(resourceId);
    }
    updateById(resourceId) {
        return this.dao.putUserById(resourceId);
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0VBQWtFO0FBRWxFLE1BQWEsWUFBWTtJQUtyQjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUUsbUNBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXO1FBQ2QsSUFBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUM7WUFDdEIsWUFBWSxDQUFDLFFBQVEsR0FBRSxJQUFJLFlBQVksRUFBRSxDQUFDO1NBRTdDO1FBQ0QsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFBO0lBQ2hDLENBQUM7SUFDRCxNQUFNLENBQUMsUUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBZTtRQUN0QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUFDRCxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzlCLENBQUM7SUFDRCxTQUFTLENBQUMsVUFBZTtRQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFDRCxRQUFRLENBQUUsVUFBZTtRQUNyQixPQUFPLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFDRCxVQUFVLENBQUUsVUFBZTtRQUN2QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzNDLENBQUM7Q0FDSjtBQW5DRCxvQ0FtQ0MifQ==