import { helpEmbed } from '../utils/memeEmbed.js';

const help = (msg) => {
  const helpArg = msg.content.split('help ')[1];
  switch (helpArg) {
    case "random":
      helpEmbed(msg, 'Random', 'The random command, as the name suggests gets a random meme.\n\n**Usage**:```$meme random```');
      return;
    case "top":
      helpEmbed(msg, 'Top', 'The top command shows the most popular meme of all time\n\n**Usage**:```$meme top```');
      return;
    case "topartist":
      helpEmbed(msg, 'Topartist', 'The topartist command shows the artist with the most amount of likotas\n\n**Usage:**```$meme topartist```');
      return;
    case "new":
      helpEmbed(msg, 'New', 'The new commnad gets the latest posted meme.\n\n**Usage:**```$meme new``');
      return;
    case "search":
      helpEmbed(msg, 'Search', 'Returns a random meme with the searched tag.\n\n**Usage:**```$meme search <tag>```\nFor example, let\'say I want to search for ``moon` ```$meme search moon```')
      return;
    case "leaders":
      helpEmbed(msg, 'Leaders', 'Returns the top meme for a set time period, this command is primarily meant to decide the winners for contests.\n\n**Usage:**```$meme leaders --start <start date> --end <end date> --count <count>```\nSo if I want to get top 3 memes from 20th June 2021 to 27th June 2021```$meme leaders --start jun 20 2021 --end jun 27 2021 --count 3```');
      return;
    default:
      helpEmbed(msg, 'Help is here!', "MemeBot is a bot built for https://iotamemes.com/, it has several features that can be used by the following commands.\n\n```$meme random``` - shows a random meme\n\n```$meme top``` - shows the top ranked meme\n\n```$meme topartist``` - shows the top ranked artist\n\n```$meme new``` - shows the newest meme\n\n```$meme search <tag>``` - brings up a random meme with the tag you enter\n(Eg. $meme search hodl, $meme search moon, etc...)\n\n```$meme leaders``` - used for competitions to show the top ranked memes during a set time period.\n(Eg. $meme leaders --start 20 Jun 2021 --end 30 Jun 2021 --count 3)\n\n```$meme help``` - brings up the bot commands\n\n**COMMAND HELP**\n\nYou can get help for a command by ```$meme help <command>```for example```$meme help random```");
      return;
  }
}

export { help }
