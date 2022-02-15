// set up variables
const stdin = process.stdin;
const stdout = process.stdout;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// helper function to beep
const beep = function() {
  stdout.write('\x07');
};
// on event on stdin
stdin.on('data', (key) => {
  // check if user type the following number
  const time = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // allow user to exit the program with ctrl + c
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }

  // beep right away if b is pressed
  if (key === 'b') {
    beep();
  }
 
  // if number is typed, set timer to beep
  if (time.includes(Number(key))) {
    console.log(`setting timer for ${key} seconds....`);
    setTimeout(beep, key * 1000);
  }
  
});

