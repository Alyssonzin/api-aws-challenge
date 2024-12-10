import { Router } from "express";
import * as Controller from '../controllers/transactionController';

const router = Router();

router.get('/', Controller.getTables);

router.post('/', Controller.criaTransactions);

export default router;