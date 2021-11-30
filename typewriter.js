function newSentence(v) {
  // starting with i at 0 which is a number
  let i = 0;
  //for every character in parameter v
  for (const character of v) {
    //increment i by 1
    i++;
    //settimeout function which takes 2 parameters.
    //first one is a function for what to do with characters
    //second parameter which takes a time for delay or when the word/character should display
    setTimeout(() => {
      //prints out the character of the sentence in a line
      process.stdout.write(character) ;
      //after this delay or time which is in milliseconds multiplied by the i
    }, 50 * i);
  }
}

const b = "I am beauty\n";
newSentence(b);
