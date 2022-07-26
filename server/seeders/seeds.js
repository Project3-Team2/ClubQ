// const faker = require('faker');
const ManagerSeeds = require("./managerSeed.json");
const CustomerSeeds = require("./customerSeed.json");
const QueueSeeds = require("./queueSeed.json");
const db = require("../config/connection");
const { Manager, Customer, Queue } = require("../models");

db.once("open", async () => {
  try {
    await Manager.deleteMany({});
    await Manager.create(ManagerSeeds);
    await Customer.deleteMany({});
    await Queue.deleteMany({});
    await Queue.create(QueueSeeds);
    for (let i = 0; i < CustomerSeeds.length; i++) {
      console.log(CustomerSeeds[i].queue);
      const { _id } = await Customer.create(CustomerSeeds[i]);
      const queue = await Queue.findOneAndUpdate(
        { queueId: CustomerSeeds[i].queue },
        {
          $addToSet: {
            customers: _id
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
