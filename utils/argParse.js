/**
 * Returns a dictionary with the parsed
 * arguments for a messate
 *
 * @param   msg: string of the message
 * @returns object with arg as the key and value as value
 */

const argParse = (msg) => {
  const args = msg.split('--');
  const parsedArgs = new Object();
  args.map((arg) => {
    try {
      const split = arg.split(' ');
      const key = split[0];
      const val = split.slice(1).join(' ');
      if (key && key !== '') {
        parsedArgs[key] = val;
      }
    } catch (error) {
      null;
    }
  });
  return parsedArgs
}

export {
  argParse
}
