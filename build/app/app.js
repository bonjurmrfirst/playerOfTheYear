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
        count: 5,
        src: 'Teixeira'
      },
      {
        name: '',
        surname: 'Марлос',
        month: 'август, апрель',
        count: 2,
        src: 'Marlos'
      },
      {
        name: 'Виктор',
        surname: 'Коваленко',
        month: 'январь',
        count: 1,
        src: 'Kovalenko'
      },
      {
        name: 'Андрей',
        surname: 'Пятов',
        month: 'февраль',
        count: 1,
        src: 'Pyatov'
      },
      {
        name: '',
        surname: 'Тайсон',
        month: 'март',
        count: 1,
        src: 'Tayson'
      },
      {
        name: '',
        surname: 'Эдуардо',
        month: 'май',
        count: 1,
        src: 'Eduardo'
      }
    ];

    return {
      players: players
    }
  });