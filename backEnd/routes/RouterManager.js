import { studentTableName, subscriptionTableName } from '../common/Constant.js';
import studentRoute from './StudentRoute.js';
import subscriptionRoute from './SubscriptionRoute.js';

export default (app) => {
    app.use(`/api/${studentTableName}`, studentRoute);
    app.use(`/api/${subscriptionTableName}`, subscriptionRoute);
}