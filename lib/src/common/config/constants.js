"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWAGGER_OPTIONS = exports.MODULE_NAME = void 0;
exports.MODULE_NAME = {
    COMMON: "Common Module",
    HABIT: "Habit Module"
};
exports.SWAGGER_OPTIONS = {
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
    },
    apis: ["./lib/src/habit-manager/routes/*.js"],
};
