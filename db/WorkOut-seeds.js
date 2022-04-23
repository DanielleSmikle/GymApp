const WorkOut = require('../models/WorkOut-model');
const seedData = require('./WorkOut-seeds.json')


console.log(seedData)



WorkOut.deleteMany({})
.then(()=> {
        return WorkOut.insertMany(seedData);
    })
    .then((res) => console.log(res))
    .finally(() => process.exit());
