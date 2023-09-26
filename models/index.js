const Hydration = require('./Hydration');
const Calorie = require('./Calorie')
const Sleep= require('./Sleep')
const Workout = require('./Workout')
const User = require('./User');
// const sequelize = require('sequelize');

User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Sleep, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Hydration, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Calorie, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
    foreignKey: 'user_id',
});

Sleep.belongsTo(User, {
    foreignKey: 'user_id',
});

Hydration.belongsTo(User, {
    foreignKey: 'user_id',
});

Calorie.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// sequelize.sync().then(() => {
//     console.log('Tables have been synced')
// })
// .catch((err) => {
//     console.log('error syncing database', err)
// });

module.exports = { Hydration, Calorie, Sleep, Workout, User  };