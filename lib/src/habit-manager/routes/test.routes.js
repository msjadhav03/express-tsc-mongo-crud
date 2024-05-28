"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const test_controller_1 = require("../controllers/test.controller");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * @swagger
 * /:
 *   get:
 *     summary: You can fetch all habits
 *     tags: [Habit]
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *            schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: integer
 *                   description: HTTP status code
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: "Success : Fetched all the habits"
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: strimh
 *                         description: Unique ID Number
 *                         example: 66192d32ab39677dd4cbe10f
 *                       title:
 *                         type: string
 *                         description: Title of the habit
 *                         example: Reading
 *                       days:
 *                         type: integer
 *                         description: Value of the day until the habit to follow
 *                         example: 21
 *                       status:
 *                         type: string
 *                         description: Status of habit completion
 *                         example: started
 *       500:
 *         description: A Error response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: integer
 *                   description: HTTP status code
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Error Response message
 *                   example: Failed to add new habit
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: Connection failed
 */
router.get("/", test_controller_1.testControllerFunction);
/**
 * @swagger
 * /:
 *   post:
 *     summary: You can add new habits
 *     tags: [Habit]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the habit
 *                 example: Reading
 *               days:
 *                 type: integer
 *                 description: Value of the day until the habit to follow
 *                 example: 21
 *               status:
 *                  type: string
 *                  description: Status of habit completion
 *                  example: started
 *             required:
 *               - title
 *               - days
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: integer
 *                   description: HTTP status code
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: "Success: New habit has been added"
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: strimh
 *                         description: Unique ID Number
 *                         example: 66192d32ab39677dd4cbe10f
 *                       title:
 *                         type: string
 *                         description: Title of the habit
 *                         example: Reading
 *                       days:
 *                         type: integer
 *                         description: Value of the day until the habit to follow
 *                         example: 21
 *                       status:
 *                         type: string
 *                         description: Status of habit completion
 *                         example: started
 *       500:
 *         description: A Error response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: integer
 *                   description: HTTP status code
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Error Response message
 *                   example: Failed to add new habit
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Error: Connection failed"
 */
router.post("/", test_controller_1.testControllerFunction);
/**
 * @swagger
 * /:id:
 *   patch:
 *     summary: You can update existing habit
 *     tags: [Habit]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Some ID
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: integer
 *                   description: HTTP status code
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: "Success: Updated existing habit"
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: strimh
 *                         description: Unique ID Number
 *                         example: 66192d32ab39677dd4cbe10f
 *                       title:
 *                         type: string
 *                         description: Title of the habit
 *                         example: Reading
 *                       days:
 *                         type: integer
 *                         description: Value of the day until the habit to follow
 *                         example: 21
 *                       status:
 *                         type: string
 *                         description: Status of habit completion
 *                         example: started
 *       500:
 *         description: A Error response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: integer
 *                   description: HTTP status code
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Error Response message
 *                   example: Failed to add new habit
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Error: Connection failed"
 */
router.patch("/:id", test_controller_1.testControllerFunction);
/**
 * @swagger
 * /:id:
 *   delete:
 *     summary: You can delete existing habit
 *     tags: [Habit]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Some ID
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: integer
 *                   description: HTTP status code
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: "Success: Deleted Existing habit"
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: strimh
 *                         description: Unique ID Number
 *                         example: 66192d32ab39677dd4cbe10f
 *                       title:
 *                         type: string
 *                         description: Title of the habit
 *                         example: Reading
 *                       days:
 *                         type: integer
 *                         description: Value of the day until the habit to follow
 *                         example: 21
 *                       status:
 *                         type: string
 *                         description: Status of habit completion
 *                         example: started
 *
 *       500:
 *         description: A Error response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: integer
 *                   description: HTTP status code
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Error Response message
 *                   example: Failed to add new habit
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Error: Connection failed"
 */
router.delete("/:id", test_controller_1.testControllerFunction);
