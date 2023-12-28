import Subscription from "../modules/Subscription.js";

// Method Name: createSubscription
export const createSubscription = async (subscriptionData) => {
    try {
        
        const subscription = await Subscription.create(subscriptionData);
        return subscription;
    } catch (error) {
        throw error;
    }
};

// Method Name: getAllSubscriptions
export const getAllSubscriptions = async () => {
    try {
        const subscriptions = await Subscription.findAll();
        return subscriptions;
    } catch (error) {
        throw error;
    }
};

// Method Name: getSubscriptionById
export const getSubscriptionById = async (id) => {
    try {
        const subscription = await Subscription.findByPk(id);
        return subscription;
    } catch (error) {
        throw error;
    }
};

// Method Name: updateSubscriptionById
export const updateSubscriptionById = async (id, updatedData) => {
    try {
        const [updatedRows] = await Subscription.update(updatedData, {
            where: { id },
        });
        if (updatedRows === 0) {
            throw new Error('Subscription not found');
        }
        const updatedSubscription = await Subscription.findByPk(id);
        return updatedSubscription;
    } catch (error) {
        throw error;
    }
};

// Method Name: deleteSubscriptionById
export const deleteSubscriptionById = async (id) => {
    try {
        const deletedRows = await Subscription.destroy({
            where: { id },
        });
        if (deletedRows === 0) {
            throw new Error('Subscription not found');
        }
        return true; // Deletion successful
    } catch (error) {
        throw error;
    }
};
