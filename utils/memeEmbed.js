import { MessageEmbed } from 'discord.js';

/**
 * Create a nice looking embed for a meme
 *
 * @param   msg: discord message object
 * @param   title: title to set for the embed
 * @param   meme: meme object fetched from the API
 * @param   memeURI: link for the meme
 * @returns sends an embed
 */

const createMemeEmbed = async (msg, title, meme, memeURI) => {
  const memeEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(title)
    .setURL(`https://iotamemes.com/meme/${meme._id}`)
	.addFields(
	  { name: 'Likotas', value: meme.upvotes },
	)
	.setImage(memeURI)
	.setFooter('IOTA Memes');
  msg.channel.send(memeEmbed);
}

/**
 * create a nice looking embed for meme
 *
 * @param   msg: discord message object
 * @param   artist: user document fetched from API
 * @returns sends a nice embed
 */

const createArtistEmbed = async (msg, artist) => {
  const artistEmbed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle(artist.username)
	.setURL(`https://iotamemes.com/user/${artist._id}`)
	.setThumbnail(artist.avatar)
	.addFields(
	  { name: 'Likotas', value: artist.upvotes },
	  { name: 'Memes', value: artist.totalMemes },
	)
	.setFooter('IOTA Memes');
  msg.channel.send(artistEmbed);
}

/**
 * send an embed with a custom message
 *
 * @param   msg: Discord message object
 * @param   title: String, title for the embed
 * @param   message: String, message to show
 * @returns sends embed in the same channel
 */

const helpEmbed = (msg, title, message) => {
  const embed = new MessageEmbed()
    .setTitle(title)
    .setColor(0x00ff00)
    .setDescription(message);
  msg.channel.send(embed);
};



export { createMemeEmbed, createArtistEmbed, helpEmbed }
