const Hydration = require('./Hydration');
const Calorie = require('./Calorie')
const Sleep= require('./Sleep')
const Workout = require('./Workout')
const User = require('./User')

User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = { Hydration, Calorie, Sleep, Workout, User  };