
module.exports = function(req, res, next) {

  if (req.query && req.query.user) {
    req.session.user = {
      username: req.query.user
    };
  }

  next();
};