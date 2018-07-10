const express = require('express');
const router = express.Router();

function checkIfBoss(req, res, next) {
  if (req.user.role === "Boss") return next();
  res.send('Tu no tienes permiso!');
}
const checkRole = (role) => (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect('/login');
  if (req.user.role === role) return next();
  return res.send('no tienes permiso');
}


router.get('/boss', checkRole('Boss'), (req, res, next) => {
  res.send('Boss');

});
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
