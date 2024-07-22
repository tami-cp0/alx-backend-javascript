process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
//   console.log(`Your name is: ${answer}`);
//   rl.close();
//   process.exit(0);
// });

// rl.on('close', () => {
//   console.log('This important software is now closing');
// });
