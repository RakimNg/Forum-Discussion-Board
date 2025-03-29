
const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Reply', replySchema);

