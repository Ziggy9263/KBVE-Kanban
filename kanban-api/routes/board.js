var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var Board = require('../models/Board.js');

/* GET Board listing. */
router.get('/', function(req, res, next) {
  Board.find(function(err, Board) {
    if (err) return next(err);
    res.json(Board);
  });
});

/* POST Board entry. */
router.post('/', function(req, res, next) {
  Board.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET Board entry by id. */
router.get('/:id', function(req, res, next) {
  Board.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT Board entry by id. */
router.put('/:id', function(req, res, next) {
  Board.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Board entry by id. */
router.delete('/:id', function(req, res, next) {
  Board.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
