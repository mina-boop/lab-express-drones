// Iteration #1
const mongoose = require("mongoose");

const Drone = require("../models/Drone.model");

const MONGO_URI = "mongodb://localhost:27017/lab-express-drones";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const drones = [
  {
    name: "MaxiSpeed",
    propellers: 6,
    maxSpeed: 30,
  },
  {
    name: "Silent-D",
    propellers: 3,
    maxSpeed: 18,
  },
  {
    name: "mini drone",
    propellers: 2,
    maxSpeed: 20,
  },
];

Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(`An error occured:${err}`));
