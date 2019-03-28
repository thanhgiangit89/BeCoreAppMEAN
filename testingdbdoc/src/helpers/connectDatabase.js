
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

function getDatabaseUri() {
    if (process.env.NODE_ENV === 'test')
        return "mongodb://localhost/becoreapp-test";

    return "mongodb://localhost/becoreapp";
}

mongoose.connect(getDatabaseUri(), { useMongoClient: true })
    .catch(() => process.exit(1));