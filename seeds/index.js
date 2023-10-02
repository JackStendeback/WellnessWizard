const sequelize = require('../config/connection');
const { Hydration, Calorie, Workout, Sleep, User } = require('../models'); 

const userData =require('./User-seeds.json');
const workoutData = require('./Workout-seeds.json');
const sleepData = require('./Sleep-seeds.json');
const calorieData = require('./Calorie-seeds.json');
const hydrationData = require('./Hydration-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const workout of workoutData) {
    await Workout.create({
      ...workout,
    });
  }

  for (const sleep of sleepData) {
    await Sleep.create({
      ...sleep,
    });
  }

  for (const calorie of calorieData) {
    await Calorie.create({
      ...calorie,
    });
  }

  for (const hydration of hydrationData) {
    await Hydration.create({
      ...hydration,
    });
  }

  process.exit(0);
};

seedDatabase();