"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const test_controller_1 = require("../controllers/test.controller");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * @swagger
 * /test:
 *   get:
 *     summary: Example Summary
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: The ID of the resource
 *                 message:
 *                   type: string
 *                   description: The name of the resource
 *               required:
 *                 - statusCode
 *                 - message
 *       500:
 *         description: Some server error
 */
router.get("/test", test_controller_1.testControllerFunction);
/**
 * @swagger
 * /test:
 *   post:
 *     summary: Example Summary
 *     tags: [Test]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The ID of the resource
 *               name:
 *                 type: string
 *                 description: The name of the resource
 *             required:
 *               - name
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
 *                   example: "Success true"
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID of the resource
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: Name of the resource
 *                         example: "string"
 *       500:
 *         description: Some server error
 */
router.post("/test", test_controller_1.testControllerFunction);
/**
 * @swagger
 * /test/:id:
 *   patch:
 *     summary: Example Summary
 *     tags: [Test]
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
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: The ID of the resource
 *                 message:
 *                   type: string
 *                   description: The name of the resource
 *               required:
 *                 - statusCode
 *                 - message
 *       500:
 *         description: Some server error
 */
router.patch("/test/:id", test_controller_1.testControllerFunction);
/**
 * @swagger
 * /test/:id:
 *   delete:
 *     summary: Example Summary
 *     tags: [Test]
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
 *               $ref: '#/components/schemas/Test'
 *       500:
 *         description: Some server error
 */
router.delete("/test/:id", test_controller_1.testControllerFunction);
