
export const createSubscriptionWithAssociations = async (subscriptionData) => {
    const newSubscription = await Subscription.create(subscriptionData.subscription);

    // Set associations
    if (subscriptionData.subscription.levelId) await newSubscription.setLevel(subscriptionData.subscription.levelId);
    if (subscriptionData.subscription.studentId) await newSubscription.setStudent(subscriptionData.subscription.studentId);
    if (subscriptionData.subscription.trainingId) await newSubscription.setTraining(subscriptionData.subscription.trainingId);
    if (subscriptionData.subscription.timetableId) await newSubscription.setTimetable(subscriptionData.subscription.timetableId);

    return newSubscription;
}

export const updateSubscriptionWithAssociations = async (subscription, subscriptionData) => {
    try {
        const updatedSubscription = await subscription.update(subscriptionData.subscription);

        // Set associations
        if (subscriptionData.subscription.levelId) await updatedSubscription.setLevel(subscriptionData.subscription.levelId);
        if (subscriptionData.subscription.studentId) await updatedSubscription.setStudent(subscriptionData.subscription.studentId);
        if (subscriptionData.subscription.trainingId) await updatedSubscription.setTraining(subscriptionData.subscription.trainingId);
        if (subscriptionData.subscription.timetableId) await updatedSubscription.setTimetable(subscriptionData.subscription.timetableId);

        return updatedSubscription;
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

export const extractSubscriptionData = async (requestData) => {
    const {
        status,
        trainingPrice,
        dureePasser,
        duree,
        studentId,
        trainingId,
        timetableId,
        levelId,
    } = requestData;

    //const student = await Student.findByPk(studentId);
    //const level = await Level.findByPk(levelId);
    //const timetable = await Timetable.findByPk(timetableId);
    //const training = await Training.findByPk(trainingId)

    return {
        subscription: {
            status,
            trainingPrice,
            dureePasser,
            duree,
            studentId,
            trainingId,
            timetableId,
            levelId,
        },
        // student,
        // training,
        // timetable,
        // level,
    };
}
