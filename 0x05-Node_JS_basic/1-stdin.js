console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    const trimmedName = name.toString().trim();
    if (trimmedName.toLowerCase() === 'exit') {
      console.log('This important software is now closing');
      process.exit(0);
    } else {
      console.log(`Your name is: ${trimmedName}`);
    }
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

module.exports = process.stdin;
