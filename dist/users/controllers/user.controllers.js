"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_service_1 = require("../../users/services/users.service");
class UsersController {
    constructor() {
    }
    listUsers(req, res) {
        const usersService = users_service_1.UsersService.getInstance();
        const users = usersService.list(100, 0);
        res.status(200).send(users);
    }
    getUserById(req, res) {
        const usersService = users_service_1.UsersService.getInstance();
        const user = usersService.readById(req.params.userId);
        res.status(200).send(user);
    }
    createUser(req, res) {
        const usersService = users_service_1.UsersService.getInstance();
        const userId = usersService.create(req.body);
        res.status(201).send(userId);
    }
    patch(req, res) {
        const usersService = users_service_1.UsersService.getInstance();
        usersService.patchById(req.body);
        res.status(204).send(``);
    }
    put(req, res) {
        const usersService = users_service_1.UsersService.getInstance();
        usersService.updateById(req.body);
        res.status(204).send(``);
    }
    remove(req, res) {
        const usersService = users_service_1.UsersService.getInstance();
        usersService.deleteById(req.body);
        res.status(200).send(``);
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL2NvbnRyb2xsZXJzL3VzZXIuY29udHJvbGxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esc0VBQStEO0FBRS9ELE1BQWEsZUFBZTtJQUN4QjtJQUVBLENBQUM7SUFFRCxTQUFTLENBQUUsR0FBb0IsRUFBRSxHQUFxQjtRQUNsRCxNQUFNLFlBQVksR0FBQyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdDLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCxXQUFXLENBQUUsR0FBb0IsRUFBRSxHQUFxQjtRQUNwRCxNQUFNLFlBQVksR0FBRSw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzlDLE1BQU0sSUFBSSxHQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRUQsVUFBVSxDQUFFLEdBQW9CLEVBQUUsR0FBcUI7UUFDbkQsTUFBTSxZQUFZLEdBQUUsNEJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM5QyxNQUFNLE1BQU0sR0FBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUFBLENBQUM7SUFHakMsS0FBSyxDQUFFLEdBQW9CLEVBQUUsR0FBcUI7UUFDOUMsTUFBTSxZQUFZLEdBQUUsNEJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM5QyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBQ0QsR0FBRyxDQUFFLEdBQW9CLEVBQUUsR0FBcUI7UUFDNUMsTUFBTSxZQUFZLEdBQUUsNEJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM5QyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsTUFBTSxDQUFFLEdBQW9CLEVBQUUsR0FBcUI7UUFDL0MsTUFBTSxZQUFZLEdBQUUsNEJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM5QyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1QixDQUFDO0NBRUo7QUF4Q0QsMENBd0NDIn0=