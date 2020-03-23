module.exports = password => {
    if ( password.length < 6 ) {
      return Promise.reject({
        message: 'The password is too short'
      })
    }
    return Promise.resolve('The password passes the validation');
};
