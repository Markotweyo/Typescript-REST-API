"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const users_routes_config_1 = require("../users/users.routes.config");
const app = (0, express_1.default)();
const server = http.createServer(app);
const port = 3000;
const routes = [];
routes.push(new users_routes_config_1.UserRoutes(app));
app.get('/', (req, res) => {
    res.status(200).send(`Server running at port ${port}`);
});
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    routes.forEach((route) => {
        console.log(`Routes configured for ${route.getName}`);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXBwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBNkI7QUFDN0IsMkNBQTRCO0FBRzVCLHNFQUF1RDtBQUV2RCxNQUFNLEdBQUcsR0FBdUIsSUFBQSxpQkFBTyxHQUFHLENBQUE7QUFDMUMsTUFBTSxNQUFNLEdBQWUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNqRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUE7QUFDakIsTUFBTSxNQUFNLEdBQU8sRUFBRSxDQUFBO0FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxnQ0FBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFHaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLEVBQUU7SUFDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLElBQUksRUFBRSxDQUFDLENBQUE7QUFDMUQsQ0FBQyxDQUFDLENBQUE7QUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFFLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBeUIsRUFBQyxFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ3pELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==