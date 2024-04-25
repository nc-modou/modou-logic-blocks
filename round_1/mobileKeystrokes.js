const mobileDisplayKeystrokes = (word) => {
  let keystrokes = 0;

  const ASCII_CODE_OF_O = 111;
  const ASCII_CODE_OF_V = 118;

  for (let i = 0; i < word.length; i++) {
    const asciiCode = word.charCodeAt(i);

    if (asciiCode >= 35 && asciiCode <= 57) {
      keystrokes++;
    } else if (asciiCode <= ASCII_CODE_OF_O) {
      let asciiFactor = asciiCode % 3;
      if (asciiFactor === 1) {
        keystrokes += 2;
      } else if (asciiFactor === 2) {
        keystrokes += 3;
      } else if (asciiFactor === 0) {
        keystrokes += 4;
      }
    } else if (asciiCode >= ASCII_CODE_OF_O) {
      const asciiFactorBy4 = asciiCode % 4;
      if (asciiCode <= ASCII_CODE_OF_V) {
        if (asciiFactorBy4 === 0) {
          keystrokes += 2;
        } else if (asciiFactorBy4 === 1) {
          keystrokes += 3;
        } else if (asciiFactorBy4 === 2) {
          keystrokes += 4;
        } else if (asciiFactorBy4 === 3) {
          keystrokes += 5;
        }
      } else {
        if (asciiFactorBy4 === 3) {
          keystrokes += 2;
        } else if (asciiFactorBy4 === 0) {
          keystrokes += 3;
        } else if (asciiFactorBy4 === 1) {
          keystrokes += 4;
        } else if (asciiFactorBy4 === 2) {
          keystrokes += 5;
        }
      }
    }
  }
  return keystrokes;
};

exports.mobileDisplayKeystrokes = mobileDisplayKeystrokes;
