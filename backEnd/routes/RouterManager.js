import { studentRouteName, subscriptionRouteName } from '../common/Constant.js';
import studentRoute from './StudentRoute.js';
import subscriptionRoute from './SubscriptionRoute.js';

export default (app) => {
    app.use(`/api/${studentRouteName}`, studentRoute);
    app.use(`/api/${subscriptionRouteName}`, subscriptionRoute);
}