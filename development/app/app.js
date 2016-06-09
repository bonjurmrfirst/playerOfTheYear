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
        month: 'Лучший в июле, сентябре, октябре, ноябре, декабре',
        count: 5,
        src: 'Teixeira'
      },
      {
        name: '',
        surname: 'Марлос',
        month: 'Лучший в августе, апреле',
        count: 2,
        src: 'Marlos'
      },
      {
        name: 'Виктор',
        surname: 'Коваленко',
        month: 'Лучший в январе',
        count: 1,
        src: 'Kovalenko'
      },
      {
        name: 'Андрей',
        surname: 'Пятов',
        month: 'Лучший в феврале',
        count: 1,
        src: 'Pyatov'
      },
      {
        name: '',
        surname: 'Тайсон',
        month: 'Лучший в марте',
        count: 1,
        src: 'Tayson'
      },
      {
        name: '',
        surname: 'Эдуардо',
        month: 'Лучший в мае',
        count: 1,
        src: 'Eduardo'
      }
    ];

    return {
      players: players
    }
  });