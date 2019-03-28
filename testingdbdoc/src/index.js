
const { app } = require('./app');
require('./helpers/connectDatabase');

app.listen(3000, () => console.log('server start'));