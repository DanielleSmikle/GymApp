const mongoose = require('mongoose')

const connectionString = "mongodb+srv://test:test@cluster0.qctpu.mongodb.net/GymApp?retryWrites=true&w=majority"

mongoose.connect(connectionString).then(instance => console.log(`Connected to: ${instance.connections[0].name}`)
).catch(error => console.log(`failed conn:`, error))








// const mongoURI = 
//     process.env.NODE_ENV === 'production'
//     ? process.env.DB_URL
//     : "mongodb+srv://test:test@cluster0.qctpu.mongodb.net/GymApp?retryWrites=true&w=majority"

//     mongoose.connect(mongoURI)
        // .then(instance => console.log(`Connected to: ${instance.connections[0].name}`)
        // )
        // .catch(error => console.log(`failed conn:`, error))

    module.exports = mongoose;