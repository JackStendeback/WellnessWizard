const Hydration = require('./Hydration');
const Calorie = require('./Calorie')
const Sleep= require('./Sleep')
const Workout = require('./Workout')
const User = require('./User')

User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
    foreignKey: "user_id"
});

Sleep.belongsTo(User, {
    foreignKey: "user_id"
});

Hydration.belongsTo(User, {
    foreignKey: "user_id"
});

Calorie.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { Hydration, Calorie, Sleep, Workout, User  };