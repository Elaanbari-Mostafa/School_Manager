import { authRouteName, levelRouteName, studentRouteName, subscriptionRouteName, timetableRouteName, trainingRouteName, userRouteName } from '../common/Constant.js';
import studentRoute from './StudentRoute.js';
import subscriptionRoute from './SubscriptionRoute.js';
import levelRoute from './LevelRoute.js';
import trainingRoute from './TrainingRoute.js';
import timetableRoute from './TimetablesRoute.js';
import authRoute from './AuthRoute.js';
import UserRoute from './UserRoute.js';

const apiEndPoints = '/api/';

export default (app) => {
    app.use(`${apiEndPoints}${studentRouteName}`, studentRoute);
    app.use(`${apiEndPoints}${subscriptionRouteName}`, subscriptionRoute);
    app.use(`${apiEndPoints}${levelRouteName}`, levelRoute);
    app.use(`${apiEndPoints}${trainingRouteName}`, trainingRoute);
    app.use(`${apiEndPoints}${timetableRouteName}`, timetableRoute);
    app.use(`${apiEndPoints}${authRouteName}`, authRoute)
    app.use(`${apiEndPoints}${userRouteName}`, UserRoute);
}