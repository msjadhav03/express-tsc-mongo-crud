export const MODULE_NAME = {
    COMMON: "Common Module",
    HABIT : "Habit Module"
}

export const SWAGGER_OPTIONS = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Hibo : Habit Manager",
      version: "0.1.0",
      description:
        "This is an habit managment CRUD REST API's application made with Express and documented with Swagger",

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
}