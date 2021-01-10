"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.olaTypescript = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function olaTypescript(request, response) {
    var user = CreateUser_1.default({
        name: 'Deyvison',
        email: 'deyvison@email.com',
        password: '1234567889',
        techs: [
            'Node.js',
            'React.js',
            { title: 'Javascript', experience: 100 },
        ]
    });
    console.log(user.email);
    return response.json({ user: user });
}
exports.olaTypescript = olaTypescript;
