import express from 'express';
import { findsubscriptionbyfildsRouteName } from '../common/Constant.js';
import { getAllSubscriptions, getSubscriptionById, createSubscription, deleteSubscriptionById, updateSubscriptionById, findSubscriptionsByFields } from '../controllers/SubscriptionController.js';

const router = express.Router();
router.route('/')
    .get(getAllSubscriptions)
    .post(createSubscription)
router.route('/:id')
    .get(getSubscriptionById)
    .delete(deleteSubscriptionById)
    .put(updateSubscriptionById)
router.route(`/${findsubscriptionbyfildsRouteName}`)
    .post(findSubscriptionsByFields);

export default router;