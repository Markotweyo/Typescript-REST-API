"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericInMemoryDao = void 0;
class GenericInMemoryDao {
    constructor() {
        this.users = [];
        console.log('Created new instance of GenericInMemoryDao');
    }
    static getInstance() {
        if (!GenericInMemoryDao.instance) {
            GenericInMemoryDao.instance = new GenericInMemoryDao();
        }
        return GenericInMemoryDao.instance;
    }
    addUser(user) {
        return this.users.push(user);
    }
    getUsers() {
        return this.users;
    }
    getUserById(userId) {
        return this.users.find((user) => user.id === userId);
    }
    putUserById(user) {
        const objIndex = this.users.findIndex((obj) => obj.id === user.id);
        const updatedUsers = [
            ...this.users.slice(0, objIndex),
            user,
            ...this.users.slice(objIndex + 1),
        ];
        this.users = updatedUsers;
        return `${user.id} updated via put`;
    }
    patchUserById(user) {
        const objIndex = this.users.findIndex((obj) => obj.id === user.id);
        let currentUser = this.users[objIndex];
        for (let i in user) {
            if (i !== 'id') {
                currentUser[i] = user[i];
            }
        }
        this.users = [
            ...this.users.slice(0, objIndex),
            currentUser,
            ...this.users.slice(objIndex + 1),
        ];
        return `${user.id} patched`;
    }
    removeUserById(userId) {
        const objIndex = this.users.findIndex((obj) => obj.id === userId);
        this.users = this.users.splice(objIndex, 1);
        return `${userId} removed`;
    }
}
exports.GenericInMemoryDao = GenericInMemoryDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4ubWVtb3J5LmRhb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2Vycy9kYW9zL2luLm1lbW9yeS5kYW9zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsa0JBQWtCO0lBSS9CO1FBRkksVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUdaLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUwsTUFBTSxDQUFDLFdBQVc7UUFDVixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFO1lBQzlCLGtCQUFrQixDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDMUQ7UUFDRCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRUwsT0FBTyxDQUFDLElBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTCxRQUFRO1FBQ0EsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTCxXQUFXLENBQUMsTUFBYztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUwsV0FBVyxDQUFDLElBQVM7UUFDYixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sWUFBWSxHQUFHO1lBQ2pCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQztZQUNoQyxJQUFJO1lBQ0osR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsa0JBQWtCLENBQUM7SUFDeEMsQ0FBQztJQUVMLGFBQWEsQ0FBQyxJQUFTO1FBQ2YsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDWixXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO1lBQ2hDLFdBQVc7WUFDWCxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDcEMsQ0FBQztRQUNGLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUVMLGNBQWMsQ0FBQyxNQUFjO1FBQ3JCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUM7SUFDL0IsQ0FBQztDQUNKO0FBM0RELGdEQTJEQyJ9