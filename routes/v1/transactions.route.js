const express = require('express');
const router = express.Router();
const transactionsController = require('../../controllers/transaction.controller');
const authMiddleware = require('../../middlewares/auth-middleware');

router.get('/', authMiddleware(), transactionsController.getTransactionsList);
router.get('/:id', authMiddleware(), transactionsController.getTransaction);

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Actions with transactions
 */

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Get list of transactions
 *     tags: [Transactions]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: filters
 *         schema:
 *           type: string
 *         description: |
 *           ### Filter for transactions
 *
 *           Filter by type:
 *           RepresentationType==Buyer|Seller|Landlord|Tenant (or 1-2 of them)
 *
 *           Filter by string in search line:
 *           (Name|Address|ContactInfo)@=*cadet
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
 *         description: Maximum number of transactions
 *       - in: query
 *         name: isArchived
 *         schema:
 *           type: boolean
 *           default: false
 *         description: Display archived transactions
 *       - in: query
 *         name: isDeleted
 *         schema:
 *           type: boolean
 *           default: false
 *         description: Display deleted transactions
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           default: 'File'
 *         description: Types of transactions
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
 * /transactions/{id}:
 *   get:
 *     summary: Get transaction by id
 *     tags: [Transactions]
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
 *             schema:
 *                type: object
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */

module.exports = router;
