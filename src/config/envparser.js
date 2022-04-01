const { parsed } = require('dotenv').config();

module.exports = function () {
  for (key in parsed) {
    if (typeof parsed[key] === 'string') {
      parsed[key] = JSON.stringify(parsed[key]);
    }
  }
  return parsed;
};
