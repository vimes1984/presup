'use strict';

angular.module('simonApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
