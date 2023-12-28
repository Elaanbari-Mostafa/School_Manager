import express from 'express';
import { getAllSubscriptions, getSubscriptionById, createSubscription, deleteSubscriptionById, updateSubscriptionById } from '../controllers/SubscriptionController.js';

const router = express.Router();
router.route('/')
    .get(getAllSubscriptions)
    .post(createSubscription)
router.route('/:id')
    .get(getSubscriptionById)
    .delete(deleteSubscriptionById)
    .put(updateSubscriptionById)

export default router;