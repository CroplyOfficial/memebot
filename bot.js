import Discord from 'discord.js';
import dotenv from 'dotenv';

import {
  newestMeme,
  popularMeme,
  bestMemeByRange,
  getRandomMeme,
  searchTagMeme
} from './controllers/memeControllers.js';
import {
  topArtist
} from './controllers/artistControllers.js';
import {
  help
} from './controllers/helpControllers.js';

dotenv.config();

const client = new Discord.Client();

client.on('message', async (msg) => {
  const messageSplit = msg.content.split(' ');
  try {
    const messageStart = `${messageSplit[0]} ${messageSplit[1]}`

    switch (messageStart) {
      case '$meme new':
        newestMeme(msg);
        return;
      case '$meme top':
        popularMeme(msg);
        return;
      case '$meme leaders':
        bestMemeByRange(msg);
        return;
      case '$meme random':
        getRandomMeme(msg);
        return;
      case '$meme search':
        searchTagMeme(msg);
        return;
      case '$meme topartist':
        topArtist(msg);
        return;
      case '$meme help':
        help(msg);
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
      name: '$meme help',
      type: 'LISTENING',
    },
  });
  console.log(`${client.user.username} is up and running!`);
});

client.login(process.env.BOT_TOKEN);
