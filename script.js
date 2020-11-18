function encrypt() {
  const val = document.getElementById('normal').value;
  const userKey = document.getElementById('key').value;
  console.log('encrypt ', val);
  const word = val.split('');

  const encrypted = [];

  word.forEach((letter, index) => {
    if (letter == ' ') {
      encrypted.push(letter);
    } else {
      const alphabet = mountAlphabet(letter);
      const next = getCharacterIndex(getNextNonSpace(word, index) || userKey);
      encrypted.push(alphabet[next]);
    }
  });

  document.getElementById('cripto').value = encrypted.join('');
}

function decrypt() {
  let val = document.getElementById('cripto').value;
  const userKey = document.getElementById('key').value;
  console.log('decrypt ', val);
  const word = val.split('').reverse();

  const decrypted = [];
  word.forEach((letter, index) => {
    if (letter == ' ') {
      decrypted.push(letter);
    } else {
      const key = getPrevNonSpace(decrypted, index) || userKey;
      const alphabet = mountAlphabet(key);

      const nextCode = alphabet.indexOf(letter) + 97;
      decrypted.push(String.fromCharCode(nextCode));
    }
  });

  document.getElementById('normal').value = decrypted.reverse().join('');
}

function mountAlphabet(letter) {
  let code = letter.charCodeAt(0);
  let alphabet = [];

  for (i = code; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  for (i = 97; i < code; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}

function getCharacterIndex(letter) {
  let code = letter.charCodeAt(0);
  return code - 97;
}

function getNextNonSpace(word, index) {
  for (i = index + 1; i < word.length; i++) {
    if (word[i] != ' ') {
      return word[i];
    }
  }

  return false;
}

function getPrevNonSpace(word, index) {
  for (i = index - 1; i >= 0; i--) {
    if (word[i] != ' ') {
      return word[i];
    }
  }

  return false;
}
