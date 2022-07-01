const express = require('express');
const router = express.Router();
const mlsController = require('../../controllers/mls.controller');

router.get('/', mlsController.getMlsObject);

/**
 * @swagger
 * tags:
 *   name: MLS
 *   description: Actions with forms
 */

/**
 * @swagger
 * /mls:
 *   get:
 *     summary: Get Mls data by number
 *     tags: [MLS]
 *     parameters:
 *       - in: query
 *         name: mlsNumber
 *         schema:
 *           type: string
 *         description: mlsNumber
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 */


module.exports = router;
