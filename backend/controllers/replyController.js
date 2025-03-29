const Task = require('../models/Reply');
const getReplies = async (
    req,
    res) => {
    try {
        const tasks = await Reply.find({ userId: req.user.id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addReply = async (
    req,
    res) => {
    const { content, date } = req.body;
    try {
        const reply = await Reply.create({ userId: req.user.id });
        res.status(201).json(reply);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const deleteReply = async (
    req,
    res) => {
    try {
        const reply = await Reply.findById(req.params.id);
        if (!reply) return res.status(404).json({ message: 'Task not found' });
        await reply.remove();
        res.json({ message: 'Reply deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { getReplies, addReply, deleteReply };