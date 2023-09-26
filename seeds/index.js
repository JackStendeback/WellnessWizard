const sequelize = require('../config/connection');
const { Hydration, Calorie, Workout, Sleep, User } = require('../models'); 

const userData =require('./User-seeds.json');
const workoutData = require('./workout-seeds.json');
const sleepData = require('./sleep-seeds.json');
const calorieData = require('./calorie-seeds.json');
const hydrationData = require('./hydration-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const workout of workoutData) {
    await Workout.create({
      ...workout,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const sleep of sleepData) {
    await Sleep.create({
      ...sleep,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const calorie of calorieData) {
    await Calorie.create({
      ...calorie,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const hydration of hydrationData) {
    await Hydration.create({
      ...hydration,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();