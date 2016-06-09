'use strict';

angular
  .module('playerOfTheYear', [])

  .controller('MainController', ['$scope', 'playersService', function($scope, playersService) {
    $scope.players = playersService.players;
  }])

  .factory('playersService', function() {
    var players = [
      {
        name: 'Алекс',
        surname: 'Тейшейра',
        month: 'июль, сентябрь, октябрь, ноябрь, декабрь',
        count: 5
      },
      {
        name: '',
        surname: 'Марлос',
        month: 'август, апрель',
        count: 2
      },
      {
        name: 'Виктор',
        surname: 'Коваленко',
        month: 'январь',
        count: 1
      },
      {
        name: 'Андрей',
        surname: 'Пятов',
        month: 'февраль',
        count: 1
      },
      {
        name: '',
        surname: 'Тайсон',
        month: 'март',
        count: 1
      },
      {
        name: '',
        surname: 'Эдуардо',
        month: 'май',
        count: 1
      }
    ];

    return {
      players: players
    }
  });