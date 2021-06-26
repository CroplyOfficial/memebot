import Discord from 'discord.js';
import dotenv from 'dotenv';

import { newestMeme, popularMeme, bestMemeByRange } from './controllers/memeControllers.js';

dotenv.config();

const client = new Discord.Client();

client.on('message', async (msg) => {
  const messageSplit = msg.content.split(' ');
  try {
    const messageStart = `${messageSplit[0]} ${messageSplit[1]}`

    switch (messageStart) {
      case '$meme newest':
        newestMeme(msg);
        return;
      case '$meme top':
        popularMeme(msg);
        return;
      case '$meme best':
        bestMemeByRange(msg);
        return;
    }
  } catch (error) {
    null;
  }
});

client.on('ready', () => {
  client.user.setPresence({
    status: 'online',
    activity: {
      name: '$help',
      type: 'LISTENING',
    },
  });
  console.log(`${client.user.username} is up and running!`);
});

client.login(process.env.BOT_TOKEN);
