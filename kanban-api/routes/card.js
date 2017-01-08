var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var Card = require('../models/Card.js');

/* GET Card listing. */
router.get('/', function(req, res, next) {
  Card.find(function(err, Card) {
    if (err) return next(err);
    res.json(Card);
  });
});

/* POST Card entry. */
router.post('/', function(req, res, next) {
  Card.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET Card entry by id. */
router.get('/:id', function(req, res, next) {
  Card.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT Card entry by id. */
router.put('/:id', function(req, res, next) {
  Card.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Card entry by id. */
router.delete('/:id', function(req, res, next) {
  Card.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
