import { authRouteName, levelRouteName, studentRouteName, subscriptionRouteName, timetableRouteName, trainingRouteName } from '../common/Constant.js';
import studentRoute from './StudentRoute.js';
import subscriptionRoute from './SubscriptionRoute.js';
import levelRoute from './LevelRoute.js';
import trainingRoute from './TrainingRoute.js';
import timetableRoute from './TimetablesRoute.js';
import authRoute from './AuthRoute.js';

export default (app) => {
    app.use(`/api/${studentRouteName}`, studentRoute);
    app.use(`/api/${subscriptionRouteName}`, subscriptionRoute);
    app.use(`/api/${levelRouteName}`, levelRoute);
    app.use(`/api/${trainingRouteName}`, trainingRoute);
    app.use(`/api/${timetableRouteName}`, timetableRoute);
    app.use(`/api/${authRouteName}`,authRoute)
}