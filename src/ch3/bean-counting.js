function countChar(text, char) {
  var count = 0;
  for (var c = 0; c < text.length; c += 1) {
    if (text.charAt(c) == char) {
      count += 1;
    }
  }

  return count;
}

function countBs(text) {
  return countChar(text, 'B');
}

console.log(`countChar('Bubba Gumps BBQ', 'B') = ${countChar('Bubba Gumps BBQ', 'B')}`);
console.log(`countChar('Run Forest, run', 'B') = ${countChar('Run Forest, run', 'B')}`);
console.log(`countBs('Bubba Gumps BBQ') = ${countBs('Bubba Gumps BBQ')}`);
console.log(`countBs('Run Forest, run') = ${countBs('Run Forest, run')}`);
