const express = require('express');
const router = express.Router();
const templatesController = require('../../controllers/templates.controller');
const authMiddleware = require('../../middlewares/auth-middleware');

router.get('/', authMiddleware(), templatesController.getTemplatesList);


/**
 * @swagger
 * tags:
 *   name: Templates
 *   description: Actions with templates
 */

/**
 * @swagger
 * /templates:
 *   get:
 *     summary: Get list of templates
 *     tags: [Templates]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: filters
 *         schema:
 *           type: string
 *         description: filter for templates
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
 *         description: Maximum number of templates
 *       - in: query
 *         name: isArchived
 *         schema:
 *           type: boolean
 *           default: false
 *         description: Display archived templates
 *       - in: query
 *         name: isDeleted
 *         schema:
 *           type: boolean
 *           default: false
 *         description: Display deleted templates
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
