"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const body_parser_1 = __importDefault(require("body-parser"));
const habit_routes_1 = require("./habit-manager/routes/habit.routes");
const mongo_db_1 = require("../src/common/utils/mongo-db");
dotenv_1.default.config();
const specs = (0, swagger_jsdoc_1.default)({
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Hibo : Habit Manager",
            version: "0.1.0",
            description: "This is an habit managment CRUD REST API's application made with Express and documented with Swagger",
            contact: {
                name: "Hibo: Habit Manager",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
        // components: {
        //   schemas: {
        //     Test: {
        //       type: "object",
        //       properties: {
        //         title: { type: "string" },
        //         author: { type: "string" },
        //       },
        //     },
        //   },
        // },
    },
    apis: ["./lib/src/habit-manager/routes/*.js"],
});
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use("/", habit_routes_1.router);
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
app.listen(process.env.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`[Node.js] Server started at PORT ${process.env.PORT} `);
    yield (0, mongo_db_1.connectToMongo)();
}));
