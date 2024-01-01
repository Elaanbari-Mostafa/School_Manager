import Level from './Level.js';
import Subscription from './Subscription.js';
import Timetable from './Timetable.js';
import Training from './Training.js';
import Student from './Student.js';
import UserRole from './UserRole.js';
import User from './User.js';
import Role from './Role.js';
import UserType from './UserType.js';

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
    User.hasMany(UserRole);
    Role.hasMany(UserRole);
    UserRole.belongsTo(User); 
    UserRole.belongsTo(Role);
    User.belongsTo(UserType);
    UserType.hasOne(User);
}