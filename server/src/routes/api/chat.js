const express = require('express');
const { body, validationResult } = require('express-validator')
const Topic = require('../../models/Topic')
const Chat = require('../../models/Chat')
const { createChatMessage } = require('../../service/chat-service');

const router = express.Router();

const zlib = require('zlib');

router.post('/:room',  
[
  body('sender').notEmpty().isString(),
  body('message').notEmpty().isString()
],
 async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { sender, message} = req.body;
  const room = req.params.room;

  try {
    const chatMessage = await createChatMessage(Topic, Chat, room, sender, message);
    return res.status(200).json({ message: 'Chat message sent successfully', chatMessage });

  } catch (err) {
    console.error(err);

      if (err.name === 'ValidationError') {
        return res.status(400).json({ errors: err.errors });
      }

      return res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const chatId = await Topic.findById(req.params.id).select('chat');
    const chatTest = chatId.chat
    const chatPromises = chatTest.map(chat => Chat.findById(chat));
    const chats = await Promise.all(chatPromises);
    const jsonStr = JSON.stringify(chats);
    zlib.gzip(jsonStr, (err, buffer) => {
      if (!err) {
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Content-Encoding': 'gzip'
        });
        res.end(buffer);
      } else {
        console.error(err);
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;