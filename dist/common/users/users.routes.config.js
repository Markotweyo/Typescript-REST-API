"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const common_routes_config_1 = require("../common.routes.config");
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoute');
        this.configureRoutes();
    }
    configureRoutes() {
        this.app.get('/users', (req, res) => {
            res.status(200).send(`List of users`);
            this.app.get('/users/:userId', (req, res) => {
                res.status(200).send(`get to ${req.params.userId}`);
            });
            this.app.post('/users', (req, res) => {
                res.status(200).send(`Post to users`);
            });
            this.app.put('/users/:userId', (req, res) => {
                res.status(200).send(`Put to ${req.params.userId}`);
            });
            this.app.patch('/users/:userId'(req, express_1.default.Request, res, express_1.default.Respnse), {
                res, : .status(200).send(`Patch to ${req.params.userId}`)
            });
            this.app.delete('/users/:userId'(req, express_1.default.Request, res, express_1.default.Respnse), {
                res, : .status(200).send(`Delete  to ${req.params.userId}`)
            });
        });
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21tb24vdXNlcnMvdXNlcnMucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBNkI7QUFDN0Isa0VBQTJFO0FBRTNFLE1BQWEsVUFBVyxTQUFRLHlDQUFrQjtJQUM5QyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFvQixFQUFDLEVBQUU7WUFDakUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQW9CLEVBQUMsRUFBRTtnQkFDekUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFFeEQsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQW9CLEVBQUMsRUFBRTtnQkFDbEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFMUMsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBb0IsRUFBQyxFQUFFO2dCQUN6RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUV4RCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLEdBQUcsRUFBRSxpQkFBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsaUJBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUUsR0FBRyxFQUFBLEVBQUEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUV4RCxDQUFDLENBQUE7WUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBRSxHQUFHLEVBQUUsaUJBQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLGlCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzNFLEdBQUcsRUFBQSxFQUFBLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7YUFFMUQsQ0FBQyxDQUFBO1FBRU4sQ0FBQyxDQUFBLENBQUE7SUFFRCxDQUFDO0NBQUE7QUFwQ0QsZ0NBb0NDIn0=