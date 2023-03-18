const express = require('express');
const auth = require("../../middleware/auth");
const Topic = require('../../models/Topic')
const Chat = require('../../models/Chat')
const User = require('../../models/User');

const router = express.Router();


router.post('/', auth , async (req, res) => {

  try {
    const user = await User.findById(req.user.id).select("topics");
    const { title, detail } = req.body;
    const topic = new Topic({ 
        title: title,
        userId: req.user.id,
        detail: detail,
    });
    await topic.save();
    user.topics.push(topic);
    await user.save();

    res.status(200).send({ message: "Topic created successfully" });

  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
    try {
      const topic = await Topic.findById(req.params.id);
      const user = await User.findById(topic.userId._id).select(["name", "avatar"]);
      const data = {
        title: topic.title,
        name: user.name,
        avatar: user.avatar,
        detail: topic.detail,
        date: topic.date,
        chat: topic.chat
      }
      res.json(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});


router.get('/', async (req, res) => {
  try {
    const topic = await Topic.find().select(["title", "detail", "date"]);
    res.json(topic)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user.topics.includes(req.params.id)) {
      return res.status(404).json({ msg: 'Topic not found' });
    }

    user.topics.pull(req.params.id);
    await user.save();

    const topic = await Topic.findById(req.params.id);
    const chatPromises = topic.chat.map(chatId => {
      return Chat.findByIdAndDelete(chatId);
    });
    await Promise.all(chatPromises);
    await Topic.findByIdAndDelete(req.params.id);
    
    res.status(200).json({ msg: 'Topic deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const topic = await Topic.findByIdAndUpdate(req.params.id, {title: req.body.title, detail: req.body.detail});
    res.status(200).send("success");
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;



