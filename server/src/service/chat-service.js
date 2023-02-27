async function createChatMessage(topicModel, chatModel, room, sender, message) {
    let topic = await topicModel.findOne({ room });
  
    if (!topic) {
      topic = new topicModel({ room });
      await topic.save();
    }
  
    const chat = new chatModel({ sender, message });
    await chat.save();
    await topic.updateOne({ $push: { chat: chat } });
  
    return chat;
  }
  
  module.exports = { createChatMessage };