const express = require('express');
const Topic = require('../../models/Topic')

const router = express.Router();

router.post('/', async (req, res) => {

  const { title, speaker, detail, room } = req.body;

  try {
    let topic = await Topic.findOne({ room });
    if (topic) {
      return res.status(400).json({ errors: [{ msg: 'room already exists' }] });
    }
    
    topic = new Topic({ 
        title,
        speaker,
        detail,
        room
    });

    await topic.save();

    res.status(200).send('success');

  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
    try {
      const topic = await Topic.findById(req.params.id).select('-id');
      res.json(topic);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});


module.exports = router;



