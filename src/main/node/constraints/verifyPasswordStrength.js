const zxcvbn = require('zxcvbn');

module.exports = password => {
  const score = zxcvbn(password).score;
  if ( score < 2 ) {
    return Promise.reject({
      message: 'The password is too weak',
      score
    })
  }
  return Promise.resolve({
    message: 'The password has a good strength',
    score
  });
};
