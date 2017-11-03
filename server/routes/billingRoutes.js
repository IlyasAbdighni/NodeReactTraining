const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, (req, res) => {
    console.log(req);
    stripe.charges
      .create({
        amount: 500,
        currency: 'usd',
        description: '$5 dollers per month',
        source: req.body.id
      })
      .then(charge => {
        req.user.credits += 5;
        req.user
          .save()
          .then(user => {
            res.send(user);
          })
          .catch(error => {
            console.error('User credit update error: ', error);
          });
      })
      .catch(error => {
        console.error('User charege create error: ', error);
      });
  });
};
