/**
 * @swagger
 * components:
 *   schemas:
 *     Stations:
 *       type: object
 *       required:
 *         - name
 *         - apparent_t
 *         - lat
 *         - long
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the station
 *         apparent_t:
 *           type: number
 *           description: local temperature
 *         lat:
 *           type: number
 *           description: Latitude
 *         long:
 *           type: number
 *           description: Longitude

 *     
 */
/**
 * @swagger
 * tags:
 *   name: Stations
 *   description: The stations managing API
 * /:
 *   get:
 *     summary: Lists all the stations
 *     tags: [Stations]
 *     responses:
 *       200:
 *         description: The list of the stations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Stations'
 *       503:
 *          description: Error Connecting to BOM
 */

import { Router } from "express";

import getStations from "../controllers/stations-controller.js";

const router = Router();

router.get("/", getStations);

export default router;
