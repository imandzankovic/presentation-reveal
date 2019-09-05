var About = require('./aboutModel');
const fs = require("fs")
var _ = require('lodash');
var path = require('path')

exports.params = function (req, res, next, id) {
  About.findById(id)
    .then(function (about) {
      if (!about) {
        next(new Error('No about with that id'));
      } else {
        req.about = about;
        next();
      }
    }, function (err) {
      next(err);
    });
};

exports.get = function (req, res, next) {
  About.find({}, '-__v')
    .then(function (abouts) {
        res.render(path.resolve('/Users/Iman/Desktop/reveal/reveal.js/d.html'), {
        
        //  abouts:abouts
        abouts:abouts

        }, function (err, memo) {
          console.log(err);
         
          res.send(memo)
        });
     
    }, function (err) {
      next(err);
    });
};
exports.getOne = function (req, res, next) {
  var about = req.about;
  res.json(about);
};

exports.put = function (req, res, next) {
  var about = req.about;

  var update = req.body;

  _.merge(about, update);

  about.save(function (err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function (req, res, next) {
  var newabout = req.body;
  console.log(newabout)
  About.create(newabout)
    .then(function (about) {
      res.json(about);
    }, function (err) {
      next(err);
    });
};

exports.delete = async function (req, res, next) {
  req.about.remove(function (err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
