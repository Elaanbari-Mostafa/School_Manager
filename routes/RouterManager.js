import studentRoute from './StudentRoute.js';

export default (app) => {
    app.use('/api/students', studentRoute);
}