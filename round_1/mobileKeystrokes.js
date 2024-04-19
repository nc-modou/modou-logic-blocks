const mobileDisplayKeystrokes = (word) => {
  let keystrokes = 0;
  for (let i = 0; i < word.length; i++) {
    console.log(keystrokes);
    console.log(word[i - 1]);
    const asciiCode = word.charCodeAt(i);
    console.log(`ASCII code of '${word[i]}' is: ${asciiCode}`);
    if (asciiCode >= 35 && asciiCode <= 57) {
      keystrokes++;
    } else if (asciiCode <= 111) {
      let asciiFactor = asciiCode % 3;
      if (asciiFactor === 1) {
        console.log(`${word[i]} gives 2 keystrokes`);
        keystrokes += 2;
      } else if (asciiFactor === 2) {
        console.log(`${word[i]} gives 3 keystrokes`);
        keystrokes += 3;
      } else if (asciiFactor === 0) {
        console.log(`${word[i]} gives 4 keystrokes`);
        keystrokes += 4;
      }
    } else if (asciiCode >= 111) {
      // beyond o
      let asciiFactor = asciiCode % 3;
      console.log(`${word[i]} with code ${asciiCode} gets into the 110 range `);
      console.log(`it's factor is ${asciiFactor}`);
      let asciiFactorBy4 = asciiCode % 4;
      if (asciiCode <= 118) {
        console.log(`${word[i]} gets into the 118 block`);
        console.log(`${asciiCode}`);
        console.log(`ascii factor by 4 is ${asciiFactorBy4}`);
        if (asciiFactorBy4 === 0) {
          console.log(`${word[i]} gives 2 keystrokes`);
          keystrokes += 2;
        } else if (asciiFactorBy4 === 1) {
          console.log(`${word[i]} gives 3 keystrokes`);
          keystrokes += 3;
        } else if (asciiFactorBy4 === 2) {
          console.log(`${word[i]} gives 4 keystrokes`);
          keystrokes += 4;
        } else if (asciiFactorBy4 === 3) {
          console.log(`${word[i]} gives 5 keystrokes`);
          keystrokes += 5;
        }
      } else {
        console.log(
          `${word[i]} with code ${asciiCode} gets into the else block for greater than 118`
        );
        if (asciiFactor === 3) {
          console.log(`${word[i]} gives 2 keystrokes`);
          keystrokes += 2;
        } else if (asciiFactor === 0) {
          console.log(`${word[i]} gives 3 keystrokes`);
          keystrokes += 3;
        } else if (asciiFactor === 1) {
          console.log(`${word[i]} gives 4 keystrokes`);
          keystrokes += 4;
        } else if (asciiFactor === 2) {
          console.log(`${word[i]} gives 5 keystrokes`);
          keystrokes += 5;
        }
      }
    }
  }
  return keystrokes;
};

// mobileDisplayKeystrokes("adgjmptw")
// // 111 cutoff
// mobileDisplayKeystrokes("o");
// mobileDisplayKeystrokes("pqrs");
console.log(3+4+4+2+3+4+4+2+3+4+5);
// mobileDisplayKeystrokes("tuv");
console.log("\n");
// mobileDisplayKeystrokes("wxyz");

exports.mobileDisplayKeystrokes = mobileDisplayKeystrokes;
