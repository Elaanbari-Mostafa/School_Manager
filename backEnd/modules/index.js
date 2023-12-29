import Level from './Level.js';
import Subscription from './Subscription.js';
import Timetable from './Timetable.js';
import Training from './Training.js';
import Student from './Student.js';
// import { subscriptionTableName } from '../common/Constant.js';

// Define association 
export const CreateRelations = () => {
    Level.hasOne(Subscription);
    Timetable.hasOne(Subscription);
    Training.hasOne(Subscription);
    Subscription.belongsTo(Level);
    Subscription.belongsTo(Timetable);
    Subscription.belongsTo(Training);
    Subscription.belongsTo(Student);//, { foreignKey: 'studentId' });
    Student.hasMany(Subscription);//, { as: subscriptionTableName, foreignKey: 'studentId' });
}