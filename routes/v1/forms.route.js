const express = require('express');
const router = express.Router();
const formsController = require('../../controllers/forms.controller');
const authMiddleware = require('../../middlewares/auth-middleware');

router.get('/', authMiddleware(), formsController.getFormsList);


/**
 * @swagger
 * tags:
 *   name: Forms
 *   description: Actions with forms
 */

/**
 * @swagger
 * /forms:
 *   get:
 *     summary: Get list of forms
 *     tags: [Forms]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: filters
 *         schema:
 *           type: string
 *         default: OptIns==31
 *         description: filter for forms
 *       - in: query
 *         name: sorts
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: page
 *         schema:
 *           type: string
 *           minimum: 1
 *         default: 1
 *         description: current page number
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: string
 *           minimum: 1
 *         default: 3
 *         description: Maximum number of forms
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */


module.exports = router;
