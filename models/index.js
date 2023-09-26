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

Workout.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Sleep.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Hydration.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
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