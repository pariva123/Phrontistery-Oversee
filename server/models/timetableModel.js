var mongoose = require('mongoose');//schema
var timetableSchema = mongoose.Schema({
    timetable_name: { type: String},
    user_id: { type: String},
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }

});
// Export timetable Model
var timetable = module.exports = mongoose.model('timetable', timetableSchema);
module.exports.get = function (callback, limit) {
    timetable.find(callback).limit(limit);
}