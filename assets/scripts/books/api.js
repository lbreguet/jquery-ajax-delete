'use strict';

const config = require('../config.js');

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + id,
    method: 'GET',
  });
};

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + id,
    method: 'DELETE',
  });
};

module.exports = {
  index,
  show,
  destroy,
};
