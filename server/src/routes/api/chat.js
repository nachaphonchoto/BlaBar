const express = require('express');
const { body, validationResult } = require('express-validator')
const Topic = require('../../models/Topic')
const Chat = require('../../models/Chat')
const auth = require("../../middleware/auth");
const User = require('../../models/User');


const router = express.Router();


router.post('/:id', auth ,  
[
  body('message').notEmpty().isString(),
],
 async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {  message } = req.body;
  
  try {
    const topic = await Topic.findById(req.params.id);
    const user = await User.findById(req.user.id).select('name');
    const chat = new Chat({
      message: message,
      user: user.name
    });
    await chat.save();
    topic.chat.push(chat);
    await topic.save();

    return res.status(200).json({ message: 'Chat message sent successfully', chat });

  } catch (err) {
    console.error(err);

    return res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const chatId = await Topic.findById(req.params.id).select('chat');
    const chatTest = chatId.chat
    const chatPromises = chatTest.map(chat => Chat.findById(chat).select('-_id'))
    const chats = await Promise.all(chatPromises);
    res.json(chats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;