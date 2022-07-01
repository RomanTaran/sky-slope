const express = require('express');
const router = express.Router();
const contactsController = require('../../controllers/contacts.controller');
const authMiddleware = require('../../middlewares/auth-middleware');
const validate = require('../../middlewares/validate');
const contactsValidation = require('../../validations/contacts.validation');

router.get('/id', authMiddleware(), contactsController.getContacts);
router.post('/', authMiddleware(), validate(contactsValidation.addContacts), contactsController.addContacts)


/**
 * @swagger
 * tags:
 *   name: Forms
 *   description: Actions with forms
 */

/**
 * @swagger
 * /contacts/id:
 *   get:
 *     summary: Get list of contacts
 *     tags: [Contacts]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: transaction id
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

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Add contacts to list
 *     tags: [Contacts]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Contacts'
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
