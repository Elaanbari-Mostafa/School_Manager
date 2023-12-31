import Subscription from "../modules/Subscription.js";
import Student from "../modules/Student.js";
import Level from "../modules/Level.js";
import Timetable from "../modules/Timetable.js";
import Training from "../modules/Training.js";
import { createSubscriptionWithAssociations, extractSubscriptionData, getSubscriptionsSearchByFildsData, updateSubscriptionWithAssociations } from "../services/SubscriptionService.js";

// Method Name: createSubscription
export const createSubscription = async (req, res) => {
    try {
        const subscriptionData = await extractSubscriptionData(req.body);
        const newSubscription = await createSubscriptionWithAssociations(subscriptionData);
        return res.status(200).json(newSubscription);;
    } catch (error) {
        console.log("Error creating subscription : " + error);
        res.status(500).send('Internal Server Error');
    }
};

/**
 * 
 * @param {*} req
 * @param {*} res 
 */
export const getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.findAll();
        return res.status(200).json(subscriptions);
    } catch (error) {
        res.status(500).send('Internal Server Error' + error);
    }
}

// Method Name: getSubscriptionById
export const getSubscriptionById = async (req, res) => {
    try {
        const { id } = req.params;
        const subscription = await Subscription.findByPk(id);
        return res.status(200).json(subscription);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

// Method Name: updateSubscriptionById
export const updateSubscriptionById = async (req, res) => {
    const subscriptionId = req.params.id;
    const updatedSubscriptionData = await extractSubscriptionData(req.body);

    try {
        // Find the subscription by ID
        const subscription = await Subscription.findByPk(subscriptionId);

        if (!subscription) {
            return res.status(404).json({ error: 'Subscription not found' });
        }

        // Update the subscription data and fetch data
        const updatedSubscription = await updateSubscriptionWithAssociations(subscription, updatedSubscriptionData)
        //await subscription.update(updatedSubscriptionData);

        res.json(updatedSubscription);
    } catch (error) {
        console.log('Error updating subscription:', error);
        res.status(500).send('Internal Server Error');
    }
}

// Method Name: deleteSubscriptionById
export const deleteSubscriptionById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await Subscription.destroy({
            where: { id },
        });
        if (deletedRows === 0) {
            return res.send('Subscription not found');
        }
        return res.send("Deletion successful"); // Deletion successful
    } catch (error) {
        //console.error('delete subscription:', error);
        return res.status(500).send('Internal Server Error' + error);
    }
}

export const findSubscriptionsByFields = async (req, res) => {
    try {
        const searchCriteria = getSubscriptionsSearchByFildsData(req.body);
        const subscriptions = await Subscription.findAll({
            where: searchCriteria,
        });

        return res.status(200).json(subscriptions);
    } catch (error) {
        console.log(`Error finding subscriptions by fields: ${error.message}`);
        res.status(500).send('Internal Server Error' + error)
    }
}