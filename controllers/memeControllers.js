import axios from 'axios';

/**
 * Get the latest meme and send a message
 * @param      msg : Discord message object
 * @trigger    $newmeme
 * @returns    embed with meme
 */

const newestMeme = async (msg) => {
  const { data } = await axios.get(`${process.env.BASE}/api/memes/@bot/newest`);
  const memeURI = encodeURI(`${process.env.BASE}${data.imgURL}`);
  msg.channel.send(`${data.upvotes} Likotas \n${memeURI}`);
}

/**
 * Get the most popular meme and send a message
 *
 * @param       msg: discord message object
 * @trigger     $popular
 * @retunrs     message with the image
 */

const popularMeme = async (msg) => {
  const { data } = await axios.get(`${process.env.BASE}/api/memes/@bot/popular`);
  const memeURI = encodeURI(`${process.env.BASE}${data.imgURL}`);
  msg.channel.send(`${data.upvotes} Likotas \n${memeURI}`);
}

/**
 * Get n number of best memes in a time period
 *
 * @param       msg: discord message object
 * @trigger     $best
 * @returns     list with links to top memes
 */

const bestMemeByRange = async (msg) => {
  try {
    const messageParams = msg.content.split(' ');
    const startTime = messageParams[1];
    const endTime = messageParams[2];
    const n = parseInt(messageParams[3]);
    if (startTime && endTime && n) {

    } else {
      throw new Error('invalid params');
    }
  } catch (error) {
    console.log(error);
    msg.channel.send('incorrect parameters passed, please try again.');
  }
}

export { newestMeme, popularMeme, bestMemeByRange };
