import axios from 'axios';
import { createArtistEmbed } from '../utils/memeEmbed.js';

/**
 * Get the top artist
 *
 * @param   msg: discord message object
 * @trigger $meme topartist
 * @returns sends top artist embed
 */

const topArtist = async (msg) => {
  try {
    const { data } = await axios.get(`${process.env.BASE}/api/users/@bot/popular`);
    createArtistEmbed(msg, data);
  } catch (error) {
    console.log(error);
    msg.channel.send('unable to get top artist');
  }
}

export {
  topArtist
}
