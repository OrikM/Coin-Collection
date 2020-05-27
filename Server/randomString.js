function randomString() {
    let resString = "";
    const letters = ["[a-zA-Z]+[0-9]+"];
    const length = Math.floor(10 + Math.random().toString(36).substring(1, 100));
    for (let i = 0; i < length; i++) {
      resString += letters[Math.floor(Math.random() * letters.length) - 1];
    }
    return resString;
  }
  
  module.exports = randomString();
  