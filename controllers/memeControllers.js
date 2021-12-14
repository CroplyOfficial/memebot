import axios from "axios";
import { argParse } from "../utils/argParse.js";
import { createMemeEmbed } from "../utils/memeEmbed.js";
import { randInt } from "../utils/math.js";

/**
 * Get the latest meme and send a message
 * @param      msg : Discord message object
 * @trigger    $meme newest
 * @returns    embed with meme
 */

const newestMeme = async (msg) => {
  const { data } = await axios.get(`${process.env.BASE}/api/memes/@bot/newest`);
  const memeURI = encodeURI(`${process.env.BASE}${data.imgURL}`);
  createMemeEmbed(msg, "Latest Meme", data, memeURI);
};

/**
 * Get the most popular meme and send a message
 *
 * @param       msg: discord message object
 * @trigger     $meme top
 * @retunrs     message with the image
 */

const popularMeme = async (msg) => {
  const { data } = await axios.get(
    `${process.env.BASE}/api/memes/@bot/popular`
  );
  const memeURI = encodeURI(`${process.env.BASE}${data.imgURL}`);
  createMemeEmbed(msg, "Top Meme", data, memeURI);
};

/**
 * Get n number of best memes in a time period
 *
 * @param       msg: discord message object
 * @trigger     $meme best
 * @returns     list with links to top memes
 */

const bestMemeByRange = async (msg) => {
  try {
    const { start, end, count } = argParse(
      msg.content.split("$meme leaders")[1]
    );
    if (start && end) {
      const n = count && count > 3 ? 3 : count ? count : 1;
      console.log(n);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios
        .post(
          `${process.env.BASE}/api/memes/@bot/popular`,
          {
            start,
            end,
          },
          config
        )
        .catch((error) => {
          console.log(error);
        });
      const memeLeaders = data.slice(0, n);
      memeLeaders.map((meme) => {
        const memeURI = encodeURI(`${process.env.BASE}${meme.imgURL}`);
        createMemeEmbed(
          msg,
          `Rank ${memeLeaders.indexOf(meme) + 1}`,
          meme,
          memeURI
        );
      });
    } else {
      throw new Error("invalid params");
    }
  } catch (error) {
    console.log(error);
    msg.channel.send("incorrect parameters passed, please try again.");
  }
};

/**
 * get a random meme :)
 * @param   msg: discord message object
 * @trigger $meme random
 * @returns sends  message with a random meme
 */

const getRandomMeme = async (msg) => {
  try {
    const memes = await axios.get(`${process.env.BASE}/api/memes`);
    const memeLength = memes.data.length;
    const randomMeme = memes.data[randInt(0, memeLength - 1)];
    const memeURI = encodeURI(`${process.env.BASE}${randomMeme.imgURL}`);
    createMemeEmbed(msg, `Random Meme...`, randomMeme, memeURI);
  } catch (error) {
    console.log(error);
    msg.channel.send("unable to get memes :(");
  }
};

/**
 * search for a meme
 * @param    msg: discord message object
 * @param    $meme search
 * @returns  shows top result for a tag search
 */

const searchTagMeme = async (msg) => {
  try {
    const memes = await axios.get(`${process.env.BASE}/api/memes`);
    const query = msg.content.split("$meme search ")[1];
    if (query) {
      const searchedMemes = memes.data.filter((meme) =>
        JSON.stringify(meme.memeTags)
          .toLowerCase()
          .includes(query.toLowerCase())
      );
      const rand = randInt(0, searchedMemes.length - 1);
      const searchedMeme = searchedMemes[rand];
      const memeURI = encodeURI(`${process.env.BASE}${searchedMeme.imgURL}`);
      createMemeEmbed(msg, `#${query}`, searchedMeme, memeURI);
    } else {
      throw new Error("no query specified");
    }
  } catch (error) {
    console.log(error);
    msg.channel.send("unable to lookup the requested tag");
  }
};

export {
  newestMeme,
  popularMeme,
  bestMemeByRange,
  getRandomMeme,
  searchTagMeme,
};
